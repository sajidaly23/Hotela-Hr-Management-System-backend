import { Request, Response, NextFunction } from 'express';
import * as payrollService from '../services/payrollService';

export const getAllPayroll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const filters = {
      branch: req.query.branch as string,
      month: req.query.month as string,
    };
    
    const records = await payrollService.getAllPayroll(filters);
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
  } catch (error) {
    next(error);
  }
};

export const updatePayroll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const record = await payrollService.updatePayroll(req.params.id, req.body);
    if (!record) {
      return res.status(404).json({
        success: false,
        message: 'Payroll record not found',
        data: null
      });
    }
    res.status(200).json({
      success: true,
      message: 'Payroll record updated successfully',
      data: record
    });
  } catch (error) {
    next(error);
  }
};

export const deletePayroll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const record = await payrollService.deletePayroll(req.params.id);
    if (!record) {
      return res.status(404).json({
        success: false,
        message: 'Payroll record not found',
        data: null
      });
    }
    res.status(200).json({
      success: true,
      message: 'Payroll record deleted successfully',
      data: null
    });
  } catch (error) {
    next(error);
  }
};

export const importPayroll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'Please upload a CSV file',
        data: null
      });
    }

    const records = await payrollService.importPayrollFromCSV(req.file.path);
    res.status(200).json({
      success: true,
      message: `${records.length} payroll records imported successfully`,
      data: records
    });
  } catch (error) {
    next(error);
  }
};

