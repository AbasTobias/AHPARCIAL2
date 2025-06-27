// models/Company.js
import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: String,
    email: String,
    address: String
}, { collection: 'companies' });

const Company = mongoose.models.Company || mongoose.model('Company', companySchema);

export default Company;