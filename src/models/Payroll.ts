import mongoose, { Schema, Document } from 'mongoose';

export interface IPayroll extends Document {
  employee_id: mongoose.Types.ObjectId;
  basic_salary: number;
  bonus: number;
  deductions: number;
  total_salary: number;
  month: number;
  year: number;
}

const PayrollSchema: Schema = new Schema({
  employee_id: { type: Schema.Types.ObjectId, ref: 'Employee', required: true },
  basic_salary: { type: Number, required: true },
  bonus: { type: Number, default: 0 },
  deductions: { type: Number, default: 0 },
  total_salary: { type: Number, required: true },
  month: { type: Number, required: true },
  year: { type: Number, required: true },
});

PayrollSchema.index({ employee_id: 1, month: 1, year: 1 }, { unique: true });

export default mongoose.model<IPayroll>('Payroll', PayrollSchema);
