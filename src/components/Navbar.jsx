import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="w-full bg-indigo-950 fixed -top-0 p-2.5 z-20">
      <div className="max-w-[1200px] flex justify-between mx-auto">
        <Link to="/">
          <img src={logo} width={150}></img>
        </Link>
        <div className="flex text-white gap-x-8 items-center">
          <div className="text-[18px] hover:text-green-400">
            <Link to="/">Home</Link>
          </div>
          <div className="relative">
            {cart.length > 0 && (
              <div className="font-extrabold text-xs absolute bottom-3 left-3 rounded-full bg-green-500 px-[8px] py-[2px] animate-bounce">
                {cart.length}
              </div>
            )}
            <Link to="/cart">
              <FaCartShopping className="hover:text-green-400" size={26} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
