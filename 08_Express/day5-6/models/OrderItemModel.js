import mongoose from 'mongoose';

const OrderItemSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'order' },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'product' },
  quantity: { type: Number, default: 1 },
});

export default mongoose.model('orderItem', OrderItemSchema);

