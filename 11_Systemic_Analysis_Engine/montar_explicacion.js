// SOIH - Monta la explicación «Cómo se construye el modelo» de un caso.
// Uso: node montar_explicacion.js "<carpeta del caso>" [salida.html]
//
// Lee <caso>/datos/historia.js (el guion: nodos, posiciones y pasos) y toma CADA FLECHA de la ficha de relaciones
// del caso por su id: signo, nivel, mecanismo, fuente y evidencia en contra salen tal cual, no se escriben en el guion.
// Los nombres y definiciones de las variables salen de la ficha de variables. Se para si:
//  - una flecha no existe en la ficha, no está en caso.js o sus extremos no son los nodos que el guion dibuja;
//  - una flecha aparece en un paso antes que sus dos nodos;
//  - un número escrito en el «dato» de un nodo no aparece en el último dato de su ficha;
//  - un marcador {{res:...}} no existe en datos/resumen.json.
// Plantilla: plantilla_explicacion.html (el guion la rellena en /*__DATOS__*/). Sin dependencias.
'use strict';
const fs = require('fs');
const path = require('path');

const caso = path.resolve(process.argv[2] || '.');
const H = require(path.join(caso, 'datos', 'historia.js'));
const salida = path.resolve(process.argv[3] || path.join(caso, H.salida || 'Como_se_construye_el_modelo.html'));
const plantilla = fs.readFileSync(path.join(__dirname, 'plantilla_explicacion.html'), 'utf8');
const errores = [];
const para = m => errores.push(m);

function leerCSV(f) {
  const t = fs.readFileSync(f, 'utf8').replace(/^\uFEFF/, '');
  const sep = t.split('\n')[0].includes(';') ? ';' : ',';
  const filas = []; let fila = [], cur = '', q = false;
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (q) { if (c === '"') { if (t[i + 1] === '"') { cur += '"'; i++; } else q = false; } else cur += c; }
    else if (c === '"') q = true;
    else if (c === sep) { fila.push(cur); cur = ''; }
    else if (c === '\n') { fila.push(cur.replace(/\r$/, '')); filas.push(fila); fila = []; cur = ''; }
    else cur += c;
  }
  if (cur || fila.length) { fila.push(cur); filas.push(fila); }
  const cab = filas.shift();
  return filas.filter(f => f.length > 1).map(f => Object.fromEntries(cab.map((k, i) => [k, f[i] == null ? '' : f[i]])));
}

// Sustituciones que declara el guion (p. ej. nombres propios que no se publican), aplicadas a todo texto de las fichas
const SUST = (H.sustituir || []).map(([de, a]) => [new RegExp(de, 'g'), a]);
const limpiaFila = r => Object.fromEntries(Object.entries(r).map(([k, v]) => [k, SUST.reduce((t, [re, x]) => t.replace(re, x), v)]));
const REL = Object.fromEntries(leerCSV(path.join(caso, H.relaciones)).map(r => [r.id, limpiaFila(r)]));
const VAR = Object.fromEntries(leerCSV(path.join(caso, H.variables)).map(v => [v.id, limpiaFila(v)]));
const modelo = require(path.join(caso, 'datos', 'caso.js'));
const enModelo = new Set((modelo.edges || []).map(e => e.id));
const resumen = JSON.parse(fs.readFileSync(path.join(caso, 'datos', 'resumen.json'), 'utf8'));

// {{res:a.b.c}} → valor de resumen.json, con coma decimal
function conRes(s, donde) {
  return String(s).replace(/\{\{res:([^}]+)\}\}/g, (m, k) => {
    const v = k.split('.').reduce((o, p) => (o == null ? undefined : o[p]), resumen);
    if (v == null || typeof v === 'object') { para(`${donde}: «${k}» no está en resumen.json`); return m; }
    return typeof v === 'number' ? v.toLocaleString('es-ES') : String(v);
  });
}

// Nodos
const TIPO = { existencia: 'deposito', 'decisión': 'decision', decision: 'decision', resultado: 'resultado' };
const numeros = s => (String(s).match(/\d+(?:[.,]\d+)*/g) || []).map(x => x.replace(/\./g, ''));
const nodos = H.nodos.map(n => {
  const v = VAR[n.id];
  if (!v) { para(`Nodo ${n.id}: no está en la ficha de variables`); return n; }
  const o = { id: n.id, x: n.x, y: n.y, et: n.et || v.nombre, tipo: n.tipo || TIPO[v.tipo] || 'variable', def: `${v.nombre}. ${v.definicion}` };
  if (n.w) o.w = n.w; if (n.h) o.h = n.h;
  if (n.dato) {
    const fuente = numeros(v.ultimo_dato);
    for (const x of numeros(n.dato)) if (!fuente.includes(x)) para(`Nodo ${n.id}: el dato «${n.dato}» lleva ${x}, que no está en su último dato («${v.ultimo_dato.slice(0, 120)}»)`);
    o.dato = n.dato; o.def += ` Último dato: ${v.ultimo_dato}`;
  }
  return o;
});
const idsNodo = new Set(nodos.map(n => n.id));

