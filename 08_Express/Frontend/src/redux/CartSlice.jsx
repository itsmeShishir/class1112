import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify'; 

const calculateTotals = (items) => {
    const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
    const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);
    return { totalQuantity, totalAmount };
};

const initialState = {
    items: [],
    totalAmount: 0,
    totalQuantity: 0,
};

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addtocart(state, action) {
            const { _id, category, title, stock, price, images } = action.payload;
            const id = _id; 
            const category_name = category?.name || 'Unknown'; // Handle potential missing category name

            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                if (existingItem.quantity < stock) {
                    existingItem.quantity++;
                    toast.info(`Increased ${title} quantity`);
                } else {
                    toast.warn(`Cannot add more, only ${stock} of ${title} in stock`);
                    return; 
                }
            } else {
                 if (stock > 0) {
                    state.items.push({
                        id,
                        category_name,
                        title,
                        stock,
                        price,
                        images: Array.isArray(images) && images.length > 0 ? images[0] : '/placeholder.png',
                        quantity: 1,
                    });
                    toast.success(`${title} added to cart`);
                 } else {
                    toast.error(`${title} is out of stock`);
                    return;
                 }
            }
            const { totalQuantity, totalAmount } = calculateTotals(state.items);
            state.totalQuantity = totalQuantity;
            state.totalAmount = totalAmount;
        },
        removefromcart(state, action) {
            const id = action.payload;
            const existingItemIndex = state.items.findIndex(item => item.id === id);

            if (existingItemIndex !== -1) {
                 const itemToRemove = state.items[existingItemIndex];
                 toast.error(`${itemToRemove.title} removed from cart`);
                state.items.splice(existingItemIndex, 1); // More efficient removal
                const { totalQuantity, totalAmount } = calculateTotals(state.items);
                state.totalQuantity = totalQuantity;
                state.totalAmount = totalAmount;
            }
        },
        clearcart(state) {
            state.items = [];
            state.totalAmount = 0;
            state.totalQuantity = 0;
            toast.info("Cart cleared");
        },
        incrementquantity(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem) {
                if (existingItem.quantity < existingItem.stock) {
                    existingItem.quantity++;
                    const { totalQuantity, totalAmount } = calculateTotals(state.items);
                    state.totalQuantity = totalQuantity;
                    state.totalAmount = totalAmount;
                } else {
                     toast.warn(`Cannot add more, only ${existingItem.stock} of ${existingItem.title} in stock`);
                }
            }
        },
        decrementquantity(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity--;
                    const { totalQuantity, totalAmount } = calculateTotals(state.items);
                    state.totalQuantity = totalQuantity;
                    state.totalAmount = totalAmount;
                } else {
                     toast.warn(`Quantity for ${existingItem.title} cannot be less than 1. Use Remove button.`);
                }
            }
        },
    }
});

export const {
    addtocart,
    removefromcart,
    clearcart,
    incrementquantity,
    decrementquantity
} = CartSlice.actions;

export default CartSlice.reducer;