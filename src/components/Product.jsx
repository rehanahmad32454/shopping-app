import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";
export const Product = ({ product }) => {
  const disc = `${product.description.split(" ").slice(0, 10).join(" ")}...`;
  const title = `${product.title.substring(0, 16)}...`;
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cart);
  function add(product) {
    dispatch(addToCart(product));
    toast.success("Item Added to cart");
  }
  function remove(id) {
    toast.error("Item Removed from cart");
    dispatch(removeFromCart(id));
  }
  return (
    <div className="group z-10 cursor-pointer hover:scale-110 hover:shadow-[var(--shadow-square)] shadow-xl flex max-w-[280px] flex-col gap-y-4 justify-between items-center p-3 rounded-xl transition ease-in duration-300">
      <div className="flex flex-col gap-y-4 p-4">
        <div className="font-medium text-xl">{title}</div>
        <div className="text-gray-400 text-xs">{disc}</div>
      </div>
      <img className="w-28 h-40 object-contain" src={product.image}></img>
      <div className="w-full flex justify-between">
        <div className="text-xl text-bold text-green-600 font-bold">{`$${product.price}`}</div>
        {cart.some((p) => p.id === product.id) ? (
          <div
            className="cursor-pointer border rounded-full px-2 py-1 group-hover:bg-black group-hover:text-white transition ease-in duration-300"
            onClick={() => remove(product.id)}
          >
            REMOVE ITEM
          </div>
        ) : (
          <div
            className="cursor-pointer border rounded-full px-2 py-1 group-hover:bg-black group-hover:text-white transition ease-in duration-300"
            onClick={() => add(product)}
          >
            ADD TO CART
          </div>
        )}
      </div>
    </div>
  );
};
