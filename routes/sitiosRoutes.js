// ============================
// /routes/sitiosRoutes.js
// ============================
const express = require("express");
const router = express.Router();
const sitiosController = require("../controllers/sitiosController");

// Ruta de bienvenida
router.get("/", sitiosController.welcome);

// Listado de sitios turísticos
router.get("/sitios", sitiosController.getSitios);

// Detalle por ID
router.get("/sitios/:id", sitiosController.getSitioById);

module.exports = router;

const fetch = require("node-fetch");

exports.fetchJSON = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    const data = await response.json();
    throw {
      status: response.status,
      message: data.error || "Error al obtener datos externos",
    };
  }
  return response.json();
};
