import mongoose, { Schema, Document } from 'mongoose';

export interface IPayroll extends Document {
  employeeId: string;
  employeeName: string;
  branch: string;
  basicSalary: number;
  tips: number;
  bonus: number;
  deductions: number;
  netSalary: number;
  month: string;
}

const PayrollSchema: Schema = new Schema({
  employeeId: { type: String, required: true },
  employeeName: { type: String, required: true },
  branch: { type: String, required: true },
  basicSalary: { type: Number, required: true },
  tips: { type: Number, default: 0 },
  bonus: { type: Number, default: 0 },
  deductions: { type: Number, default: 0 },
  netSalary: { type: Number, required: true },
  month: { type: String, required: true },
});

PayrollSchema.index({ employeeId: 1, month: 1 }, { unique: true });

export default mongoose.model<IPayroll>('Payroll', PayrollSchema);

