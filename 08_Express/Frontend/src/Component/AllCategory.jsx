import { useQuery } from '@tanstack/react-query';
import fetchData from '../services/FetchService';
import { Link } from 'react-router-dom';

const fetchCategoriesAPI = async () => {
    const apiUrl = "http://localhost:3000/get-category";
    try {
        const response = await fetchData(apiUrl);
        const categories = response?.data?.categories;

        if (!Array.isArray(categories)) {
            console.error("API did not return an array of categories:", response);
            throw new Error('Invalid data format received from server.');
        }
        return categories;

    } catch (error) {
        console.error("Error fetching categories in API function:", error);
        throw new Error(error.message || 'Failed to fetch categories');
    }
};

function AllCategory() {
    const {
        data: categories = [],
        isLoading,
        isError,
        error
    } = useQuery({
        queryKey: ['categories'],
        queryFn: fetchCategoriesAPI,
    });

    return (
        <div className="w-[90vw] md:w-[85vw] mx-auto mt-6 mb-12">
            <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
                Shop By Category
            </h1>

            {isLoading && (
                <p className="text-center text-lg text-gray-600 mt-4">
                    Loading categories...
                </p>
            )}

            {isError && (
                <p className="text-center text-red-600 bg-red-100 p-4 rounded mt-4">
                    Error: {error?.message || 'An unknown error occurred'}
                </p>
            )}

            {!isLoading && !isError && categories.length === 0 && (
                 <p className="text-center text-gray-500 mt-4">
                    No categories found.
                 </p>
            )}

            {!isLoading && !isError && categories.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 mt-6">
                    {categories.map((item) => (
                        <Link
                            to={`/singlecategory/${item._id}`}
                            className="group block overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300"
                            key={item._id}
                        >
                            <div className="relative h-32 sm:h-40 w-full bg-gray-100 overflow-hidden">
                                <img
                                    src={item.category_image || '/placeholder-image.png'}
                                    alt={item.name || 'Category'}
                                    className="object-cover h-full w-full transition-transform group-hover:scale-105 duration-300"
                                    onError={(e) => e.target.src = '/placeholder-image.png'}
                                />
                            </div>
                            <div className="p-3 text-center">
                                <h2 className="text-base sm:text-lg font-semibold text-gray-700 group-hover:text-blue-600 transition-colors truncate">
                                    {item.name || 'Unnamed Category'}
                                </h2>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
export default AllCategory;