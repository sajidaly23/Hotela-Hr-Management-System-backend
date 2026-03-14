import { Router } from 'express';
import * as attendanceController from '../controllers/attendanceController';
import { validate } from '../middlewares/validateRequest';
import { checkInSchema, checkOutSchema } from '../validators/attendanceValidator';

const router = Router();

router.get('/', attendanceController.getAllAttendance);
router.post('/checkin', validate(checkInSchema), attendanceController.checkIn);
router.post('/checkout', validate(checkOutSchema), attendanceController.checkOut);

export default router;
