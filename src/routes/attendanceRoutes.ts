import { Router } from 'express';
import * as attendanceController from '../controllers/attendanceController';
import { validate } from '../middlewares/validateRequest';
import { attendanceSchema, updateAttendanceSchema } from '../validators/attendanceValidator';

const router = Router();

router.get('/', attendanceController.getAllAttendance);
router.post('/', validate(attendanceSchema), attendanceController.createAttendance);
router.patch('/:id', validate(updateAttendanceSchema), attendanceController.updateAttendance);
router.delete('/:id', attendanceController.deleteAttendance);

export default router;
