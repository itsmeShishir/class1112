import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { RiMoonFill } from "react-icons/ri";
import { FaMagnifyingGlass } from "react-icons/fa6";
import {useState} from "react";

function Navbar() {
    let [menu, SetMenu] = useState(false);
    let toggleMenu = () =>{
        SetMenu(!menu);
    }
  return (
    <>
    <nav className="w-full md:fixed md:bg-white md:z-10">
      <div
        className="container md:w-[75vw] flex justify-between items-center mx-auto h-[9vh]"
      >
        <h1 className="text-3xl font-bold">
          <span className="text-green-500 text-4xl">L</span>aundries<span className=""
            ><i className="fas fa-hands-wash text-green-500"></i
          ></span>
        </h1>
        <div className="flex md:gap-10 items-center">
          <div className="hidden md:flex gap-5 font-medium items-center">
            <a href="#" className="text-green-500">Home</a>
            <a
              href="#"
              className="hover:text-green-500 transition ease-in-out duration-700"
              >About</a
            >
            <a
              href="#"
              className="hover:text-green-500 transition ease-in-out duration-700"
              >Services</a
            >
            <a
              href="#"
              className="hover:text-green-500 transition ease-in-out duration-700"
              >Blog</a
            >
            <a
              href="#"
              className="hover:text-green-500 transition ease-in-out duration-700"
              >Pages</a
            >
            <a
              href="#"
              className="hover:text-green-500 transition ease-in-out duration-700"
              >Contact</a
            >
            <form className="">
              <input
                type="text"
                placeholder="Enter keyword ..."
                className="font-normal py-1 px-5 border-2 border-black rounded-l-full"
              />
              <button
                className="py-1 border-2 border-green-500 px-5 bg-green-500 rounded-r-full hover:text-white hover:bg-black hover:border-black transition ease-in-out duration-[2s]"
                type="submit"
              >
                <FaMagnifyingGlass className="fa-solid fa-magnifying-glass"></FaMagnifyingGlass>
              </button>
            </form>
        </div>
        </div>
        <div className="w-20 h-10 bg-green-500 rounded-full flex gap-10">
          <RiMoonFill className="fa-regular fa-moon text-2xl"></RiMoonFill>
          <HiMiniBars3CenterLeft onClick={toggleMenu} className="fa-solid fa-bars md:hidden text-4xl text-white"></HiMiniBars3CenterLeft>        
        </div>
        </div>

    </nav>

    {
        menu ?
        <div id="mobilemenu" className="mb-10 flex flex-col gap-5 md:hidden bg-green-100 py-10 font-medium items-center">
        <a href="#" className="text-green-500">Home</a>
        <a
          href="#"
          className="hover:text-green-500 transition ease-in-out duration-700"
          >About</a
        >
        <a
          href="#"
          className="hover:text-green-500 transition ease-in-out duration-700"
          >Services</a
        >
        <a
          href="#"
          className="hover:text-green-500 transition ease-in-out duration-700"
          >Blog</a
        >
        <a
          href="#"
          className="hover:text-green-500 transition ease-in-out duration-700"
          >Pages</a
        >
        <a
          href="#"
          className="hover:text-green-500 transition ease-in-out duration-700"
          >Contact</a
        >
        <form className="">
          <input
            type="text"
            placeholder="Enter keyword ..."
            className="font-normal py-1 px-5 border-2 border-black rounded-l-full"
          />
          <button
            className="py-1 border-2 border-green-500 px-5 bg-green-500 rounded-r-full hover:text-white hover:bg-black hover:border-black transition ease-in-out duration-[2s]"
            type="submit"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
    </div> :<div></div>
    }
        
    </>
  )
}

export default Navbar