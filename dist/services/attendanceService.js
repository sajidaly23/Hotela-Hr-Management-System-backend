"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkOut = exports.checkIn = exports.getAllAttendance = void 0;
const Attendance_1 = __importDefault(require("../models/Attendance"));
const getAllAttendance = async () => {
    return Attendance_1.default.find().populate('employee_id');
};
exports.getAllAttendance = getAllAttendance;
const checkIn = async (data) => {
    const attendance = new Attendance_1.default({
        employee_id: data.employee_id,
        date: new Date(data.date),
        check_in: data.check_in ? new Date(data.check_in) : new Date(),
        status: data.status,
    });
    return attendance.save();
};
exports.checkIn = checkIn;
const checkOut = async (data) => {
    const attendance = await Attendance_1.default.findOne({
        employee_id: data.employee_id,
        date: new Date(data.date),
    });
    if (!attendance) {
        throw new Error('Attendance record not found for today. Please check in first.');
    }
    attendance.check_out = new Date(data.check_out);
    return attendance.save();
};
exports.checkOut = checkOut;
