# AGENTS.md — Utils

## Qué es

Caja de herramientas de **<https://utils.antarquia.cl/>**: utilidades breves,
estáticas y 100 % locales. Nada se envía a un servidor. Un panal de hexágonos;
cada celda es una herramienta.

## Stack

HTML, CSS y JavaScript vanilla. **No hay `package.json`, ni build, ni
framework.** GitHub Pages sirve el repo tal cual desde `main`.

## Estructura

```text
index.html          # el panal
assets/
  tool.css          # estilos compartidos
  tool.js           # toast, copiar, descargar
  colors-data.js
  fonts/
  vendor/           # librerías de terceros vendorizadas
utils/
  <herramienta>.html
```

## Comandos

```bash
npx --yes html-validate@9 "*.html" "utils/*.html"
python3 -m http.server 8000
```

El CI comprueba además que cada `href` del panal apunte a un archivo existente.

## Añadir una herramienta

1. Crea `utils/<slug>.html` con la estética y los helpers compartidos.
2. Añade la celda al panal de `index.html` con `href="utils/<slug>.html"`.
3. Añade la URL a `sitemap.xml`.
4. Documenta la herramienta en `README.md`.
5. Valida el HTML y el chequeo de enlaces.

## Reglas

- Conserva el esquema `/utils/<herramienta>.html`; migrar a `/slug/` rompería
  enlaces ya compartidos.
- Nada de CDNs ni peticiones a servidores: todo debe funcionar offline.
- Las librerías de terceros van en `assets/vendor/` con su licencia.
- `develop` es revisión; `main` publica en Pages. No toques `main` sin OK.
- No añadas analítica, cookies ni formularios.

## Agentes y skills

- Skill `antarquia-sitios`: convenciones del paraguas y verificación.
- `antarquia-qa` para revisar; `antarquia-ops` para el despliegue en Pages.
