"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const zod_1 = require("zod");
const errorHandler = (err, req, res, next) => {
    console.error(err);
    if (err instanceof zod_1.ZodError) {
        return res.status(400).json({
            error: 'Validation Error',
            details: err.errors,
        });
    }
    // Mongoose duplicate key error
    if (err.code === 11000) {
        return res.status(409).json({
            error: 'Conflict Error',
            details: 'A record with the given unique constraint already exists.',
        });
    }
    // Mongoose Cast Error (Invalid ObjectId)
    if (err.name === 'CastError') {
        return res.status(400).json({
            error: 'Invalid ID formatting',
            details: err.message,
        });
    }
    res.status(500).json({
        error: 'Internal Server Error',
        message: err.message || 'Something went wrong',
    });
};
exports.errorHandler = errorHandler;
