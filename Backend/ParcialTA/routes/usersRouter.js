import express from 'express';
import {
  addUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  auth,
} from '../controllers/userController.js';
import { validacionToken } from '../middlewares/auth.js';

const router = express.Router();

router.post('/login', auth); 

router.post('/', addUser); 

router.get('/', validacionToken, getUsers); 

router.get('/:id', validacionToken, getUserById);

router.put('/:id', validacionToken, updateUser);

router.delete('/:id', validacionToken, deleteUser);

export default router;