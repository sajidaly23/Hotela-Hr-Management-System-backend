import Leave, { ILeave } from '../models/Leave';

export const getAllLeaves = async (filters: any = {}) => {
  const query: any = {};
  if (filters.branch && filters.branch !== 'all') query.branch = filters.branch;
  if (filters.employeeId && filters.employeeId !== 'all') query.employeeId = filters.employeeId;
  if (filters.status && filters.status !== 'all') query.status = filters.status;

  return await Leave.find(query).populate('employeeId').sort({ from: -1 });
};

export const createLeave = async (data: Partial<ILeave>) => {
  return await Leave.create({
    ...data,
    from: data.from ? new Date(data.from) : undefined,
    to: data.to ? new Date(data.to) : undefined,
  });
};

export const updateLeave = async (id: string, data: Partial<ILeave>) => {
  const updateData: any = { ...data };
  if (data.from) updateData.from = new Date(data.from);
  if (data.to) updateData.to = new Date(data.to);

  return await Leave.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
};

export const deleteLeave = async (id: string) => {
  return await Leave.findByIdAndDelete(id);
};

