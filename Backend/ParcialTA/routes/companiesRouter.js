import express from "express";
import { 
    getCompanies, 
    getCompanyById, 
    addCompany, 
    updateCompany, 
    deleteCompany,
    getCompanyWithCafes 
} from "../controllers/companyController.js";

const router = express.Router();

router.get('/', getCompanies);
router.get('/:id', getCompanyById);
router.post('/', addCompany);
router.put('/:id', updateCompany);
router.delete('/:id', deleteCompany);
router.get('/:id/cafes', getCompanyWithCafes); // Obtener empresa con sus cafés

export default router;