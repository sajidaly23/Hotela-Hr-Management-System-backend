import { Request, Response, NextFunction } from 'express';
import * as attendanceService from '../services/attendanceService';

export const getAllAttendance = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const records = await attendanceService.getAllAttendance();
    res.status(200).json({
      success: true,
      message: 'Attendance records retrieved',
      data: records
    });
  } catch (error) {
    next(error);
  }
};

export const checkIn = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const record = await attendanceService.checkIn(req.body);
    res.status(201).json({
      success: true,
      message: 'Checked in successfully',
      data: record
    });
  } catch (error) {
    next(error);
  }
};

export const checkOut = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const record = await attendanceService.checkOut(req.body);
    res.status(200).json({
      success: true,
      message: 'Checked out successfully',
      data: record
    });
  } catch (error: any) {
    if (error.message.includes('not found')) {
      res.status(404).json({ success: false, message: 'Not Found', data: null, details: error.message });
      return;
    }
    next(error);
  }
};
