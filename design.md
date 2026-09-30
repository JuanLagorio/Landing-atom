# Design brief: landing de clase gratis de Atom

## Estado del brief

Este documento describe una landing de conversión para las personas que llegan desde una Instagram Story de Atom. El objetivo es que entiendan la propuesta de la clase gratuita y continúen a un destino de WhatsApp para recibir información y confirmar su cupo.

El manual de marca no está disponible en el workspace. Por eso, los colores, tipografías, logotipo, tono y recursos visuales quedan pendientes de validar contra ese manual; no se deben tratar las decisiones visuales de este brief como tokens oficiales de Atom.

## Objetivo

Convertir visitas móviles provenientes de Instagram en participantes potenciales de una clase gratuita, llevando a cada persona a un canal o grupo de difusión de WhatsApp claramente identificado.

**Conversión principal:** clic en el CTA que abre el enlace oficial de WhatsApp.

**Criterio de éxito:** la persona entiende qué clase se ofrece, cuándo ocurre, qué obtiene al unirse y qué debe hacer después del clic.

## Audiencia y contexto

- Personas que descubren Atom mediante publicidad en Instagram.
- Llegan desde una Story y probablemente están navegando desde el teléfono.
- Tienen poco contexto sobre Atom; la propuesta y el siguiente paso deben entenderse de inmediato.

## Recorrido principal

1. La Story promete una clase gratuita e invita a asegurar un cupo mediante el enlace.
2. La landing confirma la oferta y presenta tema, fecha, hora y modalidad.
3. La persona pulsa el CTA principal.
4. Se abre el canal o grupo correcto de WhatsApp, donde recibe instrucciones para confirmar su participación.

La landing debe nombrar el destino con precisión: **canal de WhatsApp** si es un canal, o **grupo de WhatsApp** si es un grupo. No usar ambos términos como si fueran equivalentes. La frase “asegura tu cupo” solo debe usarse si unirse al destino efectivamente reserva el cupo; de lo contrario, explicar el paso que lo confirma.

## Estructura de la página

### 1. Encabezado compacto

- Logotipo de Atom según los archivos oficiales de marca.
- Sin navegación extensa: esta página tiene una sola acción principal.
- En móvil, mantener el encabezado bajo para que la oferta siga visible en la primera pantalla.

### 2. Bloque principal

Contenido prioritario, en este orden:

- Identificador breve: `CLASE GRATUITA`.
- Titular centrado en el resultado o tema concreto de la clase.
- Descripción de una o dos frases que explique para quién es y qué podrá aprender.
- Datos visibles: `[fecha]`, `[hora y zona horaria]`, `[modalidad/duración]`.
- CTA principal: `Quiero reservar mi cupo gratis`.
- Microtexto bajo el CTA que indique el destino, por ejemplo: `Te llevaremos al canal oficial de Atom en WhatsApp`.

Los datos entre corchetes son campos pendientes, no texto para publicar.

### 3. Qué incluye

Una sección breve con dos o tres resultados concretos de la clase. Usar beneficios verificables y específicos al contenido real; evitar promesas genéricas o resultados garantizados.

### 4. Sobre Atom / quién imparte

Presentación concisa de Atom y de la persona que dará la clase. Incluir nombre, experiencia o credenciales solo cuando estén confirmados y aprobados por la marca.

### 5. Cierre con CTA

Repetir la fecha y el CTA principal. Mantener la misma etiqueta y el mismo destino de WhatsApp que en el bloque principal.

### 6. Pie de página

- Identidad y datos de contacto oficiales de Atom, según disponibilidad.
- Enlace a privacidad si se recopilan datos o se usan herramientas de seguimiento.
- No añadir formularios si el proceso de registro ocurre íntegramente en WhatsApp.

## Contenido y tono

- Escribir en español claro, directo y cercano, coherente con la voz definida por el manual de marca.
- Ser específico sobre tema, audiencia, fecha y siguiente paso.
- No inventar testimonios, cifras, escasez, cupos limitados ni garantías.
- Mantener consistentes la Story, la landing y el mensaje de WhatsApp: misma clase, fecha, horario y promesa.

