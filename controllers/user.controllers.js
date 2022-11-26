import { response, request, query } from 'express'


import bcryptjs from 'bcryptjs'
import Usuario from '../models/SchemaUsuario.js';

export const usuarioGet = async (req, res = response) => {
    // const {q,nombre="no nmame",apikey,page=1,limit}=req.query;
    const { limite = 5, desde = 0 } = req.query;
    const query={estado:true}

    const [total,usuarios]=await Promise.all([
        Usuario.count(query),
        Usuario.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ])


    res.json({
      total,usuarios
    })
}

export const usuarioPost = async (req, res = response) => {


    //estos campos vienen de la base de datos y solo estoy agregando los que necesito
    const { nombre, correo, password, rol } = req.body;


    const usuario = new SchemaUsuario({ nombre, correo, password, rol })


    //Encripatar la contraseña
    const salt = bcryptjs.genSaltSync(10)
    usuario.password = bcryptjs.hashSync(password, salt);

    //Guardar en bd
    await usuario.save();

    res.json({
      
        usuario
    })
}

export const usuarioPut = async (req, res = response) => {

    const { id } = req.params

    const { _id, password, google, correo, ...resto } = req.body;

    //Todo validar con bd

    if (password) {
        //Encripatar la contraseña
        const salt = bcryptjs.genSaltSync()
        resto.password = bcryptjs.hashSync(password, salt);
    }
    const usuarioDB = await Usuario.findByIdAndUpdate(id, resto)

    res.json({
     
        usuarioDB
    })
}
export const usuarioDelete = async(req, res = response) => {
    const {id}=req.params;
    //Fsicamnete los borramos
    // const usuario=await Usuario.findByIdAndDelete(id);

    //Borramos al usuario para el cliente no para la bd
    const usuario = await Usuario.findByIdAndUpdate(id,{estado:false})


    res.json({
     usuario
    })
}

