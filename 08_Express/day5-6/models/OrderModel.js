import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
        required: true,
    },
    pxid:{
        type: String,
        required: true,
    },
    amount:{
        type: Number,
        required: true,
    }
}, {timestamps: true});

const OrderModel = mongoose.model("product", orderSchema);

export default OrderModel;