import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const email = localStorage.getItem("email")
  console.log(email);
  

  const getEmail = localStorage.getItem("email");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login"); // Redirect to login after logout
  };



  return (
    <>
      {/* Navbar Container */}
      <nav className="bg-white shadow-md">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" />
            <span className="text-2xl font-semibold text-gray-800">Flowbite</span>
          </NavLink>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="md:hidden p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-gray-200  "
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          {/* Navigation Links */}
          <div className={`w-full md:w-auto md:flex ${navbarOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0 bg-gray-50 md:bg-transparent ">
              <li>
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className="nav-link">About</NavLink>
              </li>
              <li>
                <NavLink to="/services" className="nav-link">Services</NavLink>
              </li>
              <li>
                <NavLink to="/cart" className="nav-link">cart</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="nav-link">Contact</NavLink>
              </li>
            </ul>
          </div>

          {/* Authentication / User Dropdown */}
          {getEmail ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center text-sm bg-gray-800 rounded-full focus:ring-2 focus:ring-gray-300 "
              >
                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/40" alt="User Avatar" />
              </button>

              {/* User Dropdown */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg ">
                  <div className="p-3 border-b ">
                    <p className="text-sm font-medium text-gray-800">{getEmail}</p>
                  </div>
                  <ul className="py-2">
                    <li><NavLink to="/account" className="dropdown-link">Dashboard</NavLink></li>
                  </ul>
                  <div className="py-2">
                    <button onClick={logout} className="block w-full text-left dropdown-link text-red-500">Sign out</button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden md:flex space-x-4">
              <NavLink to="/login" className="auth-button">Login</NavLink>
              <NavLink to="/register" className="auth-button">Register</NavLink>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Auth Links */}
      {!getEmail && navbarOpen && (
        <div className="md:hidden flex flex-col items-center space-y-3 p-4 bg-gray-50 ">
          <NavLink to="/login" className="auth-button">Login</NavLink>
          <NavLink to="/register" className="auth-button">Register</NavLink>
        </div>
      )}
    </>
  );
}

export default Navbar;
