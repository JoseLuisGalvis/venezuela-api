// ============================
// /controllers/sitiosController.js
// ============================

const { fetchJSON } = require("../utils/fetchHelper");
const { log, error } = require("../utils/logger");

const BASE_URL = "https://api-venezuela-es-un-paraiso.onrender.com";

// Endpoint N° 1 raíz "/"
exports.welcome = (req, res) => {
  log("Solicitud recibida en '/' - Enviando mensaje de bienvenida");
  res.json({
    mensaje:
      "Bienvenidos a Venezuela, Tierra de Hermosos Paisajes y Gente Buena...!",
  });
};

// Endpoint N° 2 "/sitios"
exports.getSitios = async (req, res) => {
  log("Solicitud recibida en '/sitios' - Obteniendo todos los sitios...");
  try {
    const data = await fetchJSON(`${BASE_URL}/sitios`);
    log(`Se obtuvieron ${data.length || 0} sitios turísticos`);
    res.json(data);
  } catch (err) {
    error(`Error al obtener sitios turísticos: ${err.message}`);
    res
      .status(err.status || 500)
      .json({ error: err.message || "Error interno del servidor" });
  }
};

// Endpoint N° 3 "/sitios/:id"
exports.getSitioById = async (req, res) => {
  const id = req.params.id;
  log(`Solicitud recibida en '/sitios/${id}' - Buscando sitio por ID...`);
  try {
    const data = await fetchJSON(`${BASE_URL}/sitios/${id}`);
    log(`Sitio con ID ${id} obtenido correctamente`);
    res.json(data);
  } catch (err) {
    error(`Error al obtener sitio con ID ${id}: ${err.message}`);
    res
      .status(err.status || 500)
      .json({ error: err.message || "Error interno del servidor" });
  }
};
