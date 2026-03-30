import mongoose, { Schema, Document } from 'mongoose';

export interface ILeave extends Document {
  employeeId: mongoose.Types.ObjectId;
  employeeName: string;
  branch: string;
  type: string;
  from: Date;
  to: Date;
  days: number;
  reason: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  adminNote?: string;
}

const LeaveSchema: Schema = new Schema({
  employeeId: { type: Schema.Types.ObjectId, ref: 'Employee', required: true },
  employeeName: { type: String, required: true },
  branch: { type: String, required: true },
  type: { type: String, required: true },
  from: { type: Date, required: true },
  to: { type: Date, required: true },
  days: { type: Number, required: true },
  reason: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['Pending', 'Approved', 'Rejected'], 
    default: 'Pending' 
  },
  adminNote: { type: String },
});

export default mongoose.model<ILeave>('Leave', LeaveSchema);

