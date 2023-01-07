import React from "react";
import { useSelector } from "react-redux";
import ShoppingItem from "../components/product/ShoppingItem";
export default function ShoppingCart() {
  const items = useSelector((state) => state.cart);
  let arr = [];

  for (let i of items) {
    arr.push(i.price);
  }

  return (
    <div className="max-w-2xl px-4 space-y-4 py-8 w-full mx-auto">
      <h2 className="text-4xl text-center font-bold text-slate-800">
        Shopping Cart
        <hr className="my-4 border-2" />
      </h2>

      {items.length > 0 ? (
        <>
          <div className=" space-y-4">
            {items?.map((item, i) => (
              <ShoppingItem key={i} item={item} />
            ))}
          </div>
          <div className="flex w-full  justify-between">
            <div>
              <h3 className="text-xl uppercase font-bold ">Subtotal</h3>
              <p className="text-gray-400">
                shipping and taxes will be calculated at checkout
              </p>
            </div>
            <span className="font-bold text-lg">
              $ {arr.reduce((a, b) => a + b)}
            </span>
          </div>
          <button className="w-full py-2 px-4 bg-slate-600 text-white rounded-lg hover:bg-slate-700">
            Checkout
          </button>
        </>
      ) : (
        "No Items In Cart"
      )}
    </div>
  );
}
