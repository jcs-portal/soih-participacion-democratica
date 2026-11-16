// SOIH - Caso «Participación democrática»: guion de la explicación «Cómo se construye el modelo».
// Se monta con: node 11_Systemic_Analysis_Engine/montar_explicacion.js "12_Cases/Participacion democratica"
// Aquí solo va lo que el guion decide: qué nodos se dibujan, dónde, en qué orden aparecen y el texto de cada paso.
// Las flechas se citan por su id: signo, nivel, mecanismo y fuente los pone el generador desde la ficha de
// relaciones (investigacion/relaciones.csv), así que no se pueden desincronizar. Las cifras de los textos salen de
// las fichas, de los cálculos de investigacion/analisis/ y del cribado vigente (conjuntos_cribados.md, umbrales_cara.md,
// comparacion_cribado.md); las que dependen del motor se leen de datos/resumen.json con {{res:...}}.
// Forma inspirada en «How fascism takes hold» de Chris Soderquist (CC BY-NC-ND 4.0): contenido, diagrama y código propios.
'use strict';

module.exports = {
  titulo: 'Participación democrática: cómo se construye el modelo',
  subtitulo: 'Paso a paso, de la pregunta al mapa entero. Pulsa cualquier flecha para ver de qué estudio sale.',
  relaciones: 'investigacion/relaciones.csv',
  variables: 'investigacion/variables.csv',
  ancho: 1240, alto: 870,
  // Las fichas del inventario pueden nombrar al autor por sus iniciales: no se publica (decisión del 25/10/2026)
  // (J[C] es la misma expresión, escrita así para que las iniciales no aparezcan en el paquete publicado)
  sustituir: [['\\(J[C],? ', '(autor, '], ['\\bde J[C]\\b', 'del autor'], ['\\bJ[C]\\b', 'el autor']],

  nodos: [
    { id: 'P01', et: 'Participación\nelectoral', x: 600, y: 410, dato: '66,59 % (2023)', w: 150 },
    { id: 'P06', et: 'Brecha de participación\npor renta del barrio', x: 900, y: 470, w: 196, dato: '40,7 % frente a 20,1 %', h: 70 },
    { id: 'E22', et: 'Desigualdad de la\nrenta disponible', x: 1110, y: 250, dato: 'Gini 30,8 (2025)', w: 156 },
    { id: 'L48', et: 'Confianza en las\ninstituciones', x: 600, y: 170, dato: 'Parlamento 26 % (2026)', w: 170, h: 70 },
    { id: 'L27', et: 'Escándalos de\ncorrupción', x: 330, y: 70 },
    { id: 'S47', et: 'Aislamiento\nsocial', x: 200, y: 290, dato: 've a amigos cada semana: 50,7 % (68,3 % en 2015)', w: 176, h: 70 },
    { id: 'S25', et: 'Soledad\nno deseada', x: 200, y: 500, dato: '20,2 % (2026)', h: 70 },
    { id: 'S16', et: 'Agravio, sentirse\ndespreciado', x: 1010, y: 80, w: 160 },
    { id: 'S22', et: 'Protesta', x: 830, y: 280, dato: '5,6 % (2022)' },
    { id: 'P39', et: 'Respuesta desigual\nde las políticas', x: 1120, y: 470, w: 160 },
    { id: 'E51', et: 'Gasto público\nen sanidad', x: 1120, y: 600, dato: '6,5 % (2024)', w: 144, h: 66 },
    { id: 'P31', et: 'Tipo de lista', x: 340, y: 720, w: 140 },
    { id: 'P30', et: 'Fórmula y\ncircunscripción', x: 190, y: 800, dato: 'umbral efectivo 10,2 %', w: 170, h: 62 },
    { id: 'P23', et: 'Fragmentación', x: 470, y: 800 },
    { id: 'P38', et: 'Inestabilidad\ndel gobierno', x: 530, y: 630, dato: '315 días en funciones (2016)', w: 196, h: 70 },
    { id: 'L49', et: 'Satisfacción con\nla democracia', x: 720, y: 800, w: 160 },
    { id: 'P33', et: 'Facilidades del\nvoto por correo', x: 750, y: 630, w: 150 },
    { id: 'E32', et: 'Salario mínimo', x: 930, y: 720, dato: '1.425 €/mes (2026)', w: 150, h: 52 },
    { id: 'E26', et: 'Pobreza laboral', x: 1130, y: 720, dato: '11,2 % (2025)', w: 150 },
    { id: 'E24', et: 'Riesgo de pobreza\no exclusión', x: 1130, y: 825, dato: '25,7 % (2025)', w: 156, h: 62 },
    { id: 'E60', et: 'Empleo', x: 930, y: 825 }
  ],

  curvas: { R271: 0.2, R296: 0.2, R325: 0.2, R328: 0.2, R118: -0.16, R499: 0, R119: 0, R346: 0.12, R164: 0.1, R327: 0, R107: -0.1, R122: 0.1 },

  pasos: [
    {
      titulo: 'Una sola pregunta',
      nodos: ['P01'],
      texto: `<p>¿Qué hace que más gente participe en las decisiones democráticas, y qué votos y políticas consiguen que más
        personas vivan con dignidad, con sus derechos respetados y con menos rabia?</p>
        <p>Se empieza por lo más visible: cuánta gente vota. En las generales de 2023 votó el 66,59 % del censo; contando
        solo a los residentes en España, cerca del 70 %.</p>
        <div class="dato">Cómo se lee: cada caja es algo que se puede medir. Las de esquinas redondeadas cambian de una
        vez para otra; las rectangulares, que irán apareciendo, son <b>depósitos</b>: se acumulan y tardan en moverse,
        como la confianza o la soledad.</div>`
    },
    {
      titulo: 'Quién no vota',
      nodos: ['P06', 'E22'],
      enlaces: ['R115', 'R164'],
      texto: `<p>La abstención no se reparte igual. En 2023, en los barrios de menos renta de 46 grandes ciudades se abstuvo
        el 40,7 %; en los de más renta, el 20,1 %. Son unos 21 puntos de diferencia; en 2004 eran unos 15.</p>
        <p>Las dos flechas dicen por qué se mueve esa brecha: cuando la participación baja, se retiran sobre todo los barrios
        pobres; y en los países más desiguales la diferencia es mayor.</p>
        <div class="dato">Cómo se lee: <b>+</b> quiere decir que las dos cosas se mueven en el mismo sentido; <b>−</b>, en
        sentido contrario. El grosor y el trazo de la flecha dicen cuánta evidencia la sostiene (leyenda, debajo del
        diagrama). Pulsa una flecha para ver su fuente.</div>`
    },
    {
      titulo: 'La confianza y el voto se alimentan',
      nodos: ['L48'],
      enlaces: ['R271', 'R296'],
      texto: `<p>En la primavera de 2026 solo el 14 % de los españoles confiaba en los partidos y el 26 % en el Parlamento,
        menos que la media europea. En 2013 llegó a ser del 5 % y el 7 %.</p>
        <p>Siguiendo a las mismas personas durante diez años (panel POLAT), quien gana un punto de confianza reduce algo su
        intención de no votar, y quien se abstiene confía un poco menos después. Las dos flechas cierran un <b>bucle de
        refuerzo</b>: cada vuelta empuja en el mismo sentido.</p>
        <div class="aviso">Que un bucle exista no quiere decir que pese. Medido con datos, este se refuerza muy poco: lo
        que da una vuelta vuelve multiplicado por 0,005 (como mucho, por 0,01). No hay aquí una espiral de desconfianza.</div>`
    },
    {
      titulo: 'La corrupción: lo mejor medido',
      nodos: ['L27'],
      enlaces: ['R249', 'R250'],
      texto: `<p>Las dos flechas más firmes de esta parte del mapa son españolas y tienen diseño causal: comparan municipios con
        escándalo y sin él, y lo demás igual.</p>
        <p>Tras un escándalo local, en torno al 7 % de los vecinos pasa de confiar mucho a confiar poco. Y la participación
        baja: un 1,5 % de media, y un 6,3 % entre quienes no tienen partido fijo cuando los escándalos se repiten.</p>
        <div class="dato">Las flechas gruesas y oscuras son <b>firmes</b>: un estudio que aísla la causa, leído, con datos
        de España o de la Unión Europea. Las azules tienen apoyo, pero vienen de otros países o miden una asociación.</div>`
    },
    {
      titulo: 'La soledad aparta del voto',
      nodos: ['S47', 'S25'],
      enlaces: ['R325', 'R328', 'R327', 'R107'],
      texto: `<p>En 2015, el 68,3 % de los españoles quedaba con amigos al menos una vez por semana; en 2022, el 50,7 %. Una de
        cada cinco personas adultas dice sentir soledad no deseada.</p>
        <p>Quien vive aislado vota menos: nadie le moviliza ni le acompaña. Quien se siente solo de forma crónica, también.
        Y abstenerse aísla un poco más al año siguiente: otro bucle de refuerzo, tan pequeño como el de la confianza
        (0,005 por vuelta con las estimaciones; como mucho 0,07).</p>
        <div class="aviso">Todo esto son asociaciones, no causas probadas: ningún estudio español ha aislado el efecto de la
        soledad sobre el voto.</div>`
    },
    {
      titulo: 'Desigualdad, agravio y protesta',
      nodos: ['S16', 'S22'],
      enlaces: ['R346', 'R354', 'R087', 'R293'],
      texto: `<p>La desigualdad no lleva directamente a la rabia: dentro de España, su efecto sobre la ira medida en las
        encuestas es casi nulo. Lo que sí mueve es la desconfianza en las instituciones y, a largo plazo, la sensación de que
        a uno le miran por encima del hombro (las dos rayas sobre la flecha indican que tarda más de cuatro años).</p>
        <p>El agravio lleva a protestar, y en España la protesta no sustituye al voto: quienes participaron en el 15M
        aumentaron después su intención de votar.</p>
        <div class="dato">La protesta se trata como una <b>señal</b>, no como un resultado bueno o malo: es la forma de
        decir «basta ya, así no podemos seguir». El modelo la informa, pero no la suma ni la resta.</div>`
    },
    {
      titulo: '¿Importa quién no vota?',
      nodos: ['P39', 'E51'],
      enlaces: ['R152', 'R277'],
      texto: `<p>Es la pregunta de fondo. Si los barrios pobres votan menos, ¿las políticas les atienden menos? Fuera de España
        se ha visto, pero solo cuando la participación es muy baja (menos del 40-50 %). En Brasil, cuando el voto electrónico
        facilitó votar a los de menos estudios, subió el gasto en la sanidad pública que más usan.</p>
        <p>En España no está medido. Al repetir con encuestas del CIS de 2016 a 2022 el estudio que lo midió hasta 2016, no
        aparece una respuesta desigual a favor de los grupos altos, pero el análisis solo detectaría un efecto así en uno de
        cada cinco casos.</p>
        <p>Y si votara todo el mundo: con las respuestas de la encuesta postelectoral de 2023, el bloque que invistió al
        Gobierno cambiaría entre 1,3 puntos menos y 1,3 más según la variante. No cambia el resultado de forma clara.</p>
        <div class="aviso">El signo «+?» marca una relación <b>condicional</b>: solo vale en ciertas condiciones, que la ficha
        explica. Este es el eslabón más importante que el mapa deja abierto.</div>`
    },
    {
      titulo: 'Las reglas del juego',
      nodos: ['P31', 'P30', 'P23', 'P38', 'L49'],
      enlaces: ['R119', 'R118', 'R522', 'R498', 'R499', 'R497'],
      texto: `<p>Algunas cajas no se miden: se <b>deciden</b>. Son las palancas, marcadas con un triángulo. Dos son reglas
        electorales: cómo son las listas y con qué fórmula y tamaño de circunscripción se reparten los escaños.</p>
        <p>Abrir las listas sube algo la participación (en municipios españoles pequeños, un punto). Bajar la barrera para conseguir
        escaño también, porque menos gente siente que su voto se pierde. Pero trae más partidos, y con más partidos cuesta
        más formar y sostener un gobierno, lo que cansa al votante.</p>
        <p>Con los pesos medidos en los estudios, el beneficio gana: la medida sale a favor en las 500 versiones probadas del
        modelo compatibles con los datos, y la participación sube en prácticamente todas.</p>
        <div class="aviso">Lo que no se puede afirmar: qué pasa con la satisfacción con la democracia (baja en el 78 % de las
        versiones) y con el paro. Y aparece un riesgo probable: más voto a partidos con conductas antipluralistas.</div>`
    },
    {
      titulo: 'Facilitar el voto',
      nodos: ['P33'],
      enlaces: ['R122'],
      texto: `<p>De quienes dicen no haber votado en 2023, el 22,6 % no pudo, sobre todo por problemas con el voto por correo.
        Donde se ha universalizado, como en algunos estados de Estados Unidos, la participación sube unos dos puntos, sin
        favorecer a ningún partido.</p>
        <p>Es una de las medidas más sólidas del modelo: de las doce cosas que el cálculo afirma sobre ella, once se sostienen
        frente a los datos.</p>
        <div class="aviso">Su riesgo conocido es que baje la confianza en la limpieza del recuento. Para que cambiara la
        conclusión, ese riesgo tendría que pesar unas veinte veces lo que pesa una relación corriente del mapa medida con datos.</div>`
    },
    {
      titulo: 'Las políticas: el salario mínimo',
      nodos: ['E32', 'E26', 'E24', 'E60'],
      enlaces: ['R021', 'R404', 'R020'],
      texto: `<p>La segunda mitad de la pregunta es qué políticas mejoran la vida de la gente. El modelo compara veintitrés
        escenarios con las mismas reglas: cuántos de los resultados que importan a las personas mejoran y cuántos empeoran.</p>
        <p>Subir el salario mínimo tiene la mejor evidencia española: en los hogares con alguien que lo cobra, la renta sube
        entre un 6 y un 8 % y baja la pobreza. También tiene coste: en los puestos de salario más bajo se contrata menos.
        Las dos caras están medidas y entran en la cuenta.</p>
        <div class="dato">Es el escenario con mejor saldo del motor: {{res:socialEscenarios.E6.mejoran}} resultados
        mejoran y {{res:socialEscenarios.E6.empeoran}} empeoran (el empleo entre ellos).</div>`
    },
    {
      titulo: 'El mapa entero, y lo que no sabe',
      todo: true,
      texto: `<p>Lo que has visto es una parte. El modelo completo tiene {{res:variables}} variables y {{res:relaciones}}
        relaciones. Cada una lleva su fuente, salvo las que solo son plausibles, que se apartan y no se usan en el cálculo.</p>
        <p><b>Dice hacia dónde, no cuánto.</b> El mapa indica si algo empuja a mejor o a peor. Como casi ningún peso está
        medido, se prueban miles de combinaciones de pesos y solo se quedan las que reproducen lo que dicen los datos: con
        toda la evidencia, unas 6.200 de 150.000. Una conclusión solo se afirma si se cumple en al menos el 85 % de ellas.</p>
        <p><b>Lo que falta</b> y decidiría la discusión: si en España las políticas atienden menos a quien vota menos; cómo
        afecta la desinformación a la participación (no hay ningún estudio español); y cuánto pesa la riqueza acumulada en
        las reglas fiscales.</p>`
    }
  ],

  pie: `Proyecto SOIH · Caso «Participación democrática en España» · Explicación generada desde el modelo: cada flecha y su
    fuente salen de la ficha de relaciones del caso. Forma inspirada en
    <a href="https://exchange.iseesystems.com/public/pontifex/fascism/index.html" target="_blank" rel="noopener">«How fascism
    takes hold»</a>, de Chris Soderquist (Pontifex Consulting), sin tomar su modelo, sus textos ni su código. Notación de
    dinámica de sistemas. Contenido: CC BY 4.0.`
};
