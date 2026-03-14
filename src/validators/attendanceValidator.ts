import { z } from 'zod';

export const checkInSchema = z.object({
  body: z.object({
    employee_id: z.string().min(1, 'Employee ID is required'),
    date: z.string().datetime().or(z.date()),
    check_in: z.string().datetime().or(z.date()).optional(),
    status: z.enum(['PRESENT', 'HALF_DAY', 'LATE']).default('PRESENT'),
  }),
});

export const checkOutSchema = z.object({
  body: z.object({
    employee_id: z.string().min(1, 'Employee ID is required'),
    date: z.string().datetime().or(z.date()),
    check_out: z.string().datetime().or(z.date()),
  }),
});
