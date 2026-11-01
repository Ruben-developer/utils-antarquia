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

## Estructura

```
.
├── index.html          # el panal
├── assets/
│   ├── tool.css        # estilos compartidos de las utils
│   └── tool.js         # helpers: toast, copiar, descargar
└── utils/
    ├── base64.html
    ├── hash.html
    ├── json.html
    ├── passwords.html
    ├── timestamp.html
    ├── url.html
    ├── colores.html
    └── uuid.html
```

Sin build, sin dependencias, sin frameworks. HTML + CSS + JS puro.

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

## Licencia

MIT.
