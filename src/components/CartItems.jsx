import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/Slices/CartSlice";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
export const CartItems = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  function remove(id) {
    toast.error("Item Removed from cart");
    dispatch(removeFromCart(id));
  }
  return (
    <div
      className={`w-full flex-col flex sm:flex-row sm:items-center justify-center gap-x-3 p-4 ${
        cart.length > 1 && "border-b-2"
      }`}
    >
      <div className="sm:w-[40%] flex justify-center">
        <img className="w-[60%] object-contain" src={item.image}></img>
      </div>
      <div className="sm:w-[50%] flex flex-col gap-y-5 ">
        <h3 className="text-2xl font-medium">
          {item.description.substring(0, 16)}
        </h3>
        <p>{`${item.description.split(" ").slice(0, 10).join(" ")}...`}</p>
        <div>
          <div className="flex justify-between">
            <p className="font-bold text-xl text-green-700">${item.price}</p>
            <button
              className="cursor-pointer p-1.5 bg-red-200 text-red-900 rounded-full hover:text-white hover:bg-red-400 hover:ease-in hover:duration-100"
              onClick={() => remove(item.id)}
            >
              <MdDelete size={23} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
