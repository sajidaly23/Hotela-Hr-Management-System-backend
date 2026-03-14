import Payroll from '../models/Payroll';

export const getAllPayroll = async () => {
  return Payroll.find().populate('employee_id');
};

export const createPayroll = async (data: any) => {
  const total_salary = data.basic_salary + (data.bonus || 0) - (data.deductions || 0);

  const payroll = new Payroll({
    ...data,
    total_salary,
  });
  return payroll.save();
};

export const updatePayroll = async (id: string, data: any) => {
  const existing = await Payroll.findById(id);
  if (!existing) throw new Error('Payroll record not found');

  const basic_salary = data.basic_salary ?? existing.basic_salary;
  const bonus = data.bonus ?? existing.bonus;
  const deductions = data.deductions ?? existing.deductions;
  
  const total_salary = basic_salary + bonus - deductions;

  return Payroll.findByIdAndUpdate(
    id,
    { ...data, total_salary },
    { new: true, runValidators: true }
  );
};

export const deletePayroll = async (id: string) => {
  return Payroll.findByIdAndDelete(id);
};
