# Design: landing de clase gratis de Atom

Guía de diseño para la landing a la que llega la gente desde la publicidad de Atom en Instagram. Se basa en el **Manual de marca Atom Labs** (21 páginas, mayo 2026).

Cada decisión está marcada según su origen:

- **[Manual]** sale directo del manual de marca. No se cambia.
- **[Landing]** es una decisión tomada para esta página, derivada del manual. Se puede ajustar.

---

## 1. Qué es esta página

Atom va a hacer publicidad masiva en Instagram. En una Story, alguien de Atom invita a anotarse a una clase gratis: *"asegurá tu cupo entrando al enlace"*. Ese enlace es esta página.

La página tiene un solo trabajo: que la persona toque el botón y se una al **canal de difusión de WhatsApp** de Atom, donde recibe la información de la clase.

| | |
|---|---|
| **Conversión** | Clic en el botón que abre el canal de WhatsApp |
| **Dispositivo** | Celular, dentro del navegador de Instagram |
| **Contexto** | Vienen de una Story: atención corta, poco o nada de contexto sobre Atom |
| **Éxito** | En la primera pantalla entienden qué clase es, cuándo es y qué pasa al tocar el botón |

### Recorrido

1. Story de Instagram: "clase gratis el `[día]`, asegurá tu cupo en el enlace".
2. Landing: confirma la misma oferta, con tema, fecha y hora.
3. Botón: abre el canal de WhatsApp.
4. WhatsApp: la persona se une y recibe las instrucciones de la clase.

La Story, la landing y el primer mensaje del canal tienen que decir lo mismo: misma clase, misma fecha, misma promesa.

---

## 2. La marca

### Personalidad [Manual]

Atom Labs está dejando de presentarse como un proveedor de soluciones de inteligencia artificial para construirse como marca con identidad propia. El manual la define como **seria, moderna y viva**, y pide priorizar **sobriedad, claridad y consistencia**.

Para la landing eso significa: pocos elementos, mucho aire, tipografía grande y un solo acento de color donde importa.

### Paleta [Manual]

Son cuatro colores. No se agrega ninguno más.

| Token | Nombre | Hex | RGB | Rol según el manual |
|---|---|---|---|---|
| `--negro-polvo` | Negro polvo | `#2b2a2a` | 43, 42, 42 | Base |
| `--blanco-crema` | Blanco crema | `#fce9e4` | 252, 233, 228 | Base |
| `--celeste` | Celeste | `#87abdb` | 135, 171, 219 | Detalles |
| `--naranja` | Naranja | `#db6f54` | 219, 111, 84 | Acento: contraste, jerarquía y dinamismo en puntos clave |

### Uso del color en la landing [Landing]

- **Negro polvo es el fondo dominante.** El manual lo usa así en la mayoría de sus piezas, y las aplicaciones para celular son todas oscuras.
- **Blanco crema** para todo el texto sobre negro, y como fondo de una sola sección clara para cortar el ritmo.
- **Celeste** para detalles: isotipo, trazos gráficos, etiquetas, íconos y la franja de datos de la clase.
- **Naranja** solo para el botón principal y, como mucho, un trazo gráfico. Si aparece en más lugares, deja de señalar el botón.

Combinaciones de texto permitidas, con su contraste medido:

| Texto | Fondo | Contraste | Uso |
|---|---|---|---|
| Crema | Negro polvo | 12,2 : 1 | Cualquier texto |
| Negro polvo | Crema | 12,2 : 1 | Cualquier texto |
| Negro polvo | Celeste | 6,1 : 1 | Cualquier texto |
| Celeste | Negro polvo | 6,1 : 1 | Cualquier texto |
| Negro polvo | Naranja | 4,4 : 1 | Solo texto grande y en negrita (desde 19 px Bold) |
| Naranja | Negro polvo | 4,4 : 1 | Solo títulos o trazos, nunca párrafos |

Combinaciones prohibidas para texto: crema sobre naranja (2,8 : 1), crema sobre celeste (2,0 : 1), celeste sobre crema y naranja sobre celeste (1,4 : 1).

### Tipografía [Manual]

Una sola familia: **Montserrat**, en sus distintas variantes. El manual la elige por ser de palo seco, geométrica y de formas circulares.

- **Montserrat Black con tracking −150** es la tipografía del logotipo, y la que el manual usa en los titulares de sus aplicaciones.
- **Montserrat en pesos livianos** (Thin, Light) para los títulos de sección del propio manual.
- **Montserrat Regular**, con frases clave en negrita, para texto corrido.

### Escala tipográfica de la landing [Landing]

