//Grupo BC
//Integrantes: Sieza Sergio, Morabito Flavia, Guerrero Daiana, Revollo Federico, Uhrig Catriel.

import express from "express";
import especialidadesRoutes from "./routes/especialidades.routes.js";

const app = express();

app.use(express.json());

app.use("/api/v1/especialidades", especialidadesRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en puerto ${process.env.PORT}`);
});