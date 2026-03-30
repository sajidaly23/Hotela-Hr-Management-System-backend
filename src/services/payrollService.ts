import Payroll, { IPayroll } from '../models/Payroll';
import fs from 'fs';

export const getAllPayroll = async (filters: any = {}) => {
  const query: any = {};
  if (filters.branch && filters.branch !== 'all') query.branch = filters.branch;
  if (filters.month && filters.month !== 'all') query.month = filters.month;

  return await Payroll.find(query).sort({ month: -1 });
};

export const createPayroll = async (data: Partial<IPayroll>) => {
  const netSalary = (data.basicSalary || 0) + (data.tips || 0) + (data.bonus || 0) - (data.deductions || 0);
  return await Payroll.create({ ...data, netSalary });
};

export const updatePayroll = async (id: string, data: Partial<IPayroll>) => {
  const existing = await Payroll.findById(id);
  if (!existing) throw new Error('Payroll record not found');

  const basicSalary = data.basicSalary ?? existing.basicSalary;
  const tips = data.tips ?? existing.tips;
  const bonus = data.bonus ?? existing.bonus;
  const deductions = data.deductions ?? existing.deductions;
  
  const netSalary = basicSalary + tips + bonus - deductions;

  return await Payroll.findByIdAndUpdate(
    id,
    { ...data, netSalary },
    { new: true, runValidators: true }
  );
};

export const deletePayroll = async (id: string) => {
  return await Payroll.findByIdAndDelete(id);
};

export const importPayrollFromCSV = async (filePath: string) => {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const lines = fileContent.split(/\r?\n/).filter(line => line.trim() !== '');
  
  if (lines.length < 2) throw new Error('CSV file is empty or missing headers');

  const headers = lines[0].split(',').map(h => h.trim());
  const records = lines.slice(1).map(line => {
    const values = line.split(',').map(v => v.trim());
    const row: any = {};
    headers.forEach((header, index) => {
      row[header] = values[index];
    });

    const parseMoney = (val: string) => {
      const normalized = Number(val.replace(/[^\d.-]/g, ''));
      return isNaN(normalized) ? 0 : normalized;
    };

    return {
      employeeId: row['Employee ID'],
      employeeName: row['Employee Name'],
      branch: row['Branch'],
      basicSalary: parseMoney(row['Basic Salary']),
      tips: parseMoney(row['Tips']),
      bonus: parseMoney(row['Bonus']),
      deductions: parseMoney(row['Deductions']),
      netSalary: parseMoney(row['Net Salary']),
      month: row['Month'],
    };
  });

  const results = [];
  for (const record of records) {
    try {
      // Use upsert to avoid duplicates by employeeId and month
      const updated = await Payroll.findOneAndUpdate(
        { employeeId: record.employeeId, month: record.month },
        record,
        { upsert: true, new: true }
      );
      results.push(updated);
    } catch (error) {
      console.error(`Error importing record for ${record.employeeName}:`, error);
    }
  }

  // Delete temp file
  fs.unlinkSync(filePath);
  
  return results;
};

