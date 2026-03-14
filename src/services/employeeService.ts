import Employee from '../models/Employee';

export const getAllEmployees = async () => {
  return Employee.find();
};

export const getEmployeeById = async (id: string) => {
  return Employee.findById(id);
};

export const createEmployee = async (data: any) => {
  const employee = new Employee(data);
  return employee.save();
};

export const updateEmployee = async (id: string, data: any) => {
  return Employee.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

export const deleteEmployee = async (id: string) => {
  return Employee.findByIdAndDelete(id);
};
