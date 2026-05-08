import pool from "../database/mysql.js";

export const getAllEspecialidades = async () => {

    const [rows] = await pool.query(`
        SELECT *
        FROM especialidades
        WHERE activo = 1
    `);

    return rows;
};

export const getEspecialidadById = async (id) => {

    const [rows] = await pool.query(`
        SELECT *
        FROM especialidades
        WHERE id_especialidad = ?
        AND activo = 1
    `, [id]);

    return rows;
};

export const createEspecialidad = async (nombre) => {

    const [result] = await pool.query(`
        INSERT INTO especialidades(nombre, activo)
        VALUES (?,1)
    `, [nombre]);

    return result;
};

export const updateEspecialidad = async (id, nombre) => {

    const [result] = await pool.query(`
        UPDATE especialidades
        SET nombre = ?
        WHERE id_especialidad = ?
    `, [nombre, id]);

    return result;
};

export const deleteEspecialidad = async (id) => {

    const [result] = await pool.query(`
        UPDATE especialidades
        SET activo = 0
        WHERE id_especialidad = ?
    `, [id]);

    return result;
};