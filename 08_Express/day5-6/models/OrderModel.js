import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  payment_status: {
    type: String,
    enum: ['Pending', 'Completed', 'Failed', 'Refunded'],
    default: 'Pending',
  },
  payment_method: {
    type: String,
    enum: ['Khalti', 'Cash on Delivery'],
    default: 'Cash on Delivery',
  },
  khalti_pidx: { type: String, unique: true, sparse: true },

  shipping_name: String,
  shipping_phone: String,
  shipping_address: String,
  shipping_city: String,
  shipping_state: String,
  shipping_zip: String,
}, { timestamps: true });

export default mongoose.model('order', OrderSchema);

