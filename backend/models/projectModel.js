const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    techStack: [String],
    price: { type: Number, required: true },
    image: { type: String, required: true },
    fileUrl: { type: String, required: true }, // Secure storage path
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
