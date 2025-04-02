
// routes/orders.js
import express from 'express';
import {
  initiatePayment,
  verifyPayment,
  getUserOrderHistory,
} from '../controller/OrderController.js';
import { userMiddleware } from '../middleware/userMiddleware.js';
const router = express.Router();

router.post('/create', userMiddleware, initiatePayment);
router.get('/verify', verifyPayment);
router.get('/history', userMiddleware, getUserOrderHistory);

export default router;

