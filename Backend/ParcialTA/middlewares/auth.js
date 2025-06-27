import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const validacionToken = (req, res, next) => {
  const authHeader = req.headers['authorization']; 
  const token = authHeader && authHeader.split(' ')[1]; 

  if (!token) {
    return res.status(401).json({ msg: 'No hay token, acceso denegado' });
  }

  try {
    const user = jwt.verify(token, process.env.SECRET_KEY);
    req.user = user; 
    next();
  } catch (error) {
    return res.status(401).json({ msg: 'Token no válido' });
  }
};
