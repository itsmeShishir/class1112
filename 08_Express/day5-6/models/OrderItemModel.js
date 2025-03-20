import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
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
    qty: {
        type: Number,
        required: true,
    },
    full_name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    address_one:{
        type: String,
        required: true,
    }
}, {timestamps: true});

const OrderItemSchema = mongoose.model("product", orderItemSchema);

export default OrderItemSchema;