import Company from "../models/Company.js";
import Cafe from "../models/Cafe.js";

// Obtener todas las empresas
export const getCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener empresa por ID
export const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) return res.status(404).json({ error: "Empresa no encontrada" });
    res.json(company);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear nueva empresa
export const addCompany = async (req, res) => {
  try {
    const newCompany = new Company(req.body);
    await newCompany.save();
    res.status(201).json(newCompany);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ error: 'El nombre de la empresa ya existe' });
    }
    res.status(400).json({ error: error.message });
  }
};

// Actualizar empresa
export const updateCompany = async (req, res) => {
  try {
    const updated = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: "Empresa no encontrada" });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar empresa
export const deleteCompany = async (req, res) => {
  try {
    const deleted = await Company.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Empresa no encontrada" });
    res.json({ message: "Empresa eliminada" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener empresa con sus cafés
export const getCompanyWithCafes = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) return res.status(404).json({ error: "Empresa no encontrada" });
    
    const cafes = await Cafe.find({ company: req.params.id });
    res.json({ company, cafes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};