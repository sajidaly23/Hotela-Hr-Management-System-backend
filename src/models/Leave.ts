import mongoose, { Schema, Document } from 'mongoose';

export interface ILeave extends Document {
  employee_id: mongoose.Types.ObjectId;
  start_date: Date;
  end_date: Date;
  reason: string;
  status: string;
}

const LeaveSchema: Schema = new Schema({
  employee_id: { type: Schema.Types.ObjectId, ref: 'Employee', required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  reason: { type: String, required: true },
  status: { type: String, enum: ['PENDING', 'APPROVED', 'REJECTED'], default: 'PENDING' },
});

export default mongoose.model<ILeave>('Leave', LeaveSchema);
