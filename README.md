# Among Survivor

Juego *survivor* de acción en horizontal inspirado en Among Us: eliges un tripulante, sobrevives **10 minutos** a hordas de impostores y mejoras tus armas al subir de nivel. Corre en el navegador (HTML5 Canvas), sin dependencias ni compilación.

## Características
- **25 armas** con patrones diferenciados: proyectiles, láseres, trampas, explosiones, hielo, veneno, escudos, invocaciones, curación y control de área. Cada arma sube hasta nivel 8 y puede desbloquear una **evolución**. Los proyectiles, minas, nubes tóxicas, ondas, explosiones, láseres, cañón de riel, escudos y vórtices tienen siluetas y efectos visuales propios.
- **40 mejoras pasivas** para combinar daño, cadencia, alcance, defensa, control, recuperación y experiencia. Se pueden equipar hasta 6 armas y 6 pasivas por partida.
- **Impostores variados**: corredores con cuchillo, escupe-ácido, lanzacuchillos, médicos que curan, bombarderos, francotiradores, invocadores, tormenteros, impostor azul con lengua y un Gran Impostor cada 2 minutos. Cada tipo tiene un **punto débil** (número amarillo).
- **Mapa procedural con 4 biomas** (The Skeld, The Fungle, Mira HQ y Polus), generado por chunks de 16×16. Los cuatro biomas aplican superficies temáticas en todos los chunks visibles y explorados. The Skeld mantiene el suelo metálico como base y distribuye agrupaciones abiertas de cafetería, electricidad, reactor, medbay, motores y seguridad por toda la región; incluye mobiliario sólido (mesas, consolas, motores y reactores bloquean el paso) y fundidos de color entre materiales que también funcionan en los límites de chunk. Se mantienen los otros biomas, los peligros ambientales, obstáculos sólidos, ventilas y rutas de combate.
- **Mundo interactivo**: cajas y rocas rompibles, cofres, cápsulas médicas, reactores, fantasmas que se rescatan, clima que potencia armas y impostores dorados.
- **Personalización** (color, sombrero y 10 skins) con monedas que se ganan jugando; el progreso se guarda en el navegador (`localStorage`).
- Pantalla completa, música de fondo con volumen, ajustes de números de daño y sacudidas, y modo sin conexión (PWA).

## Controles
| Acción | Teclado | Táctil |
|---|---|---|
| Mover | `WASD` / flechas | arrastrar el dedo |
| Pausa | `Esc` / `P` | botón `II` |

Las armas disparan solas. Pensado para pantalla **horizontal**.

## Ejecutar en local
Los navegadores bloquean parte de las funciones (audio, caché) al abrir archivos con `file://`, así que usa un servidor estático:

```bash
python3 -m http.server 8000
# abre http://localhost:8000
```

## Publicar en GitHub Pages
1. Crea un repositorio y sube el contenido de esta carpeta a la rama `main`.
2. En **Settings → Pages**, elige *Deploy from a branch*, rama `main` y carpeta `/ (root)`.
3. En unos minutos estará en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

Si cambias archivos, sube también el número de versión de `sw.js` (`among-survivor-v27`) para que los jugadores reciban la actualización.

## Estructura
```
index.html            página y menús
css/style.css         estilos
js/game.js            toda la lógica (simulación, terreno, render, menús)
assets/sprites.js     hojas de sprites (PNG en base64) y anclas de animación
assets/music.mp3      música de fondo
assets/icon-*.png     iconos de la app
manifest.webmanifest  instalación como app (PWA)
sw.js                 caché sin conexión
```

## Identidad visual de The Skeld
- The Skeld utiliza superficies industriales en toda su región, no solo en el área inicial. Las salas temáticas alrededor del punto de aparición añaden patrones y decoración propios.
- Los elementos decorativos de las salas se mantienen como objetos separados de las superficies; no convierten el suelo temático en colisión.
- Las salas y variaciones de suelo se generan de forma determinista por coordenadas. Las transiciones consultan los tiles de los chunks vecinos para evitar cortes visibles en los límites.

## Notas de rendimiento
- Sprites recoloreados una sola vez y dibujados desde versiones reducidas (mipmaps) según su tamaño en pantalla.
- El suelo se pinta por chunks en lienzos fuera de pantalla. Cada chunk aplica las superficies y transiciones de sus tiles vecinos; se precalculan hasta cuatro chunks visibles por fotograma para reducir sectores sin pintar al explorar.
- Rejilla espacial para colisiones y límite adaptativo de impostores si los cuadros por segundo bajan.

