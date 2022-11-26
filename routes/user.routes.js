import { Router } from 'express';
import { check} from 'express-validator';
import { usuarioDelete, usuarioGet, usuarioPost, usuarioPut } from '../controllers/user.controllers.js';
import { emailexiste, esRolValido, existeUsuarioPorId } from '../helpers/db-validators.js';
import { validarCampos } from '../middlewares/validar-campos.js';
import { validarJWT } from '../middlewares/validar-jsonweb.js';
import { esAdminRole } from '../middlewares/validar-roles.js';



const router = Router();

router.get('/', usuarioGet)

router.put('/:id',[
    check("id", "No es un id valido").isMongoId(),
    check("id").custom( existeUsuarioPorId),
    check("rol").custom(esRolValido),
    validarCampos
],usuarioPut)
check("id","No es un id valido").isMongoId()
router.post('/', [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("correo", "El correo no es válido").isEmail(),
    check("correo").custom(emailexiste),
    check("password", "El password debe de tener más de 6 letras").isLength({ min: 6 }),
    // check("rol", "No es un rol válido").isIn(["ADMIN_ROLE", "USER_ROLE","VENTAS_ROLE"]),
    check("rol").custom(esRolValido),
    validarCampos

], usuarioPost)

router.delete('/:id', [
    validarJWT,
    esAdminRole,
    check("id", "No es un id valido").isMongoId(),
    check("id").custom(existeUsuarioPorId),
    validarCampos
],usuarioDelete)


export { router as indexRoute }