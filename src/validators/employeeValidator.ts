import { z } from 'zod';

export const createEmployeeSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
    role: z.string().min(1, 'Role is required'),
    join_date: z.string().datetime().or(z.date()),
    status: z.enum(['ACTIVE', 'INACTIVE']).optional(),
  }),
});

export const updateEmployeeSchema = z.object({
  body: z.object({
    name: z.string().min(1).optional(),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    role: z.string().min(1).optional(),
    join_date: z.string().datetime().or(z.date()).optional(),
    status: z.enum(['ACTIVE', 'INACTIVE']).optional(),
  }),
});
