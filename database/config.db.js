import mongoose from 'mongoose'
import { db } from '../config.js'

const dbConnection=async()=>{

    try {
       await mongoose.connect(db,{
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        })
        console.log("BD EN DIRECTO")
    } catch (error) {
        throw new Error("Error al iniciar la bd")
    }
}


export default dbConnection;