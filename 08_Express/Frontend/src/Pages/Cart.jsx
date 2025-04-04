import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
    removefromcart,
    clearcart,
    incrementquantity,
    decrementquantity
} from "../redux/CartSlice";

function Cart() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { items, totalAmount, totalQuantity } = useSelector(state => state.cart);

    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('Cash on Delivery');
    const [shippingDetails, setShippingDetails] = useState({
        name: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleShippingChange = (e) => {
        const { name, value } = e.target;
        setShippingDetails(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckout = async () => {
        if (!shippingDetails.name || !shippingDetails.phone || !shippingDetails.address || !shippingDetails.city || !shippingDetails.state || !shippingDetails.zip) {
            toast.error('Please fill in all shipping details.');
            return;
        }
        if (items.length === 0) {
             toast.error('Your cart is empty.');
             return;
        }

        setIsSubmitting(true);
        toast.info('Processing your order...');

        const orderItems = items.map(item => ({
            product: item.id,
            quantity: item.quantity,
        }));

        const orderPayload = {
            payment_method: paymentMethod,
            shipping_name: shippingDetails.name,
            shipping_phone: shippingDetails.phone,
            shipping_address: shippingDetails.address,
            shipping_city: shippingDetails.city,
            shipping_state: shippingDetails.state,
            shipping_zip: shippingDetails.zip,
            items: orderItems,
        };

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                toast.error('You must be logged in to place an order.');
                setIsSubmitting(false);
                navigate('/login');
                return;
            }

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            };

            const response = await axios.post(
                'http://localhost:3000/create',
                orderPayload,
                config
            );

             if (paymentMethod === 'Khalti' && response.data.payment_url) {
                 toast.success('Redirecting to Khalti for payment...');
                 window.location.href = response.data.payment_url;
             } else if (paymentMethod === 'Cash on Delivery' && response.data.order_id) {
                 toast.success('Order placed successfully with Cash on Delivery!');
                 dispatch(clearcart());
                 setIsCheckingOut(false);
                 navigate(`/order-success/${response.data.order_id}`);
             } else {
                 console.warn("Order might be created, but response format unexpected:", response.data);
                 toast.info("Order processed, check your order history.");
                  dispatch(clearcart());
                 setIsCheckingOut(false);
             }

        } catch (error) {
            console.error('Checkout failed:', error.response?.data || error.message);
            toast.error(error.response?.data?.error || 'Checkout failed. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="bg-gray-50 py-8 antialiased md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">Shopping Cart</h2>

                {items.length === 0 ? (
                     <div className="mt-6 text-center text-gray-500">
                         Your cart is empty. <Link to="/" className="text-primary-700 hover:underline">Continue Shopping</Link>
                     </div>
                ) : (
                    <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                        <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                            <div className="space-y-6">
                                {items.map((item) => {
                                    const { id, title, price, images, quantity } = item;
                                    return (
                                        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6" key={id}>
                                             <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                              <a href="#" className="shrink-0 md:order-1">
                                                <img className="h-20 w-20 object-contain" src={images || '/placeholder.png'} alt={title} />
                                              </a>

                                              <label htmlFor={`counter-input-${id}`} className="sr-only">Choose quantity:</label>
                                              <div className="flex items-center justify-between md:order-3 md:justify-end">
                                                <div className="flex items-center">
                                                  <button onClick={() => dispatch(decrementquantity(id))} type="button" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"> - </button>
                                                  <input type="text" id={`counter-input-${id}`} readOnly className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0" value={quantity} />
                                                  <button onClick={() => dispatch(incrementquantity(id))} type="button" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"> + </button>
                                                </div>
                                                <div className="text-end md:order-4 md:w-32">
                                                  <p className="text-base font-bold text-gray-900">
                                                    NPR { (price * quantity).toFixed(2) }
                                                  </p>
                                                </div>
                                              </div>

                                              <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                                <p className="text-base font-medium text-gray-900 hover:underline">
                                                  {title}
                                                </p>
                                                <div className="flex items-center gap-4">
                                                  <button onClick={() => dispatch(removefromcart(id))} type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline">
                                                    <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" /> </svg>
                                                    Remove
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                             {items.length > 0 && (
                                <div className="mt-4 text-right">
                                    <button onClick={() => dispatch(clearcart())} type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline ">
                                        <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" /> </svg>
                                        Clear Entire Cart
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                                <p className="text-xl font-semibold text-gray-900">Order Summary</p>

                                <div className="space-y-4">
                                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                                        <dt className="text-base font-normal text-gray-500">Items ({totalQuantity})</dt>
                                        <dd className="text-base font-medium text-gray-900">NPR {totalAmount.toFixed(2)}</dd>
                                    </dl>
                                      <dl className="flex items-center justify-between gap-4 ">
                                        <dt className="text-base font-normal text-gray-500">Shipping</dt>
                                        <dd className="text-base font-medium text-gray-900">NPR 0.00</dd>
                                    </dl>

                                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                                        <dt className="text-base font-bold text-gray-900">Total</dt>
                                        <dd className="text-base font-bold text-gray-900">NPR {totalAmount.toFixed(2)}</dd>
                                    </dl>
                                </div>

                                {!isCheckingOut && items.length > 0 && (
                                    <button
                                        onClick={() => setIsCheckingOut(true)}
                                        className="mt-4 flex w-full items-center justify-center rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300"
                                    >
                                        Proceed to Checkout
                                    </button>
                                )}

                                {isCheckingOut && (
                                    <div className="mt-6 border-t border-gray-200 pt-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Shipping Details & Payment</h3>
                                        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                                            <input type="text" name="name" placeholder="Full Name" value={shippingDetails.name} onChange={handleShippingChange} required className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2" />
                                            <input type="tel" name="phone" placeholder="Phone Number" value={shippingDetails.phone} onChange={handleShippingChange} required className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2" />
                                            <input type="text" name="address" placeholder="Street Address" value={shippingDetails.address} onChange={handleShippingChange} required className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2" />
                                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                                <input type="text" name="city" placeholder="City" value={shippingDetails.city} onChange={handleShippingChange} required className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2" />
                                                <input type="text" name="state" placeholder="State / Province" value={shippingDetails.state} onChange={handleShippingChange} required className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2" />
                                                <input type="text" name="zip" placeholder="ZIP / Postal Code" value={shippingDetails.zip} onChange={handleShippingChange} required className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2" />
                                            </div>

                                            <div className="mt-4">
                                                <label className="text-base font-medium text-gray-900">Payment Method</label>
                                                <fieldset className="mt-2">
                                                    <legend className="sr-only">Payment method</legend>
                                                    <div className="space-y-2 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                                                        <div className="flex items-center">
                                                            <input id="cod" name="paymentMethod" type="radio" value="Cash on Delivery" checked={paymentMethod === 'Cash on Delivery'} onChange={(e) => setPaymentMethod(e.target.value)} className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-500" />
                                                            <label htmlFor="cod" className="ml-3 block text-sm font-medium text-gray-700">Cash on Delivery</label>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <input id="khalti" name="paymentMethod" type="radio" value="Khalti" checked={paymentMethod === 'Khalti'} onChange={(e) => setPaymentMethod(e.target.value)} className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-500" />
                                                            <label htmlFor="khalti" className="ml-3 block text-sm font-medium text-gray-700">Khalti</label>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </div>

                                            <button
                                                onClick={handleCheckout}
                                                disabled={isSubmitting}
                                                type="button"
                                                className={`mt-6 flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary-700 hover:bg-primary-800 focus:ring-primary-300'}`}
                                                style={{backgroundColor: isSubmitting ? '#9CA3AF' : '#16A34A'}}
                                                >
                                                {isSubmitting ? 'Processing...' : `Place Order (${paymentMethod})`}
                                            </button>
                                              <button
                                                onClick={() => setIsCheckingOut(false)}
                                                type="button"
                                                className="mt-2 w-full text-center text-sm font-medium text-gray-600 hover:text-gray-800"
                                            >
                                                Cancel Checkout
                                            </button>
                                        </form>
                                    </div>
                                )}

                                {!isCheckingOut && (
                                    <div className="mt-4 flex items-center justify-center gap-2">
                                        <span className="text-sm font-normal text-gray-500 "> or </span>
                                        <Link to="/" title="Continue Shopping" className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline ">
                                            Continue Shopping
                                            <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" /> </svg>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Cart;