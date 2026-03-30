import { z } from 'zod';

export const attendanceSchema = z.object({
  body: z.object({
    employeeId: z.string().min(1, 'Employee ID is required'),
    employeeName: z.string().min(1, 'Employee Name is required'),
    branch: z.string().min(1, 'Branch is required'),
    date: z.string().min(1, 'Date is required'),
    checkIn: z.string().optional(),
    checkOut: z.string().optional(),
    totalHours: z.string().optional(),
    status: z.enum(['Present', 'Late', 'Absent', 'On Leave']),
    notes: z.string().optional(),
    breakDuration: z.string().optional(),
    adminNotes: z.string().optional(),
  }),
});

export const updateAttendanceSchema = z.object({
  body: z.object({
    checkIn: z.string().optional(),
    checkOut: z.string().optional(),
    status: z.enum(['Present', 'Late', 'Absent', 'On Leave']).optional(),
    notes: z.string().optional(),
    adminNotes: z.string().optional(),
  }),
});

