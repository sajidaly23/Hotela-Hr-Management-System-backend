import { z } from 'zod';

export const createPayrollSchema = z.object({
  body: z.object({
    employee_id: z.string().min(1, 'Employee ID is required'),
    basic_salary: z.number().nonnegative('Basic salary must be non-negative'),
    bonus: z.number().nonnegative().default(0),
    deductions: z.number().nonnegative().default(0),
    month: z.number().int().min(1).max(12),
    year: z.number().int().min(2000),
  }),
});

export const updatePayrollSchema = z.object({
  body: z.object({
    basic_salary: z.number().nonnegative().optional(),
    bonus: z.number().nonnegative().optional(),
    deductions: z.number().nonnegative().optional(),
    month: z.number().int().min(1).max(12).optional(),
    year: z.number().int().min(2000).optional(),
  }),
});
