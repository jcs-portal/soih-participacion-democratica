# SOIH · La participación democrática en España como sistema

Un modelo causal de qué hace que la gente participe en las decisiones democráticas en España, y de qué
votos y políticas consiguen que más personas vivan con dignidad. Con sus datos, sus fuentes y el
programa que lo calcula. Está hecho para que cualquiera pueda **revisarlo, discutirlo, cambiarle un dato
y ver qué pasa**.

Autor: Juan Carlos Siria · Versión del paquete: 0.1 · Fecha: 13 de noviembre de 2026

## Qué es

- **Un mapa de causas y efectos**: 212 factores (participación, confianza, desigualdad,
  soledad, reglas electorales, impuestos, gasto, salario mínimo) unidos por 333 relaciones del
  tipo «si esto sube, aquello sube o baja».
- **Solo cuenta lo que tiene fuente.** Cada relación lleva su nivel de evidencia: firme (un estudio que
  aísla la causa, con datos de España o de la Unión Europea), con apoyo (la causa medida en otro país, o
  en España solo como asociación) o débil (informe, teoría o lectura parcial). Hay 273 relaciones
  con respaldo, 27 identidades contables y 29 hipótesis sin fuente, que no entran en
  el cálculo principal.
- **Un objetivo declarado**: se mide cómo viven las personas y cuánta gente participa, no el PIB ni la
  bolsa. Todo se juzga con la misma vara: los riesgos para la democracia se miden por conductas (atacar a
  jueces o a la prensa, señalar a minorías, incumplir sentencias, concentrar poder), no por etiquetas de
  partido. Es una elección, no un resultado; con otro objetivo, el orden de las medidas cambia.
- **Dice hacia dónde, no cuánto.** El modelo indica el sentido y el plazo de cada efecto, no su tamaño.
  Es dinámica de sistemas cualitativa.

## Por dónde empezar

| Si quieres… | Abre |
|---|---|
| Entenderlo en diez minutos | `12_Cases/Participacion democratica/SOIH_12_Participacion_Articulo_v0.1.pdf` |
| Ver cómo se construye, paso a paso | `12_Cases/Participacion democratica/Como_se_construye_el_modelo.html`: once pasos; cada flecha enseña su fuente |
| Jugar con él | **En línea: https://jcs-portal.github.io/soih-participacion-democratica/** (ordenador o móvil, sin instalar nada). **Cómo se usa: [Guía del simulador](GUIA_SIMULADOR.md)** |
| Ver el mapa entero | `Mapa_interactivo_N2.html` y `Esquema_del_sistema.html`, en la carpeta del caso |
| Saber de dónde sale cada relación | `datos/relaciones.csv`: mecanismo, fuente, nivel y evidencia en contra de cada una |
| Ver qué falta por comprobar | `datos/hipotesis_a_contrastar.csv`: las relaciones sin confirmar |
| Conocer el método | `00_Master_Methodology/SOIH_00_Master_Methodology_v0.2.pdf` |

## Tres maneras de usarlo

1. **Sin instalar nada.** Abre https://jcs-portal.github.io/soih-participacion-democratica/ en el
   ordenador o en el móvil. Se abre con un ejemplo cargado (más participación, sin decir cómo); cambia lo
   que quieras y mira qué resultados mejoran y empeoran, para quién y por qué camino. Lo que hagas se
   queda en tu pantalla. Sin conexión: descarga el paquete («Code» y «Download ZIP») y abre `index.html`.
2. **Cambiando los datos.** Edita `caso.js` y recalcula, como se explica abajo. Hace falta Node.js.
3. **Con tus propias convicciones.** Lo que creas y no puedas demostrar, escríbelo como hipótesis
   (`H(...)`) o como premisa. No se mezcla con lo comprobado: el programa calcula aparte qué pasaría si
   fuera cierto. Así entran también las tres tesis del autor.

## Cómo cambiarlo y recalcular

