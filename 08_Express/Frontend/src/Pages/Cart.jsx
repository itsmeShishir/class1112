import React from 'react'
// show items form cart
import { useSelector } from 'react-redux'
import {removefromcart, clearcart, incrementquantity, decrementquantity, totalAmount, totalQuantity} from "../redux/CartSlice"
import { useDispatch } from 'react-redux'

function Cart() {
    const dispatch = useDispatch()
    // removefromcart

    const {items, totalAmount, totalQuantity} = useSelector(state => state.cart)
    
  return (
    <>
        <section className="bg-white py-8 antialiased  md:py-16">
  <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <h2 className="text-xl font-semibold text-gray-900  sm:text-2xl">Shopping Cart</h2>

    <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
      <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
        <div className="space-y-6">
          {
            items.map((item, index)=>{
                const {id, category_name, title, stock, price, images, quantity} = item
                return(
                    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6" key={index}>
                    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                      <a href="#" className="shrink-0 md:order-1">
                        <img className="h-20 w-20 " src={images} alt="imac image" />
                        <img className="hidden h-20 w-20 " src={images} alt="imac image" />
                      </a>
        
                      <label for="counter-input" className="sr-only">Choose quantity:</label>
                      <div className="flex items-center justify-between md:order-3 md:justify-end">
                        <div className="flex items-center">
                          <  button  onClick={()=> dispatch(decrementquantity(id))} type="button" id="decrement-button" data-input-counter-decrement="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100">
                            <svg className="h-2.5 w-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                            </svg>
                          </button>
                          <input type="text" id="counter-input" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 " placeholder="" value={quantity} required />
                          <button onClick={()=> dispatch(incrementquantity(id))}  type="button" id="increment-button" data-input-counter-increment="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100">
                            <svg className="h-2.5 w-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                            </svg>
                          </button>
                        </div>
                        <div className="text-end md:order-4 md:w-32">
                          <p className="text-base font-bold text-gray-900 ">
                            {price * quantity}
                          </p>
                        </div>
                      </div>
        
                      <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                        <a href="#" className="text-base font-medium text-gray-900 hover:underline ">
                          {title}
                        </a>
        
                        <div className="flex items-center gap-4">
                          <button  onClick={()=>dispatch(removefromcart(id))} type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline " >
                            <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                            </svg>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
            })
          }
        </div>
       {/* {
        totalQuantity > 0 && ( */}
          <div className="flex items-center gap-4">
          <button  onClick={()=>dispatch(clearcart())} type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline " >
            <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
            </svg>
            Remove
          </button>
        </div>
        {/* )
       } */}
      </div>

      <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
          <p className="text-xl font-semibold text-gray-900 ">Order summary</p>

          <div className="space-y-4">
          <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 ">
              <dt className="text-base font-bold text-gray-900 ">quantity</dt>
              <dd className="text-base font-bold text-gray-900 ">{totalQuantity}</dd>
            </dl>

            <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 ">
              <dt className="text-base font-bold text-gray-900 ">Total</dt>
              <dd className="text-base font-bold text-gray-900 ">{totalAmount}</dd>
            </dl>
          </div>

          <a href="#" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 ">Proceed to Checkout</a>

          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-normal text-gray-500 "> or </span>
            <a href="#" title="" className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline ">
              Continue Shopping
              <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Cart
