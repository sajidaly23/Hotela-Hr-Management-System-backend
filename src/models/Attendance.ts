import mongoose, { Schema, Document } from 'mongoose';

export interface IAttendance extends Document {
  employee_id: mongoose.Types.ObjectId;
  date: Date;
  check_in?: Date;
  check_out?: Date;
  status: string;
}

const AttendanceSchema: Schema = new Schema({
  employee_id: { type: Schema.Types.ObjectId, ref: 'Employee', required: true },
  date: { type: Date, required: true },
  check_in: { type: Date },
  check_out: { type: Date },
  status: { type: String, enum: ['PRESENT', 'ABSENT', 'HALF_DAY', 'LATE'], required: true },
});

AttendanceSchema.index({ employee_id: 1, date: 1 }, { unique: true });

export default mongoose.model<IAttendance>('Attendance', AttendanceSchema);
