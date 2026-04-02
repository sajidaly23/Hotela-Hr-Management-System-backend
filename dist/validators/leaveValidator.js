"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLeaveSchema = exports.createLeaveSchema = void 0;
const zod_1 = require("zod");
exports.createLeaveSchema = zod_1.z.object({
    body: zod_1.z.object({
        employee_id: zod_1.z.string().min(1, 'Employee ID is required'),
        start_date: zod_1.z.string().datetime().or(zod_1.z.date()),
        end_date: zod_1.z.string().datetime().or(zod_1.z.date()),
        reason: zod_1.z.string().min(1, 'Reason is required'),
        status: zod_1.z.enum(['PENDING', 'APPROVED', 'REJECTED']).optional(),
    }),
});
exports.updateLeaveSchema = zod_1.z.object({
    body: zod_1.z.object({
        start_date: zod_1.z.string().datetime().or(zod_1.z.date()).optional(),
        end_date: zod_1.z.string().datetime().or(zod_1.z.date()).optional(),
        reason: zod_1.z.string().min(1).optional(),
        status: zod_1.z.enum(['PENDING', 'APPROVED', 'REJECTED']).optional(),
    }),
});
