"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkOutSchema = exports.checkInSchema = void 0;
const zod_1 = require("zod");
exports.checkInSchema = zod_1.z.object({
    body: zod_1.z.object({
        employee_id: zod_1.z.string().min(1, 'Employee ID is required'),
        date: zod_1.z.string().datetime().or(zod_1.z.date()),
        check_in: zod_1.z.string().datetime().or(zod_1.z.date()).optional(),
        status: zod_1.z.enum(['PRESENT', 'HALF_DAY', 'LATE']).default('PRESENT'),
    }),
});
exports.checkOutSchema = zod_1.z.object({
    body: zod_1.z.object({
        employee_id: zod_1.z.string().min(1, 'Employee ID is required'),
        date: zod_1.z.string().datetime().or(zod_1.z.date()),
        check_out: zod_1.z.string().datetime().or(zod_1.z.date()),
    }),
});
