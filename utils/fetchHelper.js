const fetch = require("node-fetch");

exports.fetchJSON = async (url) => {
  const response = await fetch(url);
  const contentType = response.headers.get("content-type");
  const text = await response.text(); // Primero lo leemos como texto

  if (!response.ok) {
    let errorMessage = "Error al obtener datos externos";
    try {
      const data = JSON.parse(text); // Intentamos parsear
      errorMessage = data.error || errorMessage;
    } catch (_) {
      // si no es JSON válido, dejamos el mensaje por defecto
    }

    throw {
      status: response.status,
      message: errorMessage,
    };
  }

  try {
    return JSON.parse(text);
  } catch (_) {
    throw {
      status: 500,
      message: "La respuesta del servidor no es un JSON válido",
    };
  }
};
