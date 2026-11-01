# Utils — Antarquía

Caja de herramientas de **[utils.antarquia.cl](https://utils.antarquia.cl)**: utilidades breves, estáticas y 100 % locales. Nada se envía a un servidor.

Un panal de hexágonos. Cada celda es una herramienta.

## Herramientas

| Util | Qué hace |
| --- | --- |
| Base64 | Codifica / decodifica texto en Base64 (UTF-8, URL-safe al decodificar) |
| Hash | MD5, SHA-1, SHA-256, SHA-384 y SHA-512 de un texto |
| JSON | Formatea, minifica, ordena claves y valida JSON |
| Passwords | Generador de contraseñas con entropía y medidor de fuerza |
| Timestamp | Epoch ↔ fecha legible (local, UTC, ISO, relativo) |
| URL | Encode / decode de URLs + análisis de partes y query params |
| Colores | HEX ↔ RGB ↔ HSL + contraste WCAG |
| UUID | Genera v4 (aleatorio) y v7 (ordenable por tiempo) |
| Paleta | Constructor de paletas con estética de galería contemporánea: añade, aleatorio, extrae colores de un texto, guarda en `localStorage` y exporta CSS/JSON |
| QR Acrata | QR nivel H con la silueta Ⓐ (círculo, A sola o negativa) dibujada por el tamaño de los módulos; grosor, puntos y detalle ajustables, verificación con jsQR y descarga PNG/SVG |

## Estructura

```
.
├── index.html            # el panal
├── assets/
│   ├── tool.css          # estilos compartidos de las utils
│   ├── tool.js           # helpers: toast, copiar, descargar
│   ├── colors-data.js    # Tailwind v3 + nombres CSS (para Paleta)
│   ├── fonts/            # Anton + Space Mono (para QR Acrata)
│   └── vendor/
│       ├── qrcode.js     # qrcode-generator 1.4.4 (MIT)
│       └── jsQR.js       # jsQR 1.4.0 (Apache-2.0)
└── utils/
    ├── base64.html
    ├── hash.html
    ├── json.html
    ├── passwords.html
    ├── timestamp.html
    ├── url.html
    ├── colores.html
    ├── uuid.html
    ├── paleta.html       # constructor de paletas (estética galería)
    └── qr-acrata.html    # QR con la Ⓐ dibujada por los módulos
```

Sin build, sin dependencias externas en runtime, sin frameworks. HTML + CSS + JS puro.

Las dos últimas tienen diseño propio (no usan `tool.css`, solo `tool.js`): **Paleta** es un constructor de paletas con estética de galería contemporánea (papel, filetes finos, tipografía serif) y **QR Acrata** una hoja en blanco y negro, con Anton y Space Mono, donde la Ⓐ se dibuja con el tamaño de los módulos.

## Agregar una util nueva

1. Crea `utils/mi-util.html` partiendo de cualquier página existente (misma estructura: `nav.top`, `main`, `footer`).
2. Enlaza `../assets/tool.css` y `../assets/tool.js`.
3. Agrégala al array `UTILS` al final de `index.html`:

```js
{ name:"MiUtil", icon:"🧪", href:"utils/mi-util.html", desc:"Qué hace en una línea" }
```

El panal se reacomoda solo.

## Correr local

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

## Deploy

GitHub Pages sirve `main` desde la raíz. Para el dominio propio:

1. Crea un registro `CNAME` en DNS: `utils` → `ruben-developer.github.io`.
2. Agrega un archivo `CNAME` con `utils.antarquia.cl` y activa *Enforce HTTPS*.

## Seguridad y calidad

- **Sin backend, sin CDN, sin tracking.** Todo corre en el navegador; ninguna
  herramienta envía datos a un servidor.
- **Dependencias vendorizadas** en `assets/vendor/`, con su licencia al lado:
  `qrcode.js` (MIT) y `jsQR` (Apache-2.0). No se cargan desde ninguna CDN.
- **CI** (`.github/workflows/ci.yml`): valida el HTML, comprueba que el panal no
  enlace a archivos inexistentes y escanea secretos con gitleaks.
- **Cómo reportar un fallo**: ver [`SECURITY.md`](SECURITY.md).

## Licencia

Código bajo licencia MIT (ver [`LICENSE`](LICENSE)). Las herramientas y su
contenido se pueden copiar y reutilizar citando la fuente.

