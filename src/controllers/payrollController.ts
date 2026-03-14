import { Request, Response, NextFunction } from 'express';
import * as payrollService from '../services/payrollService';

export const getAllPayroll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const records = await payrollService.getAllPayroll();
    res.status(200).json({
      success: true,
      message: 'Payroll records retrieved',
      data: records
    });
  } catch (error) {
    next(error);
  }
};

export const createPayroll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const record = await payrollService.createPayroll(req.body);
    res.status(201).json({
      success: true,
      message: 'Payroll record created successfully',
      data: record
    });
  } catch (error: any) {
      res.status(409).json({ success: false, message: 'Conflict Error', data: null, details: 'Payroll already exists for this employee for the given month and year.' });
    next(error);
  }
};

export const updatePayroll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const record = await payrollService.updatePayroll(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: 'Payroll record updated successfully',
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

export const deletePayroll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await payrollService.deletePayroll(req.params.id);
    res.status(200).json({
      success: true,
      message: 'Payroll record deleted successfully',
      data: null
    });
  } catch (error) {
    next(error);
  }
};
