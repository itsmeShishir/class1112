
// routes/orders.js
import express from 'express';
import {
  initiatePayment,
  verifyPayment,
  getUserOrderHistory,
} from '../controllers/orderController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/create', authMiddleware, initiatePayment);
router.get('/verify', verifyPayment);
router.get('/history', authMiddleware, getUserOrderHistory);

export default router;

