"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLeave = exports.updateLeave = exports.createLeave = exports.getAllLeaves = void 0;
const Leave_1 = __importDefault(require("../models/Leave"));
const getAllLeaves = async () => {
    return Leave_1.default.find().populate('employee_id');
};
exports.getAllLeaves = getAllLeaves;
const createLeave = async (data) => {
    const leave = new Leave_1.default({
        ...data,
        start_date: new Date(data.start_date),
        end_date: new Date(data.end_date),
    });
    return leave.save();
};
exports.createLeave = createLeave;
const updateLeave = async (id, data) => {
    const updateData = { ...data };
    if (data.start_date)
        updateData.start_date = new Date(data.start_date);
    if (data.end_date)
        updateData.end_date = new Date(data.end_date);
    return Leave_1.default.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
};
exports.updateLeave = updateLeave;
const deleteLeave = async (id) => {
    return Leave_1.default.findByIdAndDelete(id);
};
exports.deleteLeave = deleteLeave;
