import React from "react";
import { Navbar } from "../components/Navbar";
import { useSelector } from "react-redux";
import { CartItems } from "../components/CartItems";
import { Link } from "react-router-dom";
export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className="w-full flex justify-center flex-wrap">
      <Navbar />
      <div className="max-w-[1250px]">
        <div className="max-w-full flex md:gap-x-16 flex-col gap-y-16 md:flex-row">
          <div className="w-full flex flex-col sm:items-center">
            {cart.length > 0 ? (
              cart.map((item) => <CartItems item={item} key={item.id} />)
            ) : (
              <div>
                <div>No items in cart</div>
                <Link to="/">SHOP NOW</Link>
              </div>
            )}
          </div>
          <div className="w-full flex flex-col items-center">
            {cart.length > 0 && (
              <div className="w-full flex flex-col gap-y-5">
                <div>
                  <div className="font-medium text-xl text-green-900">
                    YOUR CART
                  </div>
                  <div className="text-5xl font-bold text-green-700">
                    SUMMARY
                  </div>
                </div>
                <div>
                  <div className="text-xl">{`Total Items: ${cart.length}`}</div>
                  <div className="text-xl pb-2">
                    Total Amount :<span className="font-bold">{` $${totalPrice}`}</span>
                  </div>
                  <button className="border-2 cursor-pointer bg-green-700 w-full px-4 py-2 rounded-md text-white font-bold text-xl hover:bg-gray-100 hover:text-green-700 hover:border-green-700 ease-in duration-200">
                    Checkout Now
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
