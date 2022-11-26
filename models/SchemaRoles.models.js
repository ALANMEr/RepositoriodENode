import { Schema, model } from 'mongoose'

const SchemaRoles = Schema({
    rol: {
        type: String,
        required: [true, "El rol es obligatorio"]
    }
});


export default model("Role", SchemaRoles)