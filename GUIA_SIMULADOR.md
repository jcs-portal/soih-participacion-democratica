# Guía del simulador de tendencias · Participación democrática

Esta guía explica cómo usar el archivo `Simulador_de_tendencias.html` del caso «Participación democrática
en España». Está escrita para quien no ha trabajado nunca con dinámica de sistemas. No hace falta
instalar nada ni saber programar.

**Qué hace el simulador, en una frase:** tú dices qué cambia (por ejemplo, «se facilita el voto por
correo») y él te enseña a qué empuja ese cambio, a quién beneficia, a quién perjudica, en cuánto tiempo
y por qué camino.

Si prefieres empezar por una explicación guiada, abre antes `Como_se_construye_el_modelo.html`: construye
el mapa paso a paso y, al pulsar cada flecha, enseña de qué estudio sale.

## Antes de empezar: cuatro ideas

**1. Una variable es algo que puede subir o bajar.** La participación electoral, la confianza en el
Parlamento, la soledad, el salario mínimo. El modelo tiene 215.

**2. Una relación une dos variables y tiene un signo.**

- Signo **(+)**: las dos se mueven en el mismo sentido. Si sube la confianza en las instituciones, sube
  la participación; si baja, baja.
- Signo **(−)**: se mueven en sentido contrario. Si suben los escándalos de corrupción, baja la confianza.

**3. Una vía es una cadena de relaciones.** Facilitar el voto por correo → más participación → menos
brecha entre barrios ricos y pobres. Eso es una vía de dos pasos. Casi siempre hay varias vías entre una
medida y un resultado, y no todas empujan hacia el mismo lado. El simulador las encuentra todas y te las
enseña.

**4. El simulador dice hacia dónde, no cuánto.** Te dirá que una medida empuja la brecha a la baja por
dos vías. No te dirá si baja un punto o diez. Cuando hay vías en los dos sentidos, el resultado depende
de cuál pese más, y eso el modelo no lo sabe.

> **No es una bola de cristal.** Es una manera ordenada de ver todos los efectos de una decisión a la
> vez, incluidos los que no se suelen contar.

## Cómo abrirlo

**En línea, sin instalar nada:** https://jcs-portal.github.io/soih-participacion-democratica/

Funciona en el ordenador y en el móvil. En el móvil las tres zonas se apilan una debajo de otra, y una
barra al pie de la pantalla salta de una a otra con el recuento de lo que mejora y empeora a la vista.

La primera vez que lo abres aparece un resumen de cómo se juega; el botón **? Cómo se usa** lo vuelve a
abrir. Se abre con un ejemplo ya cargado, **Facilitar el voto por correo y el voto exterior**. Para la
pregunta al revés («¿qué efecto tienen los que no votan?»), pulsa en **Prueba esto** la opción **Al revés:
¿qué arrastra que vote más gente?**.

**Sin conexión:** en la página del proyecto en GitHub, pulsa **Code** y luego **Download ZIP**,
descomprímelo y abre `index.html` (en la raíz) con el navegador.

| El recuadro de la participación, en el móvil | Y la guía rápida de la primera visita, en el ordenador |
|---|---|
| ![El simulador en un teléfono](12_Cases/Participacion%20democratica/imagenes/guia_06_movil.png) | ![La guía rápida](12_Cases/Participacion%20democratica/imagenes/guia_05_bienvenida.png) |

## La pantalla tiene tres zonas

![La pantalla del simulador con el ejemplo inicial](12_Cases/Participacion%20democratica/imagenes/guia_01_inicio.png)

| Zona | Para qué sirve |
|---|---|
| **1. Elige qué cambia** (izquierda) | Aquí decides tú: qué medida se toma o qué condición cambia. |
| **¿Sube o baja la participación?** (arriba a la derecha) | La pregunta del caso: hacia dónde va la participación y por qué cadena de causas le llega cada cambio. |
| **2. Qué empuja a qué** (derecha) | El resultado: qué mejora y qué empeora, para quién y en qué plazo. |
| **3. El mapa** (centro) | El dibujo del sistema. Se iluminan las relaciones por las que viaja el efecto. |

Se usan en ese orden: eliges en la 1, miras en el recuadro qué le pasa a la participación, el resto de
resultados en la 2, y usas la 3 para entender por qué.

