import Attendance from '../models/Attendance';

export const getAllAttendance = async () => {
  return Attendance.find().populate('employee_id');
};

export const checkIn = async (data: any) => {
  const attendance = new Attendance({
    employee_id: data.employee_id,
    date: new Date(data.date),
    check_in: data.check_in ? new Date(data.check_in) : new Date(),
    status: data.status,
  });
  return attendance.save();
};

export const checkOut = async (data: any) => {
  const attendance = await Attendance.findOne({
    employee_id: data.employee_id,
    date: new Date(data.date),
  });

  if (!attendance) {
    throw new Error('Attendance record not found for today. Please check in first.');
  }

  attendance.check_out = new Date(data.check_out);
  return attendance.save();
};
