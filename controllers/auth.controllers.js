import { response } from 'express'
import Usuario from '../models/SchemaUsuario.js';
import bcryptjs from "bcryptjs"
import { generarJWT } from '../helpers/generar-jwt-helpers.js';
import googleverify from '../helpers/google-verify.js';
export const login = async (req, res = response) => {

    const { correo, password } = req.body;

    try {


        //Verificar si existe el correo
        const usuario = await Usuario.findOne({ correo })

        if (!usuario) {
            return res.status(400).json({
                msg: "Usuario / contraseña no correctos ---correo"
            })
        }

        //Verificar si el usuario esta activo



        if (!usuario.estado) {
            return res.status(400).json({
                msg: "Usuario / contraseña no correctos ---estado false"
            })
        }

        //Verificar la contraseña
        const validarPasssword = bcryptjs.compareSync(password, usuario.password)
        if (!validarPasssword) {
            return res.status(400).json({
                msg: "Usuario / contraseña no correctos ---password no funciona"
            })
        }
        //Generar el jwt

        const token = await generarJWT(usuario.id)


        res.json({
           usuario,
           token
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Hable con el administrador"
        })
    }


}

export const googleSignIn = async (req, res = response)=>{
const {id_token}=req.body;
try {
    const googleUser=await googleverify(id_token)


    res.json({
        msg: "id_token",
        id_token
    })
} catch (error) {
    return res.status(400).json({
        ok:false,
        msg: "Token no se pudo verificar"
    })
}
}