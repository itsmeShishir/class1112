import { Link, Outlet } from "react-router-dom"
import Navbar from "./Component/Navbar"
import Footer from "./Component/Footer"
function App() {
  return (
      <>
      <Navbar />
        <div className="container mx-auto h-[85vh]">
           <Outlet />
        </div>
      <Footer />
      </>
  )
}

export default App