## El recuadro de la participación: el efecto dominó

Es lo primero que hay que mirar, porque responde a la pregunta del caso. Cada vez que cambias algo:

1. **El veredicto, en grande:** la participación **sube** (verde), **baja** (rojo), recibe **empujones en
   los dos sentidos** (morado) o **no le llega** nada (gris). Es el mismo veredicto que la columna
   «Primera ronda» de la tabla, y debajo dice cuántos efectos de vuelta empujan hacia cada lado.
2. **La cadena, variable a variable:** para cada variable que has movido, el camino de causas por el que su
   efecto llega a la participación, eslabón a eslabón y animado. Por ejemplo: ▲ salario mínimo →(−) ▼
   inseguridad económica →(−) ▲ participación. Cada eslabón dice si esa variable sube o baja. Cada flecha
   lleva su signo: **+** si las dos se mueven en el mismo sentido y **−** si se mueven en sentido contrario.
   El trazo de la flecha dice la confianza: continuo si es media o alta, a trazos si es baja.
3. **Pulsa una flecha** para leer el mecanismo de esa relación. **Pulsa el veredicto** para ver todas las vías
   debajo de la tabla y dibujarlas en el mapa. **Ver la cadena otra vez** repite la animación.

Cuando mueves varias variables a la vez, cada una sale con su etiqueta: **empuja a que suba**, **empuja a
que baje**, o **en los dos sentidos**. Si su camino es más largo que el de otra, sale además **llega más
tarde**: cuenta como efecto de vuelta, no en el veredicto. Así se ve qué variable tira hacia cada lado.

Todas las piezas tienen el mismo tamaño a propósito: el modelo dice hacia dónde, no cuánto. Que una
variable llegue por más vías no quiere decir que su efecto sea mayor.

**Un solo código de colores.** El color solo dice si algo es bueno o malo: **verde** mejora, **rojo**
empeora, **morado** hay vías en los dos sentidos. Lo que indica una dirección (los botones ▲ ● ▼, las
flechas del mapa) va en azul oscuro o gris, sin juicio.

## Zona 1: elegir qué cambia

**La rápida: un escenario ya preparado.** En **Escenarios preparados** hay 23: reglas electorales,
gasto, impuestos, salario mínimo y también distintos resultados electorales. Pulsa uno y el simulador lo
carga entero. Aparece un recuadro azul que explica en qué consiste y, debajo, **Lo que cambia ahora**:
las variables que mueve ese escenario, con sus botones, para que las cambies o las quites con **✕**.
**Limpiar todo y empezar de cero** lo borra todo.

En **Prueba esto** hay comparaciones de un clic: la pregunta al revés (qué arrastra que vote más gente),
las listas abiertas, el salario mínimo y ver solo la evidencia mejor respaldada.

**La manual: variable a variable.** En **Todas las variables** está cada variable del mapa. Cada una
tiene tres botones:

| Botón | Significa | Ejemplo |
|---|---|---|
| **▲** | Sube | Se facilita más el voto por correo |
| **●** | Se mantiene | Esa variable no cambia, pase lo que pase |
| **▼** | Baja | Se pone más difícil |

Pulsa otra vez el mismo botón para soltarlo, o **✕** para quitar la variable. Debajo de cada nombre de
decisión, en gris, pone quién la tiene en su mano (las Cortes, el Gobierno, Correos…).

Todo gasto se calcula con su financiación: los escenarios de gasto dicen si se paga con impuestos o con
déficit, y los de bajar impuestos, qué se deja de pagar. No hay medida gratis.

Lo que hagas se queda en tu pantalla y no cambia el modelo para nadie más.

## Zona 2: leer el resultado

Es la tabla de la derecha. Cada fila es un resultado que le importa a alguien, agrupado por a quién
afecta: jóvenes, hogares de renta baja, asalariados de salario bajo, barrios de renta baja,
abstencionistas, personas sin empleo, personas solas o aisladas y el conjunto de la ciudadanía.

**Debajo del nombre de cada resultado** pone cuándo mejora («Mejora si baja»).

**Los colores son lo primero que hay que mirar:**

