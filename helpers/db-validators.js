import Usuario from '../models/SchemaUsuario.js';
import Role from "../models/SchemaRoles.models.js"


export const esRolValido=async (rol = "") => {
    const existerol = await Role.findOne({ rol });
    if (!existerol) {
        throw new Error(`El rol ${rol} no está registrado en la base de datos`)
    }
}


export const emailexiste= async(correo="")=>{
    //Verificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo });

    if (existeEmail) {
        throw new Error(`El correo ${correo} ya existe`)
        }
    }


export const existeUsuarioPorId = async (id = "") => {
    //Verificar si el correo existe
    const existeUsuario = await Usuario.findById(id);

    if (!existeUsuario) {
        throw new Error(`El id ${id} no existe`)
    }
}