Tracking −150 de Illustrator equivale a `letter-spacing: -0.15em`. Ese valor es para el logotipo; en titulares largos las letras se tocan, así que se usa uno más suave.

| Elemento | Peso | Tamaño | Interlineado | Tracking |
|---|---|---|---|---|
| H1 | Black 900 | `clamp(40px, 11vw, 88px)` | 0,95 | −0,05em |
| H2 | Black 900 | `clamp(30px, 6vw, 52px)` | 1,0 | −0,04em |
| Etiqueta de sección | Light 300 | 18–22 px | 1,2 | −0,03em |
| Párrafo | Regular 400 | 16–18 px | 1,5 | 0 |
| Énfasis en párrafo | Bold 700 | igual al párrafo | | |
| Botón | Bold 700 | 19 px | 1 | 0 |
| Microtexto | Regular 400 | 13–14 px | 1,45 | 0 |

Las etiquetas de sección terminan en dos puntos, como los títulos del manual ("Logotipo:", "Isotipo:"). Ejemplo: `Clase gratis:`.

Cargar Montserrat como fuente variable desde Google Fonts y usar solo cuatro pesos: 300, 400, 700 y 900.

### Logotipo [Manual]

El logotipo es la palabra **Atom** en Montserrat Black con el isotipo (tres órbitas entrelazadas, en celeste) superpuesto sobre la "o".

Versiones disponibles:

| Versión | Tamaño mínimo impreso | Equivalente aproximado en pantalla |
|---|---|---|
| Logotipo "Atom" | 1,5 cm | 57 px de ancho |
| Isotipo solo | 1 cm | 38 px |
| Variación "Atom ai" | 2 cm | 76 px |
| Variación "the Atom voice" | 2,5 cm | 94 px |

Versiones de color que muestra el manual: palabra en crema con isotipo celeste sobre negro polvo, y palabra en negro polvo con isotipo celeste sobre crema.

**Área de resguardo:** un margen libre igual al ancho de la "o" del logotipo en los cuatro lados.

**Usos incorrectos:**

- No deformar, estirar ni comprimir.
- No rotar ni inclinar.
- No cambiar los colores: solo la paleta oficial.
- No ponerlo sobre fondos que dificulten la lectura (fotos, texturas).
- No invadir el área de resguardo.
- No achicarlo por debajo del tamaño mínimo.

### Logo en la landing [Landing]

- Usar el **logotipo "Atom"** principal, en crema con isotipo celeste, sobre negro polvo.
- Ancho mínimo de 96 px en el encabezado, para que el isotipo se lea bien en celular.
- Siempre como archivo SVG. **No reconstruirlo con texto en CSS**: el isotipo superpuesto no se puede reproducir tipeando la palabra.
- Favicon: isotipo solo, celeste sobre negro polvo.

### Archivos de marca [Landing]

Exportados del PDF del manual, con el texto convertido a curvas. Están en `assets/`:

| Archivo | Contenido | Origen en el manual |
|---|---|---|
| `atom-logo.svg` | Logotipo, palabra en crema e isotipo celeste | Página 3 |
| `favicon.svg` | Isotipo celeste sobre negro polvo | Página 5 |
| `cadena-molecular.svg` | Cadena molecular en celeste | Página 14 |
| `pensamiento-estrategico.svg` | Pensamiento estratégico en naranja | Página 14 |

No se exportaron las variaciones "Atom ai" y "the Atom voice", la versión del logotipo para fondo claro ni el elemento Vigilancia, porque la landing no los usa.

### Elementos gráficos [Manual]

Tres ilustraciones de trazo lineal, con vértices redondeados y enfoque minimalista:

- **Cadena molecular**: óvalos y círculos abiertos unidos por trazos.
- **Pensamiento estratégico**: perfil de una cabeza con líneas entrelazadas adentro.
- **Vigilancia**: un ojo rodeado por un anillo.

En las aplicaciones del manual aparecen en celeste o en naranja, a gran tamaño y **cortados por el borde** de la pieza, no centrados como un ícono.

También se repite un recurso de forma: **grandes bloques de color plano con una sola esquina muy redondeada** (la tapa del manual, la lámina de colores).

### Elementos gráficos en la landing [Landing]

- **Cadena molecular** en celeste, saliendo por un borde del bloque principal. Es el elemento que más identifica a la marca en redes.
- **Pensamiento estratégico** para acompañar la sección sobre qué se aprende.
- **Vigilancia** no se usa acá: en una página que pide sumarse a un canal, un ojo transmite lo contrario a confianza.
- Un solo elemento gráfico por pantalla. Nunca detrás de texto corrido.
- Bloques de sección con una esquina redondeada grande (entre 80 y 160 px), las otras tres rectas.
- **Sin fotos de stock.** El manual no define estilo fotográfico y sus aplicaciones para redes son solo tipografía, color y trazo. Si se quiere mostrar a quien da la clase, tiene que ser una foto real y aprobada.

