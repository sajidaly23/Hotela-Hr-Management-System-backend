import mongoose, { Schema, Document } from 'mongoose';

export interface IAttendance extends Document {
  employeeId: mongoose.Types.ObjectId;
  employeeName: string;
  branch: string;
  date: Date;
  checkIn: string;
  checkOut: string;
  totalHours: string;
  status: 'Present' | 'Late' | 'Absent' | 'On Leave';
  notes?: string;
  breakDuration?: string;
  adminNotes?: string;
}

const AttendanceSchema: Schema = new Schema({
  employeeId: { type: Schema.Types.ObjectId, ref: 'Employee', required: true },
  employeeName: { type: String, required: true },
  branch: { type: String, required: true },
  date: { type: Date, required: true },
  checkIn: { type: String, default: '-' },
  checkOut: { type: String, default: '-' },
  totalHours: { type: String, default: '0h 0m' },
  status: { 
    type: String, 
    enum: ['Present', 'Late', 'Absent', 'On Leave'], 
    required: true 
  },
  notes: { type: String },
  breakDuration: { type: String, default: '0m' },
  adminNotes: { type: String },
});

AttendanceSchema.index({ employeeId: 1, date: 1 }, { unique: true });

export default mongoose.model<IAttendance>('Attendance', AttendanceSchema);

