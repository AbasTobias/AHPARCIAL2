import express from "express";
import { getCafes, getCafeById, addCafe, updateCafe, deleteCafe,getCafeByOrigin,getCafeByCategory, getCafeByWeight, getCafeByName} from "../controllers/cafeController.js";

const router = express.Router();

// Rutas para los cafés
router.get('/', getCafes);  // Obtener todos los cafés
router.get('/:id', getCafeById);  // Obtener café por ID
router.post('/', addCafe);  // Crear un nuevo café
router.put('/:id', updateCafe);  // Actualizar café por ID
router.delete('/:id', deleteCafe);  // Eliminar café por ID
router.get('/pais/:origen', getCafeByOrigin);// Busca cafe por pais Case Sens
router.get('/categoria/:categoria',getCafeByCategory); //Busca cafe por categoria
router.get('/peso/:peso',getCafeByWeight); //Busca cafe por peso
router.get('/nombre/:nombre',getCafeByName);

export default router;
