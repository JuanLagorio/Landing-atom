// Guarda cada inscripción del formulario como una fila en una Google Sheet.
//
// Cómo conectarlo (una sola vez):
//  1. Creá una Google Sheet nueva. Menú Extensiones > Apps Script.
//  2. Borrá lo que haya y pegá todo este archivo. Guardá.
//  3. Implementar > Nueva implementación > tipo "Aplicación web".
//     Ejecutar como: "Yo". Quién tiene acceso: "Cualquier usuario". Implementar y autorizar.
//  4. Copiá la URL que termina en /exec y pegala en config.js, en formularioUrl.
//
// Si después cambiás este código: Implementar > Administrar implementaciones > editar > Nueva versión.
// Si creás una implementación nueva, la URL cambia y hay que actualizar config.js.

const HOJA = "Inscriptos";
const COLUMNAS = ["fecha", "nombre", "email", "telefono", "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const libro = SpreadsheetApp.getActiveSpreadsheet();
    const hoja = libro.getSheetByName(HOJA) || libro.insertSheet(HOJA);
    if (hoja.getLastRow() === 0) hoja.appendRow(COLUMNAS);

    const datos = e.parameter;
    hoja.appendRow(COLUMNAS.map((columna) => (columna === "fecha" ? new Date() : comoTexto(datos[columna]))));
  } finally {
    lock.releaseLock();
  }
  return ContentService.createTextOutput("ok");
}

// Sin esto, un teléfono como "+54 9 11..." se toma como fórmula y se rompe la celda
function comoTexto(valor) {
  const texto = String(valor || "").slice(0, 200);
  return /^[=+\-@]/.test(texto) ? `'${texto}` : texto;
}
