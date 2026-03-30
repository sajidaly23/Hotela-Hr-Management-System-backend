import Employee, { IEmployee } from '../models/Employee';

export const getAllEmployees = async (filters: any = {}) => {
  const query: any = {};
  if (filters.branch && filters.branch !== 'all') query.branch = filters.branch;
  if (filters.role && filters.role !== 'all') query.role = filters.role;
  if (filters.status && filters.status !== 'all') query.status = filters.status;
  
  return await Employee.find(query).sort({ created_at: -1 });
};

export const getEmployeeById = async (id: string) => {
  return await Employee.findById(id);
};

export const createEmployee = async (data: Partial<IEmployee>) => {
  return await Employee.create(data);
};

export const updateEmployee = async (id: string, data: Partial<IEmployee>) => {
  return await Employee.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

export const deleteEmployee = async (id: string) => {
  return await Employee.findByIdAndDelete(id);
};
