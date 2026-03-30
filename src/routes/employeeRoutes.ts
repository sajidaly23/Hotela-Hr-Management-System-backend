import { Router } from 'express';
import * as employeeController from '../controllers/employeeController';
import { validate } from '../middlewares/validateRequest';
import { createEmployeeSchema, updateEmployeeSchema } from '../validators/employeeValidator';

const router = Router();

router.get('/', employeeController.getAllEmployees);
router.get('/:id', employeeController.getEmployeeById);
router.post('/', validate(createEmployeeSchema), employeeController.createEmployee);
router.patch('/:id', validate(updateEmployeeSchema), employeeController.updateEmployee);
router.delete('/:id', employeeController.deleteEmployee);

export default router;

