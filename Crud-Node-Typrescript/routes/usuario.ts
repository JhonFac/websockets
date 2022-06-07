import { deletUsuario, getUsuario, getUsuarios, postUsuario, putUsuario } from './../controllers/usuarios';
import {Router} from 'express';

export const router = Router();

router.get('/',         getUsuarios);
router.get('/:id',      getUsuario);
router.post('/',        postUsuario);
router.put('/:id',      putUsuario);
router.delete('/:id',   deletUsuario);
   


