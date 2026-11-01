# Seguridad — Utils Antarquía

Este sitio es estático: no hay backend, no hay cuentas y ninguna herramienta
envía datos a un servidor. Aun así, el código puede tener fallos.

## Cómo reportar

Escribe a **antarquia@riseup.net** con:

- la URL o el archivo afectado (`utils/qr-acrata.html`, por ejemplo);
- qué ocurre y cómo reproducirlo;
- el navegador y la versión, si aplica.

Si el fallo permite ejecutar código en el navegador de otra persona, **no abras
un issue público**: manda el correo primero y da unos días para publicar el
arreglo.

## Alcance

Entra:

- ejecución de código o inyección en las páginas del sitio;
- fallos en las herramientas que expongan datos de quien las usa;
- dependencias vendorizadas (`assets/vendor/`) desactualizadas o manipuladas.

No entra:

- resultados incorrectos de una calculadora o conversor sin impacto de seguridad;
- ataques que requieran control del dispositivo o del navegador de la víctima;
- fuerza bruta contra servicios de terceros.

## Dependencias vendorizadas

| Archivo | Proyecto | Versión | Licencia |
| --- | --- | --- | --- |
| `assets/vendor/qrcode.js` | qrcode-generator | 1.4.4 | MIT |
| `assets/vendor/jsQR.js` | jsQR | 1.4.0 | Apache-2.0 |

Las licencias completas están junto a cada archivo. Para actualizarlas, sustituye
el archivo y anota la versión nueva aquí y en el README.
