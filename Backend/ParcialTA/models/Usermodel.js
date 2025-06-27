import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
    email: { type: String, required: true, unique: true, },
    password: { type: String, required: true, minlength: 6 }
}, { collection: 'users'});

const User = mongoose.models.User || mongoose.model('User',userSchema);

export default User;