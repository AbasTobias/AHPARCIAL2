
import mongoose from 'mongoose';

const cafeSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    price: Number,
    description: String,
    origin: String,
    roast: String,
    category: String,
    weight: String,
    company: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Company', 
        required: true 
    }
}, { collection: 'cafes' }); 

const Cafe = mongoose.models.Cafe || mongoose.model('Cafe', cafeSchema);

export default Cafe;