### Borrador de copy

**Etiqueta:** Clase gratuita de Atom

**Titular:** Aprende `[tema o resultado concreto]` en una clase gratuita

**Descripción:** Una sesión para `[audiencia]` donde aprenderás `[beneficio concreto]`. Será el `[fecha]` a las `[hora y zona horaria]`, en `[modalidad]`.

**CTA:** Quiero reservar mi cupo gratis

**Microtexto:** Al continuar, abrirás `[el canal / el grupo]` oficial de Atom en WhatsApp para recibir `[confirmación / novedades e instrucciones]`.

Este copy es una plantilla: completar los campos y validar la promesa antes de publicarlo.

## Dirección visual

- Aplicar primero el manual de marca: logotipo, paleta, tipografías, estilo fotográfico/ilustrativo, iconografía y tono.
- Construir una jerarquía visual clara alrededor de la clase y del CTA, sin apariencia de sitio corporativo multipágina.
- Priorizar una imagen real y autorizada de la clase, del docente o de Atom si el manual y los recursos disponibles lo permiten. Evitar imágenes genéricas que puedan sugerir una clase distinta.
- No definir colores, fuentes ni formas de marca hasta recibir el manual.
- Usar el color de acción y los estados de botones definidos por el sistema de marca existente; comprobar contraste suficiente para texto y controles.

La primera maqueta en `index.html` usa una paleta verde lima, azul y coral, las fuentes Fraunces y DM Sans, y una fotografía externa de Unsplash. Son elecciones temporales para visualizar la estructura y deben reemplazarse o aprobarse con el manual de marca y una imagen oficial de Atom antes de publicar.

## Comportamiento y responsive

- Diseñar primero para móvil y para el contexto de una visita desde Instagram.
- Mostrar tema, fecha y CTA sin obligar a desplazarse demasiado.
- Mantener el CTA visible y fácil de pulsar; puede repetirse al final del contenido, pero no competir con acciones secundarias.
- El enlace de WhatsApp debe abrir el destino oficial, funcionar en móvil y escritorio y tener un fallback entendible si WhatsApp no está instalado.
- Evitar reproducción automática de audio/video y elementos que retrasen la carga o tapen la oferta.
- Respetar movimiento reducido y estados de foco visibles para navegación con teclado.

## Accesibilidad y confianza

- Usar un único `H1` descriptivo y encabezados en orden lógico.
- Asegurar contraste, texto legible, foco visible y etiquetas accesibles en los enlaces.
- El CTA debe describir la acción; el microtexto debe explicar que conduce a WhatsApp.
- Informar qué tipo de mensajes recibirá la persona al unirse y cómo puede dejar de recibirlos, de acuerdo con el funcionamiento real del canal/grupo y las políticas aplicables.
- No solicitar información personal en la landing salvo que sea necesaria; si se incorpora un formulario, explicar su uso y enlazar la política de privacidad.

## Medición

Registrar como mínimo:

- Visitas a la landing, idealmente con atribución UTM desde Instagram.
- Clics en el CTA principal y el CTA de cierre, distinguiendo cada ubicación.
- Errores o fallos al abrir el enlace de WhatsApp, si la plataforma permite detectarlos.

Medir solo con herramientas aprobadas por Atom y respetando su política de privacidad. El clic hacia WhatsApp no debe presentarse como una inscripción completada si no existe confirmación de registro.

## Datos pendientes para diseño y publicación

- Manual de marca y archivos oficiales del logotipo.
- Tema y nombre final de la clase; público al que está dirigida y beneficio verificable.
- Fecha, hora con zona horaria, duración y modalidad.
- Nombre y presentación de quien imparte la clase.
- Enlace definitivo al canal o grupo de WhatsApp y descripción de qué pasa al unirse.
- Confirmación de si unirse reserva el cupo o si hace falta otra acción.
- Política de privacidad, analítica y contacto oficial que deben mostrarse.