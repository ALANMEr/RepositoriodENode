import express from 'express';
import cors from 'cors'
import { port } from '../config.js';
import { indexRoute } from '../routes/user.routes.js';
import dbConnection from '../database/config.db.js';
import { indexRouteAuth } from '../routes/auth.routes.js';

class Server {

    constructor() {

        this.app = express();

        //Conectar base de datos
        this.conectardb()

        this.usuariosRoutersUsuarios = "/api/usuarios";
        this.authRoutersUsuarios = "/api/auth";
        //Middelwares
        this.middlewares();
        //Rutas de aplicacion

        this.routes();
    }
    routes() {

        this.app.use(this.usuariosRoutersUsuarios, indexRoute)

        this.app.use(this.authRoutersUsuarios, indexRouteAuth)


    }
    async conectardb() {
        await dbConnection();
    }
    middlewares() {


        ///cors
        this.app.use(cors())

        ///Lectura y parseo del body
        this.app.use(express.json())

        //Directorio Publico
        this.app.use(express.static("public"))
    }
    listen() {
        this.app.listen(port, () => {
            console.log(`App listening at http://localhost:${port}`)
        })
    }
}

export default Server;