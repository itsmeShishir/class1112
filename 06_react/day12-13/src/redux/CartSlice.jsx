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
            const id = action.payload
            const existingItem = state.items.find(item => item.id === id)
            if(existingItem){
                state.totalAmount -= existingItem.price * existingItem.quantity
                state.totalQuantity -= existingItem.quantity
                state.items = state.items.filter(item => item.id !== id)
            }
        },
        clearcart(state, action){
            state.items = []
            state.totalAmount = 0
            state.totalQuantity = 0

        },
        incrementquantity(state, action){
            const id = action.payload
            const existingItem = state.items.find(item => item.id === id)
            if(existingItem){
                if(existingItem.stock === existingItem.quantity){
                    return
                }
                existingItem.quantity++
            }
        },
        decrementquantity(state, action){
            const id = action.payload
            const existingItem = state.items.find(item => item.id === id)
            if(existingItem){
                if(existingItem.quantity === 1){
                    return
                }
                existingItem.quantity--
            }
        },
        // total qunatity and total price
        totalAmount(state, action){
            const amount = state.items.reduce((total, item) => total + item.price * item.quantity, 0)
            state.totalAmount = amount
        },

        totalQuantity(state, action){
            const quantity = state.items.reduce((total, item) => total + item.quantity, 0)
            state.totalQuantity = quantity
            
        }
    }
    

})



export const {
    addtocart, 
    removefromcart, 
    clearcart, 
    incrementquantity, 
    totalAmount,
    totalQuantity,
    decrementquantity} = CartSlice.actions

export default CartSlice.reducer; // export the reducer