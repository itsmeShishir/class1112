import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";


function AllProduct() {
  const { isPending, error, data } = useQuery({
    queryKey: ['allproduct'],
    queryFn: () =>
      fetch('https://python.bhandarishishir.com.np/api/products/').then((res) =>
        res.json(),
      ),
  })

 
  // Truncate description to a readable length
  const truncateDescription = (desc, limit = 20) => {
    if (!desc) return "";
    let words = desc.split(" ");
    return words.length > limit ? words.slice(0, limit).join(" ") + "..." : desc;
  };

  return (
    <div className="w-[85vw] mx-auto mt-6">
      <h1 className="text-center text-green-600 font-extrabold text-3xl mb-6">All Products</h1>

      {/* Loading State */}
      {isPending && <p className="text-center text-lg font-semibold">Loading products...</p>}

      {/* Error State */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Product Grid */}
      {!isPending && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((item, index) => (
            <Link
              to={`/singlepage/${item.id}`}
              key={index}
              className="group block bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-56 flex items-center justify-center bg-gray-100 rounded-t-lg">
                <img
                  src={item.images}
                  alt={item.title}
                  className="h-full object-cover rounded-lg transition-transform group-hover:scale-105 duration-300"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-600 mt-2">{truncateDescription(item.description)}</p>
                <p className="text-lg font-bold text-green-500 mt-2">Price: ${item.price}</p>
                <p className="text-sm text-gray-500">Category: {item.category_name}</p>
                <p className="text-sm text-gray-500">Stock: {item.stock}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default AllProduct;