// Flechas, tomadas de la ficha
const RETARDO = { '<1': 'menos de un año', '1-4': 'de uno a cuatro años', '>4': 'más de cuatro años' };
function signoCorto(s) {
  const t = String(s).trim(), c = /condicional/i.test(t);
  const b = /^≈\s*0/.test(t) ? '≈0' : /^\+/.test(t) ? '+' : /^[−-]/.test(t) ? '−' : '?';
  return c && b !== '?' ? b + '?' : b;
}
const usadas = [...new Set(H.pasos.flatMap(p => p.enlaces || []))];
const enlaces = usadas.map(id => {
  const r = REL[id];
  if (!r) { para(`Flecha ${id}: no está en la ficha de relaciones`); return null; }
  if (!enModelo.has(id)) para(`Flecha ${id}: no está en caso.js (no entra en el cálculo)`);
  for (const ext of [r.origen, r.destino]) if (!idsNodo.has(ext)) para(`Flecha ${id} (${r.origen} → ${r.destino}): el guion no dibuja ${ext}`);
  const nv = r.nivel === 'DÉBIL' ? 'DEBIL' : r.nivel;
  const o = {
    id, de: r.origen, a: r.destino, nivel: nv, signo: r.signo, signoCorto: signoCorto(r.signo),
    etDe: VAR[r.origen] ? VAR[r.origen].nombre : r.origen, etA: VAR[r.destino] ? VAR[r.destino].nombre : r.destino,
    mecanismo: r.mecanismo, retardo: RETARDO[r.retardo] || (r.retardo && r.retardo !== '—' ? r.retardo + ' años' : ''),
    tipo: r.tipo_evidencia, ambito: r.ambito_evidencia, fuente: r.fuentes, lectura: r.lectura,
    contra: r.evidencia_en_contra, ref: `${id} en la ficha de relaciones` + (r.nota ? `. Nota: ${r.nota}` : '')
  };
  if (r.retardo === '>4') o.retardoLargo = true;
  if (H.curvas && H.curvas[id] != null) o.curva = H.curvas[id];
  return o;
}).filter(Boolean);

// Pasos: un nodo o una flecha no aparece antes de tiempo
const vistos = new Set();
const pasos = H.pasos.map((p, i) => {
  for (const n of p.nodos || []) { if (!idsNodo.has(n)) para(`Paso ${i + 1}: el nodo ${n} no está en el guion`); vistos.add(n); }
  for (const id of p.enlaces || []) { const r = REL[id]; if (r && (!vistos.has(r.origen) || !vistos.has(r.destino))) para(`Paso ${i + 1}: la flecha ${id} sale antes que sus nodos`); }
  return { titulo: conRes(p.titulo, `Paso ${i + 1}`), texto: conRes(p.texto, `Paso ${i + 1}`), nodos: p.nodos || [], enlaces: p.enlaces || [], resaltar: p.resaltar || [], todo: !!p.todo };
});
for (const n of idsNodo) if (!vistos.has(n)) para(`El nodo ${n} no aparece en ningún paso`);

if (errores.length) { console.error('No se monta la explicación:\n - ' + errores.join('\n - ')); process.exit(1); }

const DATOS = { titulo: H.titulo, subtitulo: conRes(H.subtitulo, 'subtítulo'), pie: conRes(H.pie, 'pie'), ancho: H.ancho, alto: H.alto, nodos, flujos: H.flujos || [], enlaces, pasos };
const js = 'const DATOS = ' + JSON.stringify(DATOS).replace(/<\//g, '<\\/') + ';';
if (!plantilla.includes('/*__DATOS__*/')) { console.error('La plantilla no tiene /*__DATOS__*/'); process.exit(1); }
fs.writeFileSync(salida, plantilla.replace('/*__DATOS__*/', () => js));
console.log(`Explicación: ${pasos.length} pasos, ${nodos.length} nodos, ${enlaces.length} flechas → ${salida}`);
