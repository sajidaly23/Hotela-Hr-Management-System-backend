import Attendance, { IAttendance } from '../models/Attendance';

export const getAllAttendance = async (filters: any = {}) => {
  const query: any = {};
  
  if (filters.dateFrom && filters.dateTo) {
    query.date = { 
      $gte: new Date(filters.dateFrom), 
      $lte: new Date(filters.dateTo) 
    };
  } else if (filters.date) {
    query.date = new Date(filters.date);
  }

  if (filters.employeeId && filters.employeeId !== 'all') query.employeeId = filters.employeeId;
  if (filters.branch && filters.branch !== 'all') query.branch = filters.branch;
  if (filters.status && filters.status !== 'all') query.status = filters.status;

  return await Attendance.find(query).populate('employeeId').sort({ date: -1 });
};

export const createAttendance = async (data: Partial<IAttendance>) => {
  return await Attendance.create(data);
};

export const updateAttendance = async (id: string, data: Partial<IAttendance>) => {
  return await Attendance.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

export const deleteAttendance = async (id: string) => {
  return await Attendance.findByIdAndDelete(id);
};

