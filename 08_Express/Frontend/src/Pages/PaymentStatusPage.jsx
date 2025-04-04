import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function PaymentStatusPage() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const status = queryParams.get('status');
    const pidx = queryParams.get('pidx');

    let statusMessage = `Your payment status is: ${status || 'Unknown'}`;
    let icon = null;
    let suggestion = "You can check your order history later or contact support.";

    switch (status?.toLowerCase()) {
        case 'pending':
            statusMessage = "Your payment is currently Pending.";
            suggestion = "It might take a few moments to confirm. Please check your order history later or contact support if it persists.";
            icon = <svg className="w-20 h-20 text-yellow-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>; // Clock icon
            break;
        case 'failed':
             statusMessage = "Your payment attempt Failed.";
             suggestion = "Please try placing the order again or use a different payment method. Check your Khalti account for details.";
             icon = <svg className="w-20 h-20 text-red-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg>; // Cross icon
            break;
        case 'refunded':
             statusMessage = "Your payment has been Refunded.";
             suggestion = "Please check your Khalti account or contact support for more details.";
              icon = <svg className="w-20 h-20 text-blue-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>; // Refund icon
            break;
        default:
             icon = <svg className="w-20 h-20 text-gray-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>; // Question mark icon
    }


    return (
         <div className="container mx-auto px-4 py-16 text-center flex flex-col items-center justify-center min-h-[70vh]">
             {icon}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">Payment Status</h1>
            <p className="text-gray-600 mt-3 text-lg px-4">
               {statusMessage}
            </p>
             {pidx && <p className="text-gray-500 text-sm mt-1">(Ref: {pidx})</p>}
             <p className="text-gray-500 mt-2 px-4">
                 {suggestion}
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
                    Go to Homepage
                </Link>
            </div>
        </div>
    );
}

export default PaymentStatusPage;