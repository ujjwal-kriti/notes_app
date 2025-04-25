const File = require('../models/File');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const fs = require('fs');
const path = require('path');

// @desc    Upload a file
// @route   POST /api/files/upload
// @access  Private
exports.uploadFile = asyncHandler(async (req, res, next) => {
    if (!req.file) {
        return next(new ErrorResponse('Please upload a file', 400));
    }

    const file = await File.create({
        filename: req.file.filename,
        originalname: req.file.originalname,
        mimetype: req.file.mimetype,
        size: req.file.size,
        path: req.file.path,
        user: req.user.id
    });

    res.status(201).json({
        success: true,
        data: file
    });
});

// @desc    Get all files for user
// @route   GET /api/files
// @access  Private
exports.getFiles = asyncHandler(async (req, res, next) => {
    const files = await File.find({ user: req.user.id });

    res.status(200).json({
        success: true,
        count: files.length,
        data: files
    });
});

// @desc    Get single file
// @route   GET /api/files/:id
// @access  Private
exports.getFile = asyncHandler(async (req, res, next) => {
    const file = await File.findOne({
        _id: req.params.id,
        user: req.user.id
    });

    if (!file) {
        return next(new ErrorResponse(`File not found with id of ${req.params.id}`, 404));
    }

    res.status(200).json({
        success: true,
        data: file
    });
});

// @desc    Download file
// @route   GET /api/files/:id/download
// @access  Private
exports.downloadFile = asyncHandler(async (req, res, next) => {
    const file = await File.findOne({
        _id: req.params.id,
        user: req.user.id
    });

    if (!file) {
        return next(new ErrorResponse(`File not found with id of ${req.params.id}`, 404));
    }

    const filePath = path.join(__dirname, `../../uploads/${file.filename}`);
    
    if (!fs.existsSync(filePath)) {
        return next(new ErrorResponse('File not found on server', 404));
    }

    res.download(filePath, file.originalname);
});

// @desc    Delete file
// @route   DELETE /api/files/:id
// @access  Private
exports.deleteFile = asyncHandler(async (req, res, next) => {
    const file = await File.findOne({
        _id: req.params.id,
        user: req.user.id
    });

    if (!file) {
        return next(new ErrorResponse(`File not found with id of ${req.params.id}`, 404));
    }

    const filePath = path.join(__dirname, `../../uploads/${file.filename}`);
    
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }

    await file.remove();

    res.status(200).json({
        success: true,
        data: {}
    });
});
