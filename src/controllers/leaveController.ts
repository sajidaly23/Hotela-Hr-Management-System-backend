import { Request, Response, NextFunction } from 'express';
import * as leaveService from '../services/leaveService';

export const getAllLeaves = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const filters = {
      branch: req.query.branch as string,
      employeeId: req.query.employeeId as string,
      status: req.query.status as string,
    };
    
    const leaves = await leaveService.getAllLeaves(filters);
    res.status(200).json({
      success: true,
      message: 'Leave records retrieved',
      data: leaves
    });
  } catch (error) {
    next(error);
  }
};

export const createLeave = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const leave = await leaveService.createLeave(req.body);
    res.status(201).json({
      success: true,
      message: 'Leave request created successfully',
      data: leave
    });
  } catch (error) {
    next(error);
  }
};

export const updateLeave = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const leave = await leaveService.updateLeave(req.params.id, req.body);
    if (!leave) {
      return res.status(404).json({
        success: false,
        message: 'Leave request not found',
        data: null
      });
    }
    res.status(200).json({
      success: true,
      message: 'Leave request updated successfully',
      data: leave
    });
  } catch (error) {
    next(error);
  }
};

export const deleteLeave = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const leave = await leaveService.deleteLeave(req.params.id);
    if (!leave) {
      return res.status(404).json({
        success: false,
        message: 'Leave request not found',
        data: null
      });
    }
    res.status(200).json({
      success: true,
      message: 'Leave request deleted successfully',
      data: null
    });
  } catch (error) {
    next(error);
  }
};

