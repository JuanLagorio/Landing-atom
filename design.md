# Design: embudo de clase gratis de Atom

Guía del embudo al que llega la gente desde la publicidad de Atom en Instagram. Reemplaza a la landing larga anterior (cinco bloques, sin formulario): esta versión es más corta, más vacía y pide los datos apenas entrás.

---

## 1. Qué es

En una Story, alguien de Atom invita a la clase gratis: *"asegurá tu cupo entrando al enlace"*. El enlace lleva a un embudo de dos pasos:

| Paso | Archivo | Qué pide | Conversión |
|---|---|---|---|
| 1 | `index.html` | Nombre, email y WhatsApp | Envío del formulario (lead) |
| 2 | `gracias.html` | Unirse al grupo de WhatsApp, después de ver un video | Clic en el botón del grupo |

Dispositivo principal: celular, dentro del navegador de Instagram, con atención corta.

### Recorrido

1. Story: "clase gratis, asegurá tu cupo en el enlace".
2. Paso 1: el formulario ya está en pantalla al entrar. Completa los 3 datos y toca **Quiero asegurar mi cupo**.
3. Paso 2: "{Nombre}, falta un último paso". Botón para unirse al grupo y, abajo, el video que explica todo.
4. WhatsApp: entra al grupo, donde se manda el link de la clase.

---

## 2. Por qué así

Cada recurso de la página está para que la persona no se vaya antes de terminar:

| Recurso | Dónde | Por qué funciona |
|---|---|---|
| Formulario en la primera pantalla | Paso 1 | Cero scroll y cero lectura antes de actuar. Botón visible sin scroll en 360 × 640. |
| Solo 3 campos, con autocompletar | Paso 1 | Menos campos, más envíos. El celular rellena nombre, email y teléfono solo. |
| Barra "Paso 1 de 2 · 50%" | Paso 1 | Mostrar que ya empezaste da ganas de terminar (efecto de progreso). |
| Botón grande que late | Ambos | Es lo único que se mueve en la página: el ojo va ahí. |
| Cuenta regresiva | Ambos | Urgencia real: cuenta hasta el inicio de la clase. Solo aparece si hay fecha cargada. |
| Corrección de email ("¿Quisiste decir…@gmail.com?") | Paso 1 | Con tráfico masivo hay muchos errores de tipeo; sin esto, esos leads se pierden. |
| Saludo con el nombre | Paso 2 | Personalizar confirma que el paso 1 funcionó y engancha. |
| Barra al 90% y "No cierres esta página" | Paso 2 | Falta poco: abandonar ahora se siente como perder lo hecho. |
| "El link lo mandamos solo por el grupo" | Paso 2 | Deja claro que sin el grupo no hay clase. |
| Video debajo del botón y segundo botón al final | Paso 2 | Quien entra ya, entra. Quien duda mira el video y tiene el botón a mano al terminar. |

### Límites

- **No inventar** cupos limitados, cantidad de inscriptos, testimonios ni cuentas regresivas falsas. La cuenta regresiva usa la fecha real de la clase.
- "Si no entrás, no te llega" tiene que ser cierto: el link de la clase se manda solo por el grupo.
- "No compartimos tus datos con nadie" tiene que ser cierto. Si los datos se usan para otras campañas, cambiar el texto y agregar una política de privacidad.

---

## 3. Diseño

Menos manual de marca: sin ilustraciones, sin bloques de color, una sola columna de 460 px como máximo. Lo que queda del manual:

| Elemento | Valor |
|---|---|
| Fondo | Negro polvo `#2b2a2a` |
| Texto | Blanco crema `#fce9e4` |
| Detalles (barra de avance, etiquetas, íconos) | Celeste `#87abdb` |
| Botón del paso 1 | Naranja `#db6f54` con texto negro polvo |
| Botón del paso 2 | **Verde WhatsApp `#25d366`** con texto negro polvo (contraste 7,2 : 1) |
| Tipografía | Montserrat 400, 700 y 900 |
| Logo | `assets/atom-logo.svg`, 84 px de ancho |

