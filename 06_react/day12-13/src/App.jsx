import { Link, Outlet } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto min-h-[85vh] px-4 py-6">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
