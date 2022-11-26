import { request, response } from "express";

export const esAdminRole = (req = request, res = response, next) => {

    if (!req.usuario) {

        return res.status(401).json({
            msg: "Se requiere validar el role sin validar el token uno"

        })
    }
    const { rol, nombre } = req.usuario;

    if (rol !== "ADMIN_ROLE") {

        return res.status(401).json({
            msg: "Rol no autorizado"

        })
    }
    next()

}


const tieneRol = (...roles) => {
    return (req = request, res = response, next) => {

        if (!req.usuario) {

            res.status(401).json({
                msg: "Se requiere validar el role sin validar el token uno"

            })
        }
    
         if (!roles.includes(req.usuario.rol)) {

        return res.status(401).json({
            msg: `El servico requioere uno de estos roles ${roles}`
        })
    }
    next()
}}