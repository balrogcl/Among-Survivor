# Among Survivor

Juego *survivor* de acción en horizontal inspirado en Among Us: eliges un tripulante, sobrevives **10 minutos** a hordas de impostores y mejoras tus armas al subir de nivel. Corre en el navegador (HTML5 Canvas), sin dependencias ni compilación.

## Características
- **8 clases de ataque**: proyectil, cuerpo a cuerpo, embestida, abanico de fuego, torreta, órbita de drones, giro de cuchillas y rastro de ácido, más Arco Tesla, Pulso EMP y Cañón de riel. Cada arma sube a nivel 5 y tiene una **evolución**.
- **Impostores variados**: corredores con cuchillo, escupe-ácido, lanzacuchillos, médicos que curan, bombarderos, francotiradores, invocadores, tormenteros, impostor azul con lengua y un Gran Impostor cada 2 minutos. Cada tipo tiene un **punto débil** (número amarillo).
- **Mapa infinito con 4 biomas** (The Skeld, The Fungle, Mira HQ y Polus) generado por chunks de 16×16: lava, ácido y agua con profundidad, obstáculos sólidos (árboles, hongos gigantes, mobiliario), ventilas que sueltan impostores, zonas de alto peligro y caminos siempre libres.
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

Si cambias archivos, sube también el número de versión de `sw.js` (`among-survivor-v1`) para que los jugadores reciban la actualización.

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

## Notas de rendimiento
- Sprites recoloreados una sola vez y dibujados desde versiones reducidas (mipmaps) según su tamaño en pantalla.
- El suelo se pinta por chunks en lienzos fuera de pantalla y se precalcula por adelantado; el resto del mundo se recorta a lo visible.
- Rejilla espacial para colisiones y límite adaptativo de impostores si los cuadros por segundo bajan.

## Créditos y avisos
- **Among Us** es propiedad de Innersloth. Esto es un proyecto de fans, sin ánimo de lucro y sin relación oficial con Innersloth.
- Los sprites (`assets/sprites.js`) y la música (`assets/music.mp3`) provienen de archivos proporcionados por el autor del proyecto. **Antes de publicar el repositorio, confirma que tienes derecho a redistribuirlos**; si no, sustitúyelos por material propio.
- Inspirado en el sistema de clases de ataque de [PokéSurvivor](https://github.com/JPTER78/pokesurvivor) (JPTER78). No se ha copiado su código ni sus imágenes.
- No se declara una licencia para el código. Si quieres abrirlo, añade un archivo `LICENSE` que cubra solo tu código (los recursos de terceros quedan fuera).