---

## 3. Estructura de la página

Una sola columna, sin menú de navegación. Cinco bloques.

### 3.1 Encabezado

- Fondo negro polvo. Logotipo a la izquierda, respetando el área de resguardo.
- Nada más: sin menú ni enlaces. Cada enlace extra es una salida que no es el botón.
- Alto de 84 px en celular. El isotipo sobresale por arriba y por abajo de la palabra, así que el logotipo necesita más alto que un logo de una línea.

### 3.2 Bloque principal

Fondo negro polvo. Tiene que entrar completo, botón incluido, en la primera pantalla de un celular.

1. Etiqueta: `Clase gratis:` en Light, celeste.
2. H1 en Black, crema: repite la promesa de la Story, para que quien llega reconozca que está en el lugar correcto.
3. Una o dos frases en Regular: para quién es y de qué trata.
4. Botón principal naranja.
5. Microtexto: qué pasa al tocar el botón.
6. Cadena molecular en celeste, cortada por el borde superior derecho. Puede quedar al lado del titular, nunca detrás de la bajada ni del botón.

### 3.3 Franja de datos

Bloque celeste con texto negro polvo y una esquina redondeada grande. Los bloques siguientes repiten el recurso alternando la esquina (izquierda, derecha, izquierda), y en cada esquina asoma el color del bloque anterior. Tres datos, cada uno con su etiqueta:

- **Cuándo:** `[día y fecha]`
- **Hora:** `[hora y zona horaria]`
- **Dónde:** `[online en vivo / presencial + lugar]`

En celular van apilados; desde 700 px, en tres columnas.

### 3.4 Qué vas a ver

Fondo blanco crema con texto negro polvo: la única sección clara de la página.

- Etiqueta: `En la clase:`
- H2 en Black.
- Tres puntos concretos sobre el contenido real de la clase. Sin promesas genéricas.
- Pensamiento estratégico en naranja, abajo a la derecha, apoyado en el borde inferior del bloque (el celeste no contrasta sobre crema).

### 3.5 Cómo funciona y cierre

Fondo negro polvo.

- Etiqueta: `Cómo funciona:`
- Tres pasos numerados, con el número en Black celeste:
  1. Tocás el botón y entrás al canal de WhatsApp de Atom.
  2. Te mandamos por ahí el acceso y los detalles.
  3. Nos vemos en la clase.
- Se repite la fecha y el **mismo** botón, con el mismo texto y el mismo destino.

### 3.6 Pie

Fondo negro polvo, texto crema chico.

- Isotipo o logotipo.
- Instagram oficial de Atom.
- Enlace a la política de privacidad si se usa analítica o píxel de Meta.

---

## 4. Componentes

### Botón principal [Landing]

| Propiedad | Valor |
|---|---|
| Fondo | Naranja `#db6f54` |
| Texto | Negro polvo `#2b2a2a`, Montserrat Bold 19 px |
| Forma | Píldora (`border-radius: 999px`), coherente con los vértices redondeados del manual |
| Alto | 56 px mínimo |
| Ancho | 100 % en celular, automático desde 700 px |
| Ícono | Glifo de WhatsApp en negro polvo, a la izquierda del texto |
| Hover / activo | Fondo crema `#fce9e4`, texto negro polvo |
| Foco | Contorno crema de 3 px, separado 3 px |

Reglas:

- **El botón naranja solo va sobre negro polvo.** Sobre crema o celeste pierde contraste con el fondo.
- **No usar el verde de WhatsApp.** El manual pide no salir de la paleta; el glifo alcanza para que se reconozca el destino.
- El texto del botón es idéntico en todas sus apariciones.

### Botón fijo en celular [Landing]

Cuando el botón del bloque principal sale de pantalla al hacer scroll, aparece una barra fija abajo con el mismo botón, sobre negro polvo. Se oculta al llegar al botón de cierre, para que no haya dos a la vista.

### Etiqueta de sección [Landing]

Montserrat Light, celeste sobre negro (negro polvo sobre crema o celeste), terminada en dos puntos.

### Número de paso [Landing]

Montserrat Black, 40–48 px, celeste, tracking −0,05em.

---

## 5. Texto y tono

### Voz [Manual]

El manual escribe en **voseo rioplatense** y con frases cortas y directas: "Respetá siempre sus proporciones", "Nada de colores improvisados", "El aire también comunica".

