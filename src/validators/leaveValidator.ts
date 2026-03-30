import { z } from 'zod';

export const createLeaveSchema = z.object({
  body: z.object({
    employeeId: z.string().min(1, 'Employee ID is required'),
    employeeName: z.string().min(1, 'Employee Name is required'),
    branch: z.string().min(1, 'Branch is required'),
    type: z.string().min(1, 'Leave Type is required'),
    from: z.string().min(1, 'From date is required'),
    to: z.string().min(1, 'To date is required'),
    days: z.number().min(1),
    reason: z.string().min(1, 'Reason is required'),
    status: z.enum(['Pending', 'Approved', 'Rejected']).optional(),
  }),
});

export const updateLeaveSchema = z.object({
  body: z.object({
    status: z.enum(['Pending', 'Approved', 'Rejected']).optional(),
    adminNote: z.string().optional(),
  }),
});

