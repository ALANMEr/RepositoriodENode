import { Schema, model } from 'mongoose'

const SchemaUsuario = Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es obligatorio"],

    },
    correo: {
        type: String,
        required: [true, "El correo es obligatorio"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "El contrasena es obligatorio"],

    },
    img: {
        type: String,

    },
    rol: {
        type: String,
        required: true,
        enum: ["ADMIN_ROLE", "USER_ROLE"]
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }

})
///Aqui hacemos que no aparezca en pantalla el password y el__v
SchemaUsuario.methods.toJSON = function () {
    const { __v, password, _id, ...usuario } = this.toObject();
    ///cambiar id por uid
    usuario.uid = _id;
    return usuario
}

export default model("Usuario", SchemaUsuario);