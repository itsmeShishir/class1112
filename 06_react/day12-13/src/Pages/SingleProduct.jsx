import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import fetchData from "../services/FetchService";
import { useDispatch } from "react-redux";
import { addtocart } from "../redux/CartSlice"; 
import { useNavigate } from "react-router-dom";
function SingleProduct() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        let response = await fetchData(`https://python.bhandarishishir.com.np/api/products/${id}/`);
        setData(response.data);
      } catch (e) {
        setError("Failed to load product details. Please try again.");
        console.error(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDatas();
  }, [id]);

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-10 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading && <p className="text-center text-lg font-semibold">Loading product details...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && data && (
          <div className="flex flex-col md:flex-row -mx-4 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            {/* Product Image */}
            <div className="md:w-1/2 px-4">
              <div className="h-[460px] rounded-lg bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={data.images || "https://via.placeholder.com/500"}
                  alt={data.title}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-6">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-bold hover:bg-blue-700 transition"
                onClick={()=> dispatch(addtocart(data))}
                >
                  Add to Cart
                </button>
                <button className="flex-1 bg-gray-300 text-gray-800 py-2 px-4 rounded-lg font-bold hover:bg-gray-400 transition dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
                  Add to Wishlist
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 px-4 mt-6 md:mt-0">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{data.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg mt-2">{data.category_name}</p>

              {/* Price & Availability */}
              <div className="flex items-center gap-6 my-4">
                <div className="text-lg font-semibold">
                  <span className="text-gray-700 dark:text-gray-300">Price: </span>
                  <span className="text-green-600 font-bold text-xl">${data.price}</span>
                </div>
                <div className="text-lg font-semibold">
                  <span className="text-gray-700 dark:text-gray-300">Availability: </span>
                  <span className="text-blue-600 font-bold">{data.stock > 0 ? "In Stock" : "Out of Stock"}</span>
                </div>
              </div>

              {/* Description */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Product Description:</h3>
                <p className="text-gray-600 dark:text-gray-300 text-md mt-2">{data.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SingleProduct;