| Color | Significa |
|---|---|
| **Verde** | Todas las vías empujan hacia la mejora |
| **Rojo** | Todas empujan hacia el empeoramiento |
| **Morado ◆** | Hay vías en los dos sentidos: el modelo no puede decir cuál gana |
| Un punto gris | Ninguna vía llega hasta ahí |

**Los símbolos dicen hacia dónde y por cuántas vías.** «▼ 2» significa que dos vías empujan ese
resultado a la baja. Cuidado: la flecha dice si sube o baja, y el color dice si eso es bueno o malo. Que
baje la brecha de participación es verde; que baje el empleo es rojo.

**Las columnas** (en el simulador, «Cómo leer la tabla», justo encima, lo explica también; y si pasas
el ratón por la cabecera de una columna, sale un resumen):

| Columna | Qué responde |
|---|---|
| **Tiempo en notarse:** menos de 1 año · de 1 a 4 años · más de 4 años | ¿Cuánto tarda en notarse el efecto? Cada relación del mapa tarda en notarse (inmediata, meses, de 1 a 3 años o más de 3). Se suman los retrasos de todos los eslabones de una vía, y la vía va a la columna que le toca |
| Conjunto | Todas las vías juntas, sin distinguir plazos |
| **Primera ronda** | ¿Qué dicen las vías más cortas, las de menos eslabones? Es el efecto más directo, y debajo pone cuántos pasos tiene. Es el mismo veredicto del resumen y del recuadro de la participación |
| **Efectos de vuelta** | ¿Y las vías más largas, las que dan un rodeo o vuelven sobre sí mismas? Cuántas van a favor de lo que le conviene a ese resultado y cuántas en contra |

Ojo: «más corta» quiere decir con menos pasos, no más rápida. Una vía de dos pasos lentos puede tardar
años, y aparecerá en la columna de más de 4 años aunque sea de primera ronda.

Si solo vas a mirar dos columnas, que sean las dos últimas. **Primera ronda** es lo que promete quien
propone la medida. **Efectos de vuelta** es lo que el sistema devuelve después.

**Pulsa cualquier celda** para ver, debajo de la tabla, las vías una por una.

**La protesta no puntúa.** Sale como una señal de hartazgo («basta ya»): el simulador dice si sube o
baja, pero no la cuenta como mejora ni como empeoramiento.

## Zona 3: el mapa

| Lo que ves | Qué es |
|---|---|
| Un **rombo** | Una decisión: algo que alguien puede cambiar |
| Un **círculo** | Cualquier otra variable |
| El **color** | El tema: económico, social, político, legal… |
| Un **círculo a trazos** alrededor | La variable que has fijado tú |
| **▲ ▼ ◆** dentro | Empujada al alza, a la baja, o en los dos sentidos |
| Flecha **azul** | Relación de signo (+) |
| Flecha **gris oscuro** | Relación de signo (−) |
| Flecha **a trazos** | Relación disputada: hay estudios que dicen cosas distintas |

Deja el ratón sobre una variable para ver su definición y su último dato; púlsala para fijarla; cambia
el plazo en el desplegable de abajo. El mapa dibuja las variables clave para que se pueda leer; el
cálculo recorre las 215.

## Ejemplo 1: facilitar el voto por correo

Es el ejemplo con el que se abre. En el recuadro, la participación **sube**: el voto por correo llega en
un paso; el voto exterior sin solicitud previa (el voto rogado baja) llega en dos, a través de la
participación de los residentes en el extranjero, y por eso sale como «llega más tarde».

![Facilitar el voto por correo](12_Cases/Participacion%20democratica/imagenes/guia_02_voto_correo.png)

Debajo, el recuento: **11 resultados mejoran y 1 empeora**. Baja por la tabla: la
brecha de participación entre barrios baja por dos vías; la abstención de quien «no pudo» votar baja
en un paso, el más directo. Pulsa la fila del resultado que empeora y mira por qué camino llega.

## Ejemplo 2: abrir las listas, y lo que trae

Pulsa **Mira qué traen las listas abiertas con un reparto más proporcional**.

![Listas abiertas y fórmula más proporcional](12_Cases/Participacion%20democratica/imagenes/guia_03_listas.png)

