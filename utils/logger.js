// utils/logger.js
console.log("Cargando módulo logger.js");

const log = (message) => {
  const timestamp = new Date().toISOString();
  console.log(`[INFO] [${timestamp}] ${message}`);
};

const error = (message) => {
  const timestamp = new Date().toISOString();
  console.error(`[ERROR] [${timestamp}] ${message}`);
};

// Prueba que las funciones estén definidas correctamente
console.log("Tipo de log:", typeof log); // Debería mostrar "function"
console.log("Tipo de error:", typeof error); // Debería mostrar "function"

module.exports = {
  log,
  error,
};

console.log("Módulo logger.js cargado correctamente");
