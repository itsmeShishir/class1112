import {createSlice} from "@reduxjs/toolkit";

const CartSlice = createSlice( {
    name: "cart",
    initialState:{
        items: [],
        totalAmount: 0,
        totalQuantity: 0,
    },
    reducers: {
        // addtocart, removefromcart, clearcart, incrementquantity, decrementquantity
        addtocart(state, action){
            const {id, category_name, title, stock, price, images} = action.payload
            // check if it is already in the cart
            const existingItem = state.items.find(item => item.id === id)
            // check for the stock

            if(existingItem){
                if(existingItem.stock === existingItem.quantity){
                    return
                }
                
                existingItem.quantity++

            }else{
                state.items.push({
                    id,
                    category_name,
                    title,
                    stock,
                    price,
                    images,
                    quantity: 1,
                })
            }
            
        },
        removefromcart(state, action){
            // check if the item is already in the cart and if it is remove it
            const existingItem = state.items.find(item => item.id === action.payload)
            if(existingItem){
                state.items = state.items.filter(item => item.id !== action.payload)
            }else{
                return
            }
        },
        clearcart(state, action){
            state.items = []
            state.totalAmount = 0
            state.totalQuantity = 0
        },
        incrementquantity(state, action){
            const existingItem = state.items.find(item => item.id === id)
            if(existingItem){
                if(existingItem.stock === existingItem.quantity){
                    return 
                }
                existingItem.quantity++
            }
            
        },
        decrementquantity(state, action){
            const existingItem = state.items.find(item => item.id === id)
            if(existingItem){
                if(existingItem.stock === existingItem.quantity){
                    return
                }
                existingItem.quantity--
            }
        },
    }
})

export const {
    addtocart, 
    removefromcart, 
    clearcart, 
    incrementquantity, 
    decrementquantity} = CartSlice.actions

export default CartSlice.reducer; // export the reducer