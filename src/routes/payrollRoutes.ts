import { Router } from 'express';
import * as payrollController from '../controllers/payrollController';
import { validate } from '../middlewares/validateRequest';
import { createPayrollSchema, updatePayrollSchema } from '../validators/payrollValidator';

const router = Router();

router.get('/', payrollController.getAllPayroll);
router.post('/', validate(createPayrollSchema), payrollController.createPayroll);
router.put('/:id', validate(updatePayrollSchema), payrollController.updatePayroll);
router.delete('/:id', payrollController.deletePayroll);

export default router;
