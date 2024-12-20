const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    transactionId: { type: String, required: true },
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
    userEmail: { type: String, required: true },
    status: { type: String, default: 'Pending' },
}, { timestamps: true });

module.exports = mongoose.model('Transaction', transactionSchema);
