import {
    getAllEspecialidades,
    getEspecialidadById,
    createEspecialidad,
    updateEspecialidad,
    deleteEspecialidad
} from "../services/especialidades.service.js";

export const getEspecialidades = async (req, res) => {

    try {

        const data = await getAllEspecialidades();

        res.status(200).json({
            success: true,
            message: "Especialidades obtenidas",
            data
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

export const getEspecialidad = async (req, res) => {

    try {

        const data = await getEspecialidadById(req.params.id);

        res.status(200).json({
            success: true,
            message: "Especialidad obtenida",
            data
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

export const create = async (req, res) => {

    try {

        await createEspecialidad(req.body.nombre);

        res.status(201).json({
            success: true,
            message: "Especialidad creada"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

export const update = async (req, res) => {

    try {

        await updateEspecialidad(
            req.params.id,
            req.body.nombre
        );

        res.status(200).json({
            success: true,
            message: "Especialidad actualizada"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

export const remove = async (req, res) => {

    try {

        await deleteEspecialidad(req.params.id);

        res.status(200).json({
            success: true,
            message: "Especialidad eliminada"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};