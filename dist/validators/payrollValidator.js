"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePayrollSchema = exports.createPayrollSchema = void 0;
const zod_1 = require("zod");
exports.createPayrollSchema = zod_1.z.object({
    body: zod_1.z.object({
        employee_id: zod_1.z.string().min(1, 'Employee ID is required'),
        basic_salary: zod_1.z.number().nonnegative('Basic salary must be non-negative'),
        bonus: zod_1.z.number().nonnegative().default(0),
        deductions: zod_1.z.number().nonnegative().default(0),
        month: zod_1.z.number().int().min(1).max(12),
        year: zod_1.z.number().int().min(2000),
    }),
});
exports.updatePayrollSchema = zod_1.z.object({
    body: zod_1.z.object({
        basic_salary: zod_1.z.number().nonnegative().optional(),
        bonus: zod_1.z.number().nonnegative().optional(),
        deductions: zod_1.z.number().nonnegative().optional(),
        month: zod_1.z.number().int().min(1).max(12).optional(),
        year: zod_1.z.number().int().min(2000).optional(),
    }),
});
