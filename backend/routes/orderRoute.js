import express from 'express'
import authMiddleware from '../middleware/auth.js';
import { userOrder, listOrder } from '../controllers/orderController.js';


const orderRouter = express.Router();

orderRouter.post("/userorder", authMiddleware, userOrder)
orderRouter.get('/list',listOrder)

export default orderRouter;