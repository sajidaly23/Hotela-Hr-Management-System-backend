import mongoose, { Schema, Document } from 'mongoose';

export interface IEmployee extends Document {
  name: string;
  email: string;
  phone: string;
  role: string;
  branch: string;
  salary: number;
  status: 'Active' | 'On Leave' | 'Inactive';
  joinDate: Date;
  address: string;
  note?: string;
  created_at: Date;
  updated_at: Date;
}

const EmployeeSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    role: { type: String, required: true },
    branch: { type: String, required: true },
    salary: { type: Number, required: true },
    status: { 
      type: String, 
      enum: ['Active', 'On Leave', 'Inactive'], 
      default: 'Active' 
    },
    joinDate: { type: Date, required: true },
    address: { type: String, required: true },
    note: { type: String },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

export default mongoose.model<IEmployee>('Employee', EmployeeSchema);

