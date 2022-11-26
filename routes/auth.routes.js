import { Router } from 'express';
import { check } from 'express-validator';
import { login } from '../controllers/auth.controllers.js';
import { validarCampos } from '../middlewares/validar-campos.js';

const router = Router();

router.post('/login',[
    check("correo","El correo es obligatorio").isEmail(),
    check("password", "La contraseña es obligatorioa").not().isEmpty(),
    validarCampos
], login)





export { router as indexRouteAuth }