## Créditos y avisos
- **Among Us** es propiedad de Innersloth. Esto es un proyecto de fans, sin ánimo de lucro y sin relación oficial con Innersloth.
- Los sprites (`assets/sprites.js`) y la música (`assets/music.mp3`) provienen de archivos proporcionados por el autor del proyecto. **Antes de publicar el repositorio, confirma que tienes derecho a redistribuirlos**; si no, sustitúyelos por material propio.
- Inspirado en el sistema de clases de ataque de [PokéSurvivor](https://github.com/JPTER78/pokesurvivor) (JPTER78). No se ha copiado su código ni sus imágenes.
- No se declara una licencia para el código. Si quieres abrirlo, añade un archivo `LICENSE` que cubra solo tu código (los recursos de terceros quedan fuera).


## Corrección de capas del terreno (v6)
- Cada celda conserva su suelo base en una capa independiente (`f`), incluso cuando encima se genera un obstáculo o peligro.
- El render del chunk ya no dibuja el antiguo fondo procedural debajo del tileset; todos los sectores visibles reciben primero su suelo temático.
- Las transiciones de materiales se dibujan una sola vez por frontera (derecha y abajo), evitando acumulaciones de degradados en esquinas.
- Se retiraron del render los parches decorativos aleatorios grandes que competían con el patrón de las habitaciones.
- La selección de bioma y la mezcla de regiones se mantienen sin cambios para conservar las transiciones existentes.


## Corrección de biomas y profundidad – Integración 1.3

- Los chunks visibles que aún no tienen canvas se pintan en el mismo fotograma; ya no se omiten cuando se supera el presupuesto de cuatro chunks.
- Se amplía la caché de canvases de chunks para reducir regeneraciones al desplazarse.
- La selección de bioma por celda usa el bioma Voronoi dominante; se elimina la selección aleatoria entre los dos biomas más cercanos que producía islas dispersas.
- Las fronteras entre biomas se dibujan como juntas continuas, con un borde oscuro y un acento de color según el par de biomas.
- Props, jugador e impostores se ordenan juntos por coordenada Y para respetar la profundidad. Se elimina el segundo dibujado de props que volvía a tapar a los personajes.
- Service Worker actualizado a caché v7.

Validación realizada: `node --check` para `js/game.js` y `sw.js`. La prueba visual interactiva debe completarse en navegador/dispositivo.


## Actualización The Skeld 1.4

- Suelo metálico base continuo en toda la región del bioma.
- Agrupaciones temáticas abiertas de cafetería, electricidad, reactor, medbay, motores y seguridad distribuidas proceduralmente por coordenadas.
- Sin perímetros de murallas para delimitar estas zonas; los objetos decorativos se mantienen separados de la capa de suelo.
- Fundidos cortos entre tipos de suelo y juntas más suaves entre biomas.
- Orden de profundidad basado en la línea de apoyo de objetos y pies de personajes.
- Caché offline actualizada a v8.


### The Skeld 1.6
- Salas abiertas de mayor tamaño y seis distribuciones temáticas diferenciadas.
- Mobiliario agrupado y alineado por sala; se eliminó la decoración aleatoria del Skeld.
- Se retiraron los obstáculos sólidos aleatorios del Skeld para evitar bloqueos de impostores.
- Fundidos de suelo más anchos y suaves en las uniones entre materiales.


### The Skeld 1.7a – mobiliario sólido
- Mesas, consolas, motores, reactores y terminales de las salas del Skeld ahora bloquean a jugador e impostores.
- La colisión es un rectángulo en la base de cada sprite (`FOOT` en `js/game.js`); la parte alta del sprite no bloquea, así que se puede rodear y el orden de profundidad no cambia.
- Cada chunk guarda sus rectángulos en `C`. `push()` los resuelve junto con los tiles y `solidAt()` los consulta para que los impostores esquiven el mobiliario. La búsqueda mira chunks vecinos porque algunos muebles cruzan el borde.
- Los proyectiles no colisionan con el mobiliario (igual que antes con los tiles).
- Caché offline actualizada a v11.

### The Skeld 1.7b – nueva cafetería
- Las mesas antiguas se reemplazaron por el sprite de mesas azules (`assets/cafeteria.js`, 5 imágenes: centro con botón rojo y cuatro con objetos).
- Disposición fija en todas las cafeterías: mesa del botón en el centro y una mesa en cada esquina (`CAFE_LAY` en `js/game.js`), con más separación que antes.
- Colisión elíptica ajustada al tamaño de cada mesa (`CAFE_RX`/`CAFE_RY`), resuelta en `push()` y consultada por `solidAt()`. La profundidad usa el borde inferior de la mesa.
- Las cafeterías ya no generan charcos de agua sobre su suelo.
- Los props de salas se recogen también de chunks vecinos fuera de pantalla para que una mesa no desaparezca cuando su chunk de origen queda fuera de vista.
- Caché offline actualizada a v12 (incluye `assets/cafeteria.js`).

### The Skeld 1.7c – pasillos, salas más densas y disposiciones con sprites
- Las salas del Skeld están más juntas y más grandes (celda de 30 tiles, `SKC` en `js/game.js`). Cada sala se conecta con la del este y casi siempre con la del sur mediante pasillos ortogonales de 5 tiles de ancho (`corrLinks`, `skeldCorr`). Tile nuevo `23` (SKELD_PASILLO) con franjas de precaución en los bordes abiertos.
- Una sala existe si su centro está en The Skeld (`roomValid`). Sala y pasillos ocupan su terreno aunque rocen otro bioma; ahí no se generan obstáculos, decoración, charcos ni cofres del bioma vecino. Los charcos tampoco aparecen pegados a salas o pasillos.
- Sistema de disposiciones únicas con sprites: `ROOMSPR` en `js/game.js`. Para una sala nueva basta un archivo `assets/<sala>.js` con `window.XXX_SPR=[{w,h,u}]` (como `assets/cafeteria.js`) y una entrada `{src, s, lay:[{k,dx,dy,rx,ry}]}`. Las salas sin entrada (Electricidad, Reactor, Medbay, Motores, Seguridad) conservan su mobiliario vectorial hasta tener sprites.
- Pendiente conocido: la etiqueta de bioma de la pantalla usa el bioma del terreno, así que dentro de una sala que roza otro bioma puede mostrar el nombre de ese bioma.

### The Skeld 1.7d – sala médica, fantasmas y experiencia
- Sala médica (id 17) con sprites propios (`assets/medbay.js`): 4 camas en dos columnas, un terminal arriba y otro abajo (espejado) y la plataforma de escáner transitable al centro. Camas y terminales tienen colisión ajustada; la plataforma no bloquea y se dibuja bajo los personajes.
- `ROOMSPR` admite campos opcionales por pieza: `s` (escala), `ex/ey` (desplazamiento del colisionador), `rect` (colisión rectangular), `nc` (sin colisión), `dd` (línea de profundidad) y `fl` (espejo).
- Corrección: los fantasmas rescatables ahora también se generan en The Skeld (antes solo aparecían en los demás biomas).
- Corrección: la experiencia (gemas), las monedas y los botiquines que sueltan los enemigos no se dibujaban en ningún bioma; ahora se dibujan en el suelo, con color según el valor de la gema.
- Caché offline v14 (incluye `assets/medbay.js`).

### The Skeld 1.7e – sala de electricidad
- Sala de Electricidad (id 15) con sprites propios (`assets/electrical.js`): generador contra el borde norte, dos cajas de breakers, panel de control, panel alto, dos paneles pequeños y dos carretes de cable (las repeticiones del lado este van espejadas), en anillo alrededor de un centro libre.
- Colisión rectangular casi completa en cada pieza (sin zonas donde el personaje quede oculto detrás de un armario) y huecos de 60+ px entre piezas para que pasen incluso los jefes.
- Caché offline v15 (incluye `assets/electrical.js`).

### The Skeld 1.7f – reactor
- Sala del Reactor (id 16) con el sprite del reactor (`assets/reactor.js`, guardado al 60 %) en el centro. Su colisión cubre todo el cuerpo y la caja de control, para que nadie quede oculto detrás de la torre.
- Suelo del reactor con el color y el diseño de la referencia: paneles lavanda de 2x2 tiles, juntas oscuras, bisel claro y paneles más oscuros o más claros (`kind:19` en `FLOOR_STYLE`).
- Decoración vectorial (`VEC` en `js/game.js`): resplandor y anillo cian en el suelo, cuatro luces cian como las de la referencia, cuatro tanques y cuatro terminales con colisión. Las piezas con `vec` se declaran en `ROOMSPR` igual que los sprites.
- Caché offline v16 (incluye `assets/reactor.js`).

### The Skeld 1.7g – reactor anclado al suelo
- La torre del reactor ya no se ve flotando: se dibuja una base de apoyo con sombra de contacto (`VEC.pedestal` en `js/game.js`) bajo el sprite, que rellena el hueco entre el cilindro y el suelo.
- Caché offline v17.

### The Skeld 1.7h – textura de pasillos y suelo de electricidad
- Pasillos con la textura de la referencia: paneles azul grisáceo con ranuras perpendiculares al sentido de la marcha, juntas cada 4 tiles y bandas laterales oscuras con luces en forma de píldora. Donde el pasillo entra en una sala no hay banda (queda abierto). El borde con el suelo vecino es nítido (`hard:1` en `FLOOR_STYLE`).
- Suelo de Electricidad en verde oliva con rejilla fina, tomado de la referencia (`kind:20`), distinto del suelo genérico de la nave.
- Caché offline v18.

### The Skeld 1.7i – motores y decoración de pasillos
- Sala de Motores (id 18) con el sprite del motor (`assets/engine.js`, guardado al 70 %): dos motores enfrentados (el inferior espejado) con una franja de precaución entre ambos. Colisión rectangular del cuerpo del motor y su caja de control; los rieles del lado abierto se pueden pisar.
- Suelo de Motores con el modelo de la referencia: paneles gris cálido de 2x2 tiles, juntas oscuras y ranuras redondeadas junto a las juntas (`kind:21`).
- Decoración vectorial de la sala (`VEC`): tuberías de cobre en el suelo, rejillas, seis barriles y dos cajas (con colisión pequeña).
- Decoración de pasillos: remaches en las juntas, rejillas de ventilación, cables de cobre pegados a las bandas laterales, y cajas y barriles con colisión pequeña contra la pared en tramos rectos (nunca en cruces ni junto a salas).
- Caché offline v19 (incluye `assets/engine.js`).

### The Skeld 1.7j – Administración y motores más grandes
- La sala de Seguridad (id 19) pasa a ser **Administración** (`SKELD_ADMIN`). Sprites en `assets/admin.js` (sin las sombras de la imagen original): banco de tres monitores con sillas y panel O2 contra el borde norte, mesa del mapa holográfico en el centro y módem sobre una baldosa gris azulada.
- Suelo de Administración granate liso (`kind:22`) con anillos octogonales alrededor de la mesa, como en la referencia.
- Relleno decorativo vectorial: rejilla de ventilación, parche de chapa estriada, cuatro sillas rojas y dos terminales (con colisión pequeña las sillas y los terminales).
- Motores ~34 % más grandes (escala .58 → .78): se reubican los dos motores, la franja de precaución (300 px), las tuberías (ahora verticales a los lados), las cajas y las rejillas. Hueco libre de 84 px entre ambos motores.
- Caché offline v20 (incluye `assets/admin.js`).

### The Skeld 1.7k – decoración con sprites en pasillos y zonas libres
- Nuevos sprites en `assets/deco.js` (sin fondo): barriles (3 tamaños), cajas (grande, mediana, pequeña), bidón y un gran conjunto de contenedores y cajas.
- Los objetos de los pasillos (antes cajas y barriles vectoriales) ahora son estos sprites, con colisión pequeña en la base, contra la pared y solo en tramos rectos. Los detalles del suelo del pasillo (remaches, rejillas, cables) se conservan.
- Conjuntos decorativos en zonas sin salas ni pasillos (`decoSite`, celdas de 20 tiles): grande (conjunto de contenedores, 5 %), mediano (3 variantes de cajas, barriles y bidón) y pequeño (3 variantes). Solo en The Skeld, a más de 650 px del punto de inicio, nunca sobre salas, pasillos ni agua; los charcos y los cofres se apartan de ellos.
- Caché offline v21 (incluye `assets/deco.js`).

### The Skeld 1.7l – más conjuntos como obstáculos y desde el inicio
- Los conjuntos decorativos de zonas libres son mucho más frecuentes: celda de 14 tiles (`DCELL`) y mayor probabilidad. En el mismo área hay ~6 veces más conjuntos grandes (de 38 a 238), ~3 veces más medianos y ~3,4 veces más pequeños.
- Pueden aparecer cerca del punto de inicio: distancia mínima 280 px (grande), 190 px (mediano) y 130 px (pequeño) desde el punto de partida (`DKC`).
- Sin solapes entre conjuntos: en celdas vecinas gana el tipo más grande (`decoCand`, prioridad `pr`).
- Siguen siendo obstáculos con colisión en la base (los enemigos los esquivan con `solidAt`). La comprobación de zona libre usa solo el contorno del conjunto, así que pueden quedar pegados a salas y pasillos sin pisarlos.
- Caché offline v22.

### The Skeld 1.7m – paso 5: pasillos entre salas vecinas
- Cada sala se une solo con sus 2 vecinas válidas más cercanas dentro de 2 celdas (`CORR_R=2`, `CORR_K=2`, `corrNbrs`).
- Cada par de salas genera su pasillo una sola vez: lo emite la sala con clave menor (`corrEdge`, `corrLinks`). Antes cada sala dibujaba su propia copia hacia hasta 4 salas a radio 5.
- Medición en 1705 salas: antes 2581 tramos duplicados si no importa el sentido; ahora 0. Antes 6308 tramos por sala; ahora 2013 tramos únicos. 2 salas quedan sin enlace.
- Los 2013 tramos son detectados por la colisión de pasillo (`skeldCorr`) en su punto medio.
- Sin conectar todas las salas entre sí, como se pidió.
- Caché offline v23.

### The Skeld 1.7n – paso 8: navegación de enemigos alrededor de obstáculos
- Esquive de obstáculos rehecho en `update()`: el enemigo prueba giros de 45°, 90° y 135° hacia un lado recordado (`e.sd`), mantiene la salida elegida 0,4 s (`e.cx`, `e.cy`, `e.ct`) para no oscilar y solo cambia de lado si en 1,2 s no se movió más de 14 px.
- Nuevo `pathBlocked()`: comprueba el trayecto en dos puntos (20 y 40 px) en vez de uno, para no saltarse barriles o cajas delgadas.
- Los colisionadores de cada conjunto mediano o pequeño se unen en un único bloque sólido, sin huecos diagonales donde un enemigo queda encajado.
- Medición con simulación (enemigos persiguiendo a un jugador quieto, 30 s, sin daño del jugador): antes 40 de ~512 enemigos quedaban pegados a los obstáculos (12 de 72 en conjuntos grandes, 18 de 144 en medianos, 10 de 144 en pequeños); ahora 0 de 500. 8 enemigos murieron por charcos peligrosos de otro bioma y no cuentan.
- Coste: ~0,7 ms por actualización con 240 enemigos frente a ~0,5 ms antes (escritorio, sin GPU).
- Caché offline v24.

### The Skeld 1.7o – paso 10: etiqueta de bioma en salas y pasillos
- La etiqueta del HUD usa `bioLabel()`: sobre un suelo de sala (ids 14-19) o de pasillo (id 23) muestra The Skeld aunque el terreno de debajo sea de otro bioma. Fuera de salas y pasillos no cambia.
- Medición en un área de 520x520 tiles (muestreo cada 2 tiles): 614 de 5557 tiles de sala (11 %) y 53 de 1851 de pasillo (3 %) mostraban otro bioma; ahora todos muestran The Skeld. 0 diferencias en los 60 192 tiles restantes.
- Solo cambia la etiqueta: la generación, los obstáculos y los enemigos no dependen del bioma de la posición del jugador.
- Caché offline v25.

### The Skeld 1.7p – contador de rendimiento
- Botón **ms** en la esquina inferior izquierda (`#pf`). Muestra un bloque con FPS, tiempos de fotograma (p50, p95 y máximo), tiempos de update y draw (p95 y máximo), enemigos, chunks cargados y muestras.
- Mide los últimos 300 fotogramas y refresca cada 0,5 s. Pulsar otra vez lo oculta.
- Los máximos incluyen el primer fotograma (generación inicial de chunks), así que el dato que sirve para comparar es el p95.
- Caché offline v26 (cambian `index.html`, `css/style.css` y `js/game.js`).

### The Skeld 1.7q – rendimiento para 60 fps
- **Precalentamiento de sprites:** `sheet()` recolorea la hoja de sprites la primera vez que aparece cada combinación de color y skin, y eso costaba de 40 ms a más de 1 s en plena partida. Ahora una cola (`WARM`, `warmQueue`, `warmRun`) calcula al cargar las variantes de enemigos (colores de la paleta × tipos r, b, x, k) y las del jugador (COLS con la skin activa), en porciones de 10 ms.
- **Factor de píxeles adaptativo:** `DCAP` empieza en 2. Si el juego baja de unos 57 fps (fotograma suavizado de 17,5 ms) durante 4 s en combate, el canvas pasa a factor 1 (cuatro veces menos píxeles). Es de un solo sentido.
- Caché offline v27.
