"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePayroll = exports.updatePayroll = exports.createPayroll = exports.getAllPayroll = void 0;
const Payroll_1 = __importDefault(require("../models/Payroll"));
const getAllPayroll = async () => {
    return Payroll_1.default.find().populate('employee_id');
};
exports.getAllPayroll = getAllPayroll;
const createPayroll = async (data) => {
    const total_salary = data.basic_salary + (data.bonus || 0) - (data.deductions || 0);
    const payroll = new Payroll_1.default({
        ...data,
        total_salary,
    });
    return payroll.save();
};
exports.createPayroll = createPayroll;
const updatePayroll = async (id, data) => {
    const existing = await Payroll_1.default.findById(id);
    if (!existing)
        throw new Error('Payroll record not found');
    const basic_salary = data.basic_salary ?? existing.basic_salary;
    const bonus = data.bonus ?? existing.bonus;
    const deductions = data.deductions ?? existing.deductions;
    const total_salary = basic_salary + bonus - deductions;
    return Payroll_1.default.findByIdAndUpdate(id, { ...data, total_salary }, { new: true, runValidators: true });
};
exports.updatePayroll = updatePayroll;
const deletePayroll = async (id) => {
    return Payroll_1.default.findByIdAndDelete(id);
};
exports.deletePayroll = deletePayroll;
