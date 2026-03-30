import { z } from 'zod';

export const createEmployeeSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(1, 'Phone is required'),
    role: z.string().min(1, 'Role is required'),
    branch: z.string().min(1, 'Branch is required'),
    salary: z.coerce.number().min(0, 'Salary must be a positive number'),
    status: z.enum(['Active', 'On Leave', 'Inactive']).optional(),
    joinDate: z.string().min(1, 'Join Date is required'),
    address: z.string().min(1, 'Address is required'),
    note: z.string().optional(),
  }),
});

export const updateEmployeeSchema = z.object({
  body: z.object({
    name: z.string().min(1).optional(),
    email: z.string().email().optional(),
    phone: z.string().min(1).optional(),
    role: z.string().min(1).optional(),
    branch: z.string().min(1).optional(),
    salary: z.coerce.number().min(0).optional(),
    status: z.enum(['Active', 'On Leave', 'Inactive']).optional(),
    joinDate: z.string().optional(),
    address: z.string().optional(),
    note: z.string().optional(),
  }),
});

