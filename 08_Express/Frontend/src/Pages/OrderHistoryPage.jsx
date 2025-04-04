import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    try {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    } catch (e) {
        return dateString;
    }
};

const fetchOrderHistoryAPI = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        throw new Error('Unauthorized: Please log in to view your order history.');
    }

    const apiUrl = "http://localhost:3000/history";

    try {
        const response = await axios.get(apiUrl, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        const data = response.data;

        if (!data || !Array.isArray(data.orders)) {
            console.error("Unexpected API response structure:", data);
            throw new Error(data?.message || "Invalid data format received for order history.");
        }

        return data.orders;

    } catch (error) {
        console.error("Error fetching order history:", error.response?.data || error.message);
        if (error.response?.status === 401 || error.response?.status === 403) {
            throw new Error('Unauthorized: Please log in again.');
        }
        throw new Error(error.response?.data?.error || error.message || 'Failed to fetch order history.');
    }
};

function OrderHistoryPage() {
    const navigate = useNavigate();
    const {
        data: orders = [],
        isLoading,
        isError,
        error
    } = useQuery({
        queryKey: ['orderHistory'],
        queryFn: fetchOrderHistoryAPI,
        retry: false,
    });

    useEffect(() => {
        if (isError && error?.message.includes('Unauthorized')) {
            navigate('/login');
        }
    }, [isError, error, navigate]);

    const calculateOrderTotal = (items) => {
        if (!items || !Array.isArray(items)) return 0;
        return items.reduce((total, item) => {
            const price = item.product?.price || 0;
            const quantity = item.quantity || 0;
            return total + (price * quantity);
        }, 0);
    };

    return (
        <div className="container mx-auto px-4 py-8 md:py-12 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Your Order History</h1>

            {isLoading && (
                <p className="text-center text-lg text-gray-600 mt-10">Loading your orders...</p>
            )}

            {isError && !error?.message.includes('Unauthorized') && (
                <p className="text-center text-red-600 bg-red-100 p-4 rounded mt-6">
                    Error loading order history: {error.message}
                </p>
            )}

            {!isLoading && !isError && orders.length === 0 && (
                <div className="text-center mt-10">
                    <p className="text-gray-500 text-lg">You haven't placed any completed orders yet.</p>
                    <Link to="/" className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                        Start Shopping
                    </Link>
                </div>
            )}

            {!isLoading && !isError && orders.length > 0 && (
                <div className="space-y-8">
                    {orders.map((order) => {
                        const orderTotal = calculateOrderTotal(order.items);
                        return (
                            <div key={order._id} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                                <div className="bg-gray-50 p-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                                    <div>
                                        <p className="text-sm text-gray-600">
                                            Order ID: <span className="font-medium text-gray-800">{order._id}</span>
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Placed on: <span className="font-medium text-gray-800">{formatDate(order.createdAt)}</span>
                                        </p>
                                    </div>
                                    <div className="text-left sm:text-right">
                                         <p className="text-sm text-gray-600">
                                            Total: <span className="font-bold text-lg text-green-700">NPR {orderTotal.toFixed(2)}</span>
                                        </p>
                                         <p className="text-xs text-gray-500">
                                            Payment: <span className="font-medium">{order.payment_method} ({order.payment_status})</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="p-4 space-y-4">
                                    <h3 className="text-md font-semibold text-gray-700 mb-3">Items Ordered:</h3>
                                    {order.items && order.items.length > 0 ? (
                                        order.items.map(item => (
                                            <div key={item._id} className="flex items-start gap-4 border-b border-gray-100 pb-3 last:border-b-0 last:pb-0">
                                                <Link to={`/singlepage/${item.product?._id}`} className="flex-shrink-0">
                                                    <img
                                                        src={item.product?.images?.[0] || '/placeholder.png'}
                                                        alt={item.product?.name || 'Product'}
                                                        className="w-16 h-16 object-contain rounded border border-gray-200"
                                                        onError={(e) => e.target.src = '/placeholder.png'}
                                                    />
                                                </Link>
                                                <div className="flex-grow">
                                                    <Link to={`/singlepage/${item.product?._id}`} className="text-sm font-medium text-gray-800 hover:text-blue-600 line-clamp-2">
                                                        {item.product?.name || 'Product Name Unavailable'}
                                                    </Link>
                                                    <p className="text-xs text-gray-500 mt-1">
                                                        Quantity: {item.quantity || 0}
                                                    </p>
                                                </div>
                                                <div className="text-right flex-shrink-0">
                                                      <p className="text-sm font-semibold text-gray-800">
                                                         NPR {( (item.product?.price || 0) * (item.quantity || 0) ).toFixed(2)}
                                                     </p>
                                                     <p className="text-xs text-gray-500">
                                                        ( NPR {(item.product?.price || 0).toFixed(2)} each )
                                                     </p>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-sm text-gray-500">No item details available for this order.</p>
                                    )}
                                </div>

                                 <div className="bg-gray-50 p-4 border-t border-gray-200">
                                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Shipping To:</h4>
                                      <p className="text-xs text-gray-600">{order.shipping_name}</p>
                                      <p className="text-xs text-gray-600">{order.shipping_address}, {order.shipping_city}</p>
                                      <p className="text-xs text-gray-600">{order.shipping_state} - {order.shipping_zip}</p>
                                      <p className="text-xs text-gray-600">Phone: {order.shipping_phone}</p>
                                 </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default OrderHistoryPage;