import Order from "../models/OrderModel.js";
import OrderItem from '../models/OrderItemModel.js';
import Product from '../models/ProductModel.js'; 
import axios from 'axios';

export const initiatePayment = async (req, res) => {
  const {
    payment_method,
    shipping_name,
    shipping_phone,
    shipping_address,
    shipping_city,
    shipping_state,
    shipping_zip,
    items,
  } = req.body;

  try {
    // Create Order
    const order = new Order({
      user: req.user._id,
      payment_method,
      shipping_name,
      shipping_phone,
      shipping_address,
      shipping_city,
      shipping_state,
      shipping_zip,
    });
    await order.save();

    // Add Order Items
    let totalAmount = 0;
    for (const item of items) {
      const product = await Product.findById(item.product);
      const subtotal = product.price * item.quantity;
      totalAmount += subtotal;

      await OrderItem.create({
        order: order._id,
        product: product._id,
        quantity: item.quantity,
      });
    }

    if (payment_method === 'Khalti') {
      const payload = {
        return_url: `http://localhost:3000/api/orders/verify`,
        website_url: `http://localhost:5173`,
        amount: totalAmount * 100,
        purchase_order_id: `Order_${order._id}`,
        purchase_order_name: `Order ${order._id}`,
        customer_info: {
          name: req.user.username,
          email: req.user.email,
          phone: shipping_phone,
        },
      };

      const response = await axios.post(
        "https://a.khalti.com/api/v2/epayment/initiate/",
        payload,
        {
          headers: {
            Authorization: `Key ${process.env.KHALTI_SECRET_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data.pidx) {
        order.khalti_pidx = response.data.pidx;
        await order.save();
      }

      return res.status(200).json(response.data);
    } else {
      return res.status(200).json({
        message: 'Order created successfully with Cash on Delivery.',
        order_id: order._id,
      });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Order creation failed.' });
  }
};

export const verifyPayment = async (req, res) => {
  const pidx = req.query.pidx;
  if (!pidx) return res.redirect('http://localhost:5173/');

  try {
    const { data } = await axios.post(
      'https://a.khalti.com/api/v2/epayment/lookup/',
      { pidx },
      {
        headers: {
          Authorization: `Key ${process.env.KHALTI_SECRET_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (data.status === 'Completed') {
      const order = await Order.findOne({ khalti_pidx: pidx });
      if (order) {
        order.payment_status = 'Completed';
        await order.save();

        return res.redirect(`http://localhost:5173/payment-success?order_id=${order._id}`);
      }
    }

    return res.redirect('http://localhost:5173/');
  } catch (err) {
    console.error(err);
    return res.redirect('http://localhost:5173/');
  }
};

export const getUserOrderHistory = async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.user._id,
      payment_status: 'Completed',
    }).sort({ createdAt: -1 }).populate('user');

    const populatedOrders = await Promise.all(
      orders.map(async (order) => {
        const items = await OrderItem.find({ order: order._id }).populate('product');
        return { ...order.toObject(), items };
      })
    );

    res.status(200).json({ orders: populatedOrders });
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch history' });
  }
};