Solo hace falta [Node.js](https://nodejs.org) (cualquier versión reciente). No hay dependencias.

1. Edita `12_Cases/Participacion democratica/datos/caso.js`: variables, relaciones, escenarios, palancas,
   reglas de financiación y premisas.
2. Desde la carpeta `11_Systemic_Analysis_Engine`, ejecuta:

   ```
   node soih_engine.js "../12_Cases/Participacion democratica"
   ```

3. Se regeneran el simulador, el mapa, el esquema y los CSV de `datos/`. El resumen numérico queda en
   `datos/resumen.json`.

El programa **se detiene con un mensaje** si una relación no tiene fuente y no está marcada como
hipótesis, si se declara un nivel de datos sin escribir de dónde sale, o si un escenario de gasto no dice
cómo se financia. Es deliberado.

### Cómo se escribe una relación en `caso.js`

```js
// e(id, origen, destino, signo, mecanismo, retardo, nivel de datos, evidencia, lo que la contradice, extra)
e("R250", "L27", "P01", "-", "Desafección: quien no tiene partido fijo deja de votar…", "1-3 años", "D3",
  "Costas-Pérez (2014), IEB WP 2014/27 (causal…)", "", { ambito: "ES (municipales de 2007)" });
```

Niveles de datos: `D1` evidencia débil o de otro país; `D2` apoyo con datos de España o de la UE; `D3`
identificación causal con datos de España o de la UE. Las relaciones que solo valen en ciertas
condiciones llevan el campo `condicion` y se calculan en un nivel aparte.

### Ideas para jugar

- Cambia el objetivo: la lista `criterioSocial` decide qué resultados cuentan.
- Añade tus propias convicciones como **premisas**: el programa recalcula «si fueran ciertas» y lo
  muestra al lado del cálculo con evidencia.
- Marca como hipótesis una relación que no te convenza y mira qué conclusiones se caen.
- Haz el mapa de otro país: el programa no sabe nada de España.

### Regenerar la explicación y los documentos

La explicación paso a paso se genera desde el guion `datos/historia.js` (opcional; hace falta el
inventario completo del caso, que no va en este paquete):

```
node 11_Systemic_Analysis_Engine/montar_explicacion.js "12_Cases/Participacion democratica"
```

El Word y el PDF, solo en Windows con Word, PowerShell 7 y Edge, con `_fuente_html\html_a_word.ps1`
sobre la plantilla de `_fuente_html`. **La prosa no se actualiza sola**: si cambias el modelo, revisa el
texto de la plantilla.

## Qué hay en cada carpeta

| Carpeta | Contenido |
|---|---|
| `00_Master_Methodology` | El método SOIH, versión 0.2 |
| `11_Systemic_Analysis_Engine` | El programa (`soih_engine.js`, `montar_explicacion.js`) y las plantillas de las herramientas interactivas |
| `12_Cases/Participacion democratica` | El caso: documentos, herramientas interactivas, imágenes y `datos/` |
| `_fuente_html` | Plantilla del documento y el conversor a Word |

## Lo que debes saber antes de fiarte

- **Da dirección, no magnitud.** «Mejora» significa que las causas empujan a favor. Además del cálculo
  del programa, el caso se ha contrastado con datos: como casi ningún peso está medido, se probaron miles
  de combinaciones de pesos y solo se conservaron las que reproducen lo que dicen los datos. Una
  conclusión del documento solo se da por buena si se cumple en al menos el 85 % de ellas. Ese análisis
  no va en este paquete; sus resultados están en el documento.
- **El resultado depende de lo que se ha estudiado.** Lo que no tiene fuente no cuenta. Ha cambiado cada
  vez que ha entrado evidencia nueva.
- **Mucha evidencia es de otros países o solo de asociación.** Se indica en cada relación.
- **Hay huecos declarados**: si en España las políticas atienden menos a quien vota menos; cómo afecta la
  desinformación a la participación (no hay ningún estudio español); cuánto pesa la riqueza acumulada en
  las reglas fiscales.
- **Cómo se reunió la evidencia.** La búsqueda y lectura de fuentes se hizo con ayuda de asistentes de
  inteligencia artificial, con una regla escrita: solo vale lo que se abrió y se leyó en la fuente, y se
  dice cuándo solo se leyó el resumen. Si vas a citar una cifra, ve a su fuente.

## Cómo contribuir

Lo más útil, por este orden: una **fuente** que respalde o contradiga una relación; un **dato** que llene
uno de los huecos declarados; un **error** en una cifra o en una cita; una **medida** que falte. Indica
siempre el documento, la página y el enlace.

## Licencia y cita

Ver `LICENCIA.md`. Si lo usas, cita: *Juan Carlos Siria, «SOIH · La participación democrática en España
como sistema», versión 0.1, 13 de noviembre de 2026.*
