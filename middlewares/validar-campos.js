
import { validationResult } from 'express-validator';

//next dice que puedes seguir
export const validarCampos = (req,res,next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
next()
}
