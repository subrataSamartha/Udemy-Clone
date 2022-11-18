import React from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";

const NavSection = () => {
  return (
    <nav className="flex justify-between md:justify-around items-center py-3 px-4 md:px-6 gap-5 shadow-md">
      <FiMenu className="md:hidden text-2xl text-gray-800" />
      <div className="logo">
        <img src="./logo-udemy.svg" alt="udemy-logo" className="h-7 md:h-9" />
      </div>
      <p className="hidden md:inline text-sm">Category</p>
      <div className="hidden md:flex justify-start items-center gap-4 grow border border-solid border-black rounded-full p-2 h-13 bg-gray-100">
        <button>
          <AiOutlineSearch className="text-2xl text-gray-500" />
        </button>
        <input
          type="text"
          name=""
          id=""
          placeholder="Search for anything"
          className="text-sm w-full focus:outline-none leading-8 bg-gray-100"
        />
      </div>
      <p className="hidden md:inline text-sm">Udemy Business</p>
      <p className="hidden md:inline text-sm">Teach on Udemy</p>
      <div className="flex justify-between items-center gap-4">
        <AiOutlineSearch className="text-2xl text-gray-800" />
        <AiOutlineShoppingCart className="text-2xl text-gray-800" />
      </div>
      <div className="hidden md:flex justify-between items-center gap-2">
        <button className="px-5 h-10 border border-solid border-black font-bold text-sm">
          Log in
        </button>
        <button className="px-5 h-10 border border-solid border-black font-bold text-sm text-white bg-black">
          Sign up
        </button>
        <button className="h-10 w-10 border border-solid border-black font-bold text-sm flex justify-center items-center">
          <BsGlobe />
        </button>
      </div>
    </nav>
  );
};

export default NavSection;
