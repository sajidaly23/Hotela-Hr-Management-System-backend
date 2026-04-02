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
exports.deletePayroll = exports.updatePayroll = exports.createPayroll = exports.getAllPayroll = void 0;
const payrollService = __importStar(require("../services/payrollService"));
const getAllPayroll = async (req, res, next) => {
    try {
        const records = await payrollService.getAllPayroll();
        res.status(200).json({
            success: true,
            message: 'Payroll records retrieved',
            data: records
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getAllPayroll = getAllPayroll;
const createPayroll = async (req, res, next) => {
    try {
        const record = await payrollService.createPayroll(req.body);
        res.status(201).json({
            success: true,
            message: 'Payroll record created successfully',
            data: record
        });
    }
    catch (error) {
        res.status(409).json({ success: false, message: 'Conflict Error', data: null, details: 'Payroll already exists for this employee for the given month and year.' });
        next(error);
    }
};
exports.createPayroll = createPayroll;
const updatePayroll = async (req, res, next) => {
    try {
        const record = await payrollService.updatePayroll(req.params.id, req.body);
        res.status(200).json({
            success: true,
            message: 'Payroll record updated successfully',
            data: record
        });
    }
    catch (error) {
        if (error.message.includes('not found')) {
            res.status(404).json({ success: false, message: 'Not Found', data: null, details: error.message });
            return;
        }
        next(error);
    }
};
exports.updatePayroll = updatePayroll;
const deletePayroll = async (req, res, next) => {
    try {
        await payrollService.deletePayroll(req.params.id);
        res.status(200).json({
            success: true,
            message: 'Payroll record deleted successfully',
            data: null
        });
    }
    catch (error) {
        next(error);
    }
};
exports.deletePayroll = deletePayroll;
