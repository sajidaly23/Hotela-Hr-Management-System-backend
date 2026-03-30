import { Request, Response, NextFunction } from 'express';
import * as attendanceService from '../services/attendanceService';

export const getAllAttendance = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const filters = {
      dateFrom: req.query.dateFrom as string,
      dateTo: req.query.dateTo as string,
      date: req.query.date as string,
      employeeId: req.query.employeeId as string,
      branch: req.query.branch as string,
      status: req.query.status as string,
    };
    
    const records = await attendanceService.getAllAttendance(filters);
    res.status(200).json({
      success: true,
      message: 'Attendance records retrieved',
      data: records
    });
  } catch (error) {
    next(error);
  }
};

export const createAttendance = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const record = await attendanceService.createAttendance(req.body);
    res.status(201).json({
      success: true,
      message: 'Attendance recorded successfully',
      data: record
    });
  } catch (error) {
    next(error);
  }
};

export const updateAttendance = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const record = await attendanceService.updateAttendance(req.params.id, req.body);
    if (!record) {
      return res.status(404).json({
        success: false,
        message: 'Attendance record not found',
        data: null
      });
    }
    res.status(200).json({
      success: true,
      message: 'Attendance record updated successfully',
      data: record
    });
  } catch (error) {
    next(error);
  }
};

export const deleteAttendance = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const record = await attendanceService.deleteAttendance(req.params.id);
    if (!record) {
      return res.status(404).json({
        success: false,
        message: 'Attendance record not found',
        data: null
      });
    }
    res.status(200).json({
      success: true,
      message: 'Attendance record deleted successfully',
      data: null
    });
  } catch (error) {
    next(error);
  }
};