El verde del paso 2 sale de la paleta a propósito: ahí el botón tiene que reconocerse al instante como "abre WhatsApp". Para volver al naranja, sacar la clase `boton-whatsapp` de los dos botones de `gracias.html`.

`assets/cadena-molecular.svg` y `assets/pensamiento-estrategico.svg` ya no se usan.

---

## 4. Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | Paso 1: formulario |
| `gracias.html` | Paso 2: grupo de WhatsApp y video. Tiene `noindex` para que no aparezca en Google. |
| `config.js` | **Lo único que hay que editar.** Datos de la clase y enlaces. |
| `assets/estilos.css` | Estilos de las dos páginas |
| `assets/embudo.js` | Formulario, validación, cuenta regresiva, saludo, video |
| `google-sheets.gs` | Script para guardar los inscriptos en una Google Sheet |

### `config.js`

| Campo | Qué poner | Si queda vacío |
|---|---|---|
| `titulo` | Tema de la clase. Pasa a ser el titular del paso 1. | Titular genérico: "Asegurá tu cupo para la próxima clase de Atom" |
| `fecha` | Inicio con zona horaria, ej. `2026-10-15T19:00:00-03:00` | No se muestran la fecha ni la cuenta regresiva |
| `formularioUrl` | URL `/exec` de Google Apps Script (o un webhook de Make o Zapier) | **Los datos no se guardan.** La persona pasa igual al paso 2. |
| `whatsappUrl` | `https://chat.whatsapp.com/...` | El botón muestra un aviso en vez de abrir WhatsApp |
| `videoUrl` | Enlace de YouTube, archivo `.mp4` o enlace de inserción (embed) | Se ve un recuadro "Video explicativo pendiente" |
| `videoVertical` | `true` si el video es vertical | Se muestra en 16:9 |

La fecha y la hora se muestran en el horario de quien mira la página.

---

## 5. Guardar los datos

El formulario manda por POST: `nombre`, `email`, `telefono`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` y `utm_term`. Los UTM salen del enlace de la Story (por ejemplo `?utm_source=instagram&utm_campaign=clase-octubre`).

Para guardarlos en una Google Sheet, seguir los pasos escritos al principio de `google-sheets.gs`. En resumen: pegar el script en Extensiones > Apps Script de una planilla, implementarlo como aplicación web con acceso "Cualquier usuario" y copiar la URL `/exec` en `formularioUrl`.

El envío no frena a la persona: espera la respuesta como mucho 3 segundos y pasa al paso 2. El envío sigue en segundo plano aunque la página ya haya cambiado.

---

## 6. Probar antes de publicar

- [ ] Completar `config.js`.
- [ ] Inscribirse con datos de prueba y ver la fila en la Google Sheet, con el teléfono bien guardado.
- [ ] Desde un iPhone y un Android, **abriendo el enlace desde Instagram**: el formulario se ve sin scroll, el autocompletado funciona, el paso 2 saluda con el nombre, el botón abre el grupo y el video se reproduce.
- [ ] Borrar las filas de prueba.

Ya probado en un navegador a 360 × 640, 390 × 844 y 1280 × 800: validación, corrección de email, envío con UTM, paso al paso 2, saludo, enlace de WhatsApp, video de YouTube y botón Atrás.

---

## 7. Medición

- **Leads**: filas de la Google Sheet, con los UTM de cada campaña.
- **Clics al grupo**: cada botón del paso 2 tiene `data-ubicacion` (`arriba` o `video`) para distinguirlos cuando se conecte analítica.
- El clic al grupo cuenta como intención, no como ingreso: no se sabe si la persona terminó uniéndose.
- Si se agrega el píxel de Meta: `Lead` al enviar el formulario y un evento al tocar el botón del grupo. Hace falta una política de privacidad enlazada.

---

## 8. Pendientes

- Tema, fecha y hora de la clase.
- Enlace del grupo de WhatsApp.
- Grabar y subir el video explicativo.
- Conectar la Google Sheet (`formularioUrl`).
- Instagram oficial y política de privacidad, si se suma el píxel o se usan los datos para otras campañas.