### Reglas para la landing [Landing]

- Voseo siempre: *anotate, asegurá, sumate, tocá*. Nunca *reserva, únete, súmate*.
- Frases cortas. Una idea por oración.
- Decir "canal de WhatsApp", siempre igual. No alternar con "grupo" o "comunidad".
- No inventar cupos limitados, cuentas regresivas, testimonios ni cifras. Si los cupos son realmente limitados, decir cuántos.
- "Asegurá tu cupo" solo si unirse al canal de verdad reserva el lugar. Si hace falta otro paso, el microtexto lo explica.

### Borrador de textos

Los campos entre corchetes están pendientes. No se publican así.

| Lugar | Texto |
|---|---|
| Etiqueta | Clase gratis: |
| H1 | Anotate a la clase gratis de Atom. |
| Bajada | Una clase para `[a quién está dirigida]` sobre `[tema de la clase]`. Sin costo y sin formularios. |
| Botón | Quiero mi cupo gratis |
| Microtexto | Te lleva al canal de WhatsApp de Atom. Por ahí te mandamos el acceso a la clase. |
| H2 qué vas a ver | Lo que vas a ver |
| H2 cómo funciona | Tu cupo en tres pasos |
| Cierre | Nos vemos el `[día]`. |

Cuando esté definido el tema, conviene probar un H1 con el tema o el resultado concreto de la clase: suele convertir mejor que uno genérico.

---

## 6. Comportamiento

### Responsive

- Diseño base para 360–430 px de ancho. Escritorio es el caso secundario.
- Márgenes laterales de 20 px en celular; contenido de 1120 px como máximo en escritorio.
- El navegador de Instagram tiene barras arriba y abajo que achican la pantalla: usar `100svh`, no `100vh`, y verificar que el botón del bloque principal quede visible sin scroll.

### Enlace de WhatsApp

- Abre el canal oficial. Probarlo en iPhone y Android **desde adentro de Instagram**, que es donde más falla.
- Si el enlace no está configurado o no abre, mostrar un mensaje claro en lugar de un botón que no hace nada.

### Movimiento

- Transiciones de 150–200 ms en el botón. Nada más.
- Sin video ni audio automático, sin animaciones de entrada que demoren ver la oferta.
- Respetar `prefers-reduced-motion`.

### Velocidad

- La gente llega con datos móviles. La página no debería pasar de 300 KB.
- Logo y elementos gráficos en SVG. Sin librerías de JavaScript.
- `font-display: swap` para que el texto aparezca antes que la fuente.

### Accesibilidad

- Un solo `H1`, encabezados en orden.
- Solo las combinaciones de color de la tabla de contraste.
- Botones de 48 px de alto como mínimo.
- Foco visible al navegar con teclado.
- Elementos gráficos decorativos con `aria-hidden="true"`; el logo con texto alternativo "Atom".

---

## 7. Medición

- Visitas con parámetros UTM de la campaña de Instagram.
- Clics en el botón, distinguiendo ubicación: bloque principal, barra fija y cierre.
- El clic cuenta como intención, no como inscripción: no se sabe si la persona terminó uniéndose al canal.
- Si se usa el píxel de Meta o analítica, enlazar la política de privacidad en el pie.

---

## 8. Estado de `index.html`

La página ya sigue esta guía: paleta y tipografía del manual, logotipo en SVG, los cinco bloques, textos en voseo, botón píldora naranja y barra fija en celular.

Probada en capturas a 360, 390 y 1280 px de ancho. **Falta probarla en un teléfono real desde adentro de Instagram**, que es donde importa.

Cómo dejarla lista para publicar:

- Los datos pendientes están entre corchetes y con subrayado punteado (clase `pending`). Al completar cada uno, borrar los corchetes y la clase.
- El enlace de WhatsApp se carga en un solo lugar: la constante `WHATSAPP_URL`, al final del archivo. Mientras esté vacía, los botones muestran un aviso en vez de abrir WhatsApp.
- No hay analítica conectada. Cada botón tiene un atributo `data-location` (`hero`, `sticky`, `closing`) para distinguir los clics cuando se agregue.

---

## 9. Pendientes

Para publicar:

- Tema y nombre de la clase, y a quién está dirigida.
- Fecha, hora con zona horaria, duración y modalidad.
- Quién da la clase, si se quiere mostrar.
- Enlace definitivo del canal de WhatsApp.
- Confirmar que el destino es un **canal** (y no un grupo o una lista de difusión), porque cambia el texto.
- Confirmar si unirse al canal ya reserva el cupo.
- Instagram oficial y política de privacidad para el pie.
