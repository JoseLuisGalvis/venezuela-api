// ============================
// server.js (entry point)
// npm install node-fetch@2 helmet
// ============================

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const sitiosRoutes = require("./routes/sitiosRoutes");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Seguridad HTTP con Helmet
app.use(helmet());

// CORS configurado solo para los orígenes permitidos
app.use(
  cors({
    origin: ["https://welcomevzla.vercel.app", "http://127.0.0.1:5501"],
  })
);

// Rutas
app.use("/", sitiosRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
