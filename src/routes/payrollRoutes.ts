import { Router } from 'express';
import multer from 'multer';
import os from 'os';
import * as payrollController from '../controllers/payrollController';
import { validate } from '../middlewares/validateRequest';
import { createPayrollSchema, updatePayrollSchema } from '../validators/payrollValidator';

const router = Router();
const upload = multer({ dest: os.tmpdir() });

router.get('/', payrollController.getAllPayroll);
router.post('/', validate(createPayrollSchema), payrollController.createPayroll);
router.patch('/:id', validate(updatePayrollSchema), payrollController.updatePayroll);
router.delete('/:id', payrollController.deletePayroll);
router.post('/import', upload.single('file'), payrollController.importPayroll);

export default router;

