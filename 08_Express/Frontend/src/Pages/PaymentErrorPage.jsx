import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function PaymentErrorPage() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const reason = queryParams.get('reason'); // Get the reason from backend redirect

    let errorMessage = "An unexpected error occurred during payment verification.";
    let suggestion = "Please try checking your order history later or contact support.";

    if (reason === 'order_not_found') {
        errorMessage = "Payment may have been successful, but we couldn't find the corresponding order in our system.";
        suggestion = "Please contact support with your transaction details (if available).";
    } else if (reason === 'verification_failed') {
        errorMessage = "We could not verify your payment with the provider.";
        suggestion = "Please check your Khalti account or contact support. Do not attempt to pay again immediately.";
    }

    return (
         <div className="container mx-auto px-4 py-16 text-center flex flex-col items-center justify-center min-h-[70vh]">
             {/* Simple Error Icon */}
             <svg className="w-20 h-20 text-red-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">Payment Verification Failed</h1>
            <p className="text-gray-600 mt-3 text-lg px-4">
               {errorMessage}
            </p>
             <p className="text-gray-500 mt-2 px-4">
                 {suggestion}
             </p>

            <div className="mt-10 space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
                 {/* Link back to Cart or Homepage */}
                 <Link
                    to="/cart"
                    className="px-8 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-300 text-center"
                >
                    Return to Cart
                </Link>
                <Link
                    to="/"
                    className="px-8 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition duration-300 text-center"
                >
                    Go to Homepage
                </Link>
                 {/* You might add a Contact Support link here */}
            </div>
        </div>
    );
}

export default PaymentErrorPage;