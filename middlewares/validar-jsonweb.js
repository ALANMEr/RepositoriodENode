import { request, response } from 'express'
import jwt from 'jsonwebtoken'

import { secretKey } from '../config.js';
import Usuario from '../models/SchemaUsuario.js';

export const validarJWT =async (req = request, res = response, next) => {
    const token = req.header("x-token");
if(!token){
    return res.status(400).json({
        msg: "HNo hay token en la peticion"
    })
}

try {
    
    const {uid}=jwt.verify(token, secretKey)
    //Leer el usuario correspondiente
const usuario=await Usuario.findById(uid)

    if (!usuario) {
        res.status(401).json({
            msg: "Token no existe en la BD"
        })
    }


//Verificar si el uid tiene estado en true

if (!usuario.estado) {
    res.status(401).json({
        msg: "Token no válido"
    })
}


req.uid=usuario

    next()
} catch (error) {

    console.log(error)
    res.status(401).json({
        msg:"Token no válido"
    })
}

 
}