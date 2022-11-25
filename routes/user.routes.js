import {Router} from 'express';
import  {usuarioDelete, usuarioGet, usuarioPost, usuarioPut}  from '../controllers/user.controllers.js';


const router=Router();

router.get('/',usuarioGet)

router.put('/:id', usuarioPut)

router.post('/',usuarioPost)

router.delete('/',usuarioDelete)


export { router as indexRoute }