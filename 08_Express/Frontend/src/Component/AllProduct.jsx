import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from 'react-redux';
import { addtocart } from '../redux/CartSlice';

const fetchProductsAPI = async () => {
    const response = await fetch("http://localhost:3000/get-products");

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    if (!data.success || !Array.isArray(data.products)) {
        console.error("Unexpected API response structure:", data);
        throw new Error(data.message || "Failed to fetch products or invalid data format.");
    }
    return data.products;
};

function AllProduct() {
  const dispatch = useDispatch();

  const {
      data: products = [],
      isLoading,
      isError,
      error
    } = useQuery({
    queryKey: ['allProducts'],
    queryFn: fetchProductsAPI,
  });

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();

    const productDataForCart = {
        _id: product._id,
        title: product.name,
        price: product.price,
        images: product.images || '/placeholder.png',
        stock: product.qty,
        category: product.category,
    };

    dispatch(addtocart(productDataForCart));
  };

  const truncateDescription = (desc, limit = 15) => {
    if (!desc) return "";
    let words = desc.split(" ");
    return words.length > limit ? words.slice(0, limit).join(" ") + "..." : desc;
  };

  return (
    <div className="w-[90vw] md:w-[85vw] mx-auto mt-6 mb-12">
      <h1 className="text-center text-green-700 font-extrabold text-3xl mb-8">Explore Our Products</h1>

      {isLoading && <p className="text-center text-lg font-semibold text-gray-600">Loading products...</p>}

      {isError && <p className="text-center text-red-600 bg-red-100 p-4 rounded">Error: {error.message}. Please try again later.</p>}

      {!isLoading && !isError && products.length === 0 && (
            <p className="text-center text-gray-500 mt-8">No products found.</p>
      )}

      {!isLoading && !isError && products.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div
              key={item._id}
              className="group flex flex-col bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <Link to={`/singlepage/${item._id}`} className="block">
                 <div className="relative w-full h-56 bg-gray-100">
                   <img
                     src={'/placeholder.png'}
                     alt={item.name}
                     className="h-full w-full object-contain transition-transform group-hover:scale-105 duration-300 p-2"
                   />
                 </div>
                 <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors truncate">
                      {item.name}
                    </h2>
                    <div className="mt-2 flex justify-between items-center">
                        <p className="text-lg font-bold text-green-600">NPR {item.price ? item.price.toFixed(2) : '0.00'}</p>
                         <p className={`text-xs font-medium ${item.qty > 0 ? 'text-green-600' : 'text-red-500'}`}>
                           {item.qty > 0 ? `${item.qty} in Stock` : 'Out of Stock'}
                         </p>
                    </div>
                 </div>
               </Link>
               <div className="px-4 pb-4 mt-auto">
                     <button
                        onClick={(e) => handleAddToCart(e, item)}
                        disabled={item.qty <= 0}
                        className={`w-full py-2 px-4 rounded text-white font-semibold text-sm transition-colors duration-200 ${
                            item.qty > 0
                            ? 'bg-green-600 hover:bg-green-700'
                            : 'bg-gray-400 cursor-not-allowed'
                        }`}
                    >
                        {item.qty > 0 ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AllProduct;