import AllProduct from '../Component/AllProduct';
import AllCategory from '../Component/AllCategory';
import {Helmet} from 'react-helmet'

function Home() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome to Our Store</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Categories</h2>
        <AllCategory />
      </section>

      {/* Product Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Products</h2>
        <AllProduct />
      </section>
    </div>
  );
}

export default Home;
