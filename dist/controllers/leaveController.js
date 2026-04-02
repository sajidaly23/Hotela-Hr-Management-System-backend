"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLeave = exports.updateLeave = exports.createLeave = exports.getAllLeaves = void 0;
const leaveService = __importStar(require("../services/leaveService"));
const getAllLeaves = async (req, res, next) => {
    try {
        const leaves = await leaveService.getAllLeaves();
        res.status(200).json({
            success: true,
            message: 'Leave records retrieved',
            data: leaves
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getAllLeaves = getAllLeaves;
const createLeave = async (req, res, next) => {
    try {
        const leave = await leaveService.createLeave(req.body);
        res.status(201).json({
            success: true,
            message: 'Leave request created successfully',
            data: leave
        });
    }
    catch (error) {
        next(error);
    }
};
exports.createLeave = createLeave;
const updateLeave = async (req, res, next) => {
    try {
        const leave = await leaveService.updateLeave(req.params.id, req.body);
        res.status(200).json({
            success: true,
            message: 'Leave request updated successfully',
            data: leave
        });
    }
    catch (error) {
        next(error);
    }
};
exports.updateLeave = updateLeave;
const deleteLeave = async (req, res, next) => {
    try {
        await leaveService.deleteLeave(req.params.id);
        res.status(200).json({
            success: true,
            message: 'Leave request deleted successfully',
            data: null
        });
    }
    catch (error) {
        next(error);
    }
};
exports.deleteLeave = deleteLeave;
