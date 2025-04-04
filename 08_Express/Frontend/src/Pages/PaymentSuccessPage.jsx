import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearcart } from '../redux/CartSlice'; // Assuming you want to clear cart on success

function PaymentSuccessPage() {
    const location = useLocation();
    const dispatch = useDispatch();

    const queryParams = new URLSearchParams(location.search);
    const orderId = queryParams.get('order_id');

    useEffect(() => {
        dispatch(clearcart());
    }, [dispatch]); 


    return (
        <div className="container mx-auto px-4 py-16 text-center flex flex-col items-center justify-center min-h-[70vh]">
            <svg className="w-20 h-20 text-green-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">Payment Successful!</h1>
            <p className="text-gray-600 mt-3 text-lg">
                Thank you for your purchase. Your payment has been verified.
            </p>
            {orderId && (
                 <p className="text-gray-600 mt-1">
                    Your Order ID is: <span className="font-semibold">{orderId}</span>
                 </p>
            )}
             <p className="text-gray-500 mt-1 text-sm">
                 Your cart has been cleared.
             </p>

            <div className="mt-10 space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
                <Link
                    to="/order-history" 
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 text-center"
                >
                    View Order History
                </Link>
                <Link
                    to="/" 
                    className="px-8 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition duration-300 text-center"
                >
                    Continue Shopping
                </Link>
            </div>
        </div>
    );
}

export default PaymentSuccessPage;