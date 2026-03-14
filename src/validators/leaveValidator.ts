import { z } from 'zod';

export const createLeaveSchema = z.object({
  body: z.object({
    employee_id: z.string().min(1, 'Employee ID is required'),
    start_date: z.string().datetime().or(z.date()),
    end_date: z.string().datetime().or(z.date()),
    reason: z.string().min(1, 'Reason is required'),
    status: z.enum(['PENDING', 'APPROVED', 'REJECTED']).optional(),
  }),
});

export const updateLeaveSchema = z.object({
  body: z.object({
    start_date: z.string().datetime().or(z.date()).optional(),
    end_date: z.string().datetime().or(z.date()).optional(),
    reason: z.string().min(1).optional(),
    status: z.enum(['PENDING', 'APPROVED', 'REJECTED']).optional(),
  }),
});
