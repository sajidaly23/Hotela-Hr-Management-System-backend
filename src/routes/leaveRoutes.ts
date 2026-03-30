import { Router } from 'express';
import * as leaveController from '../controllers/leaveController';
import { validate } from '../middlewares/validateRequest';
import { createLeaveSchema, updateLeaveSchema } from '../validators/leaveValidator';

const router = Router();

router.get('/', leaveController.getAllLeaves);
router.post('/', validate(createLeaveSchema), leaveController.createLeave);
router.patch('/:id', validate(updateLeaveSchema), leaveController.updateLeave);
router.delete('/:id', leaveController.deleteLeave);

export default router;

