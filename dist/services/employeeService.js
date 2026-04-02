"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmployee = exports.updateEmployee = exports.createEmployee = exports.getEmployeeById = exports.getAllEmployees = void 0;
const Employee_1 = __importDefault(require("../models/Employee"));
const getAllEmployees = async () => {
    return Employee_1.default.find();
};
exports.getAllEmployees = getAllEmployees;
const getEmployeeById = async (id) => {
    return Employee_1.default.findById(id);
};
exports.getEmployeeById = getEmployeeById;
const createEmployee = async (data) => {
    const employee = new Employee_1.default(data);
    return employee.save();
};
exports.createEmployee = createEmployee;
const updateEmployee = async (id, data) => {
    return Employee_1.default.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};
exports.updateEmployee = updateEmployee;
const deleteEmployee = async (id) => {
    return Employee_1.default.findByIdAndDelete(id);
};
exports.deleteEmployee = deleteEmployee;