En el recuadro, la participación sube por dos vías de un paso (las listas abiertas y la barrera más baja),
pero avisa de **2 efectos de vuelta a bajar**: lo que la medida devuelve por caminos más largos. Aquí sale
además algo morado en la tabla. Mira la fila **Brecha de participación por renta del barrio**: la primera ronda
dice «mejora» en dos pasos, pero en **Efectos de vuelta** hay dos vías en contra, y en conjunto queda
◆ 2▲ 2▼: el modelo no puede decir cuál gana. Pulsa la celda para ver las vías. Lee también el recuadro
azul de la zona 1: la evidencia de las listas abiertas viene de municipios de 100 a 250 habitantes, y el
propio escenario avisa de que su validez para el Congreso es dudosa. Es el tipo de cosa que una propuesta
no suele contar.

## Ejemplo 3: una política, y cuánto de esto está demostrado

Pulsa **Mira una política: subir el salario mínimo**.

![Subir el salario mínimo](12_Cases/Participacion%20democratica/imagenes/guia_04_salario_minimo.png)

Es el escenario con más resultados que mejoran (15), y también con costes a la vista: el empleo y
las horas de los puestos peor pagados empeoran. Las dos caras están medidas y entran en la cuenta. En el
recuadro se ve que el salario mínimo no toca la participación directamente: llega en dos pasos, porque
reduce la inseguridad económica y mejora el bienestar, y las dos cosas acercan a votar.

Ahora pulsa **Mira solo la evidencia de confianza media o alta** (o elige esa opción en el desplegable
**Relaciones que se usan**, al final de la zona 1):

| Opción | Qué usa el cálculo |
|---|---|
| Confianza baja o superior | Todo lo que tiene algún respaldo. Es la opción de partida |
| Solo confianza media o alta | Solo lo mejor respaldado |
| Solo confianza alta | Lo poco que está sólidamente demostrado |
| Añadir hipótesis del analista | También las relaciones sin ninguna fuente |

La tabla se vacía mucho, y lo que queda es lo firme. **Qué se aprende:** una conclusión que aguanta con
«Solo confianza media o alta» es firme. Una que solo aparece con «baja» es una pista razonable, no un
hecho. Prueba lo mismo con los escenarios de votos (más o menos voto a la derecha radical, gobierno más
a la izquierda o a la derecha): con la evidencia mejor respaldada no queda ninguna afirmación.

## Errores de lectura frecuentes

- **Contar vías como si fueran votos.** «3 a la baja y 2 al alza» no significa que gane la baja. Una
  sola vía puede pesar más que tres.
- **Leer el verde como «funciona».** Verde significa que todas las vías *conocidas y respaldadas*
  empujan a favor. Puede faltar una vía que nadie ha estudiado.
- **Leer el punto gris como «no afecta».** Significa que el modelo no tiene ninguna relación respaldada
  que llegue hasta ahí.
- **Olvidar el plazo.** Una medida puede mejorar algo en un año y empeorarlo en cinco. En el móvil las
  columnas de plazo se ocultan: ábrelo en una pantalla ancha para verlas.
- **Quedarse con un solo resultado.** Baja la vista por toda la tabla: lo que mejora para unos puede
  empeorar para otros.

## Cosas que probar

1. Carga **Voto obligatorio con sanción** y compáralo con facilitar el voto por correo.
2. Juega con varias variables a la vez: deja el voto por correo, sube el salario mínimo y baja la presión
   fiscal. Mira en el recuadro qué variable empuja la participación hacia cada lado y cuál llega antes.
3. Compara **Más gasto social financiado con impuestos** con la misma medida **financiada con déficit**.
4. Carga **Bajar la presión fiscal recortando servicios públicos** y cuenta las filas en rojo.
5. Elige una medida que defiendas y busca a quién perjudica. Luego una que rechaces y busca a quién
   beneficia.

## Qué hay detrás

Cada relación del mapa procede de una fuente: un dato oficial o un estudio, con su nivel de evidencia.
Están en `datos/relaciones.csv`. Si una relación no te convence, puedes quitarla o cambiarla en
`datos/caso.js` y recalcular; el archivo `LEEME.md` explica cómo.

Las capturas de esta guía se hicieron con la versión 0.2.1. Los escenarios que muestran dan lo mismo en la
0.2.3; solo cambia el recuento de variables (212 entonces, 215 ahora). Si el modelo cambia, los
números de los ejemplos pueden variar.
