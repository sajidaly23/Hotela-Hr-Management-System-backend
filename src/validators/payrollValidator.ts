import { z } from 'zod';

export const createPayrollSchema = z.object({
  body: z.object({
    employeeId: z.string().min(1, 'Employee ID is required'),
    employeeName: z.string().min(1, 'Employee Name is required'),
    branch: z.string().min(1, 'Branch is required'),
    basicSalary: z.coerce.number().nonnegative(),
    tips: z.coerce.number().nonnegative().default(0),
    bonus: z.coerce.number().nonnegative().default(0),
    deductions: z.coerce.number().nonnegative().default(0),
    netSalary: z.coerce.number().nonnegative(),
    month: z.string().min(1, 'Month is required'),
  }),
});

export const updatePayrollSchema = z.object({
  body: z.object({
    basicSalary: z.coerce.number().nonnegative().optional(),
    tips: z.coerce.number().nonnegative().optional(),
    bonus: z.coerce.number().nonnegative().optional(),
    deductions: z.coerce.number().nonnegative().optional(),
    netSalary: z.coerce.number().nonnegative().optional(),
    month: z.string().optional(),
  }),
});

