const mongoose = require('mongoose');
const FileSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    originalname: { type: String, required: true },
    fileName: { type: String, required: true },
    mimetype: { type: String, required: true },
    size: { type: Number, required: true },
    path: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('File', FileSchema);
