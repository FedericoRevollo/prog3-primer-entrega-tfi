import { body } from "express-validator";
import { validar } from "../middlewares/validator.js";

import express from "express";

import {
    getEspecialidades,
    getEspecialidad,
    create,
    update,
    remove
} from "../controllers/especialidades.controller.js";

const router = express.Router();

router.get("/", getEspecialidades);

router.get("/:id", getEspecialidad);

router.post(
    "/",
    [
        body("nombre")
            .notEmpty()
            .withMessage("El nombre es obligatorio"),

        validar
    ],
    create
);

router.put("/:id", update);

router.delete("/:id", remove);

export default router;