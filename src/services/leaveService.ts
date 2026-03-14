import Leave from '../models/Leave';

export const getAllLeaves = async () => {
  return Leave.find().populate('employee_id');
};

export const createLeave = async (data: any) => {
  const leave = new Leave({
    ...data,
    start_date: new Date(data.start_date),
    end_date: new Date(data.end_date),
  });
  return leave.save();
};

export const updateLeave = async (id: string, data: any) => {
  const updateData: any = { ...data };
  if (data.start_date) updateData.start_date = new Date(data.start_date);
  if (data.end_date) updateData.end_date = new Date(data.end_date);

  return Leave.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
};

export const deleteLeave = async (id: string) => {
  return Leave.findByIdAndDelete(id);
};
