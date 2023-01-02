import React from "react";
import ShoppingItem from "../components/product/ShoppingItem";
export default function ShoppingCart() {
  return (
    <div className="max-w-2xl px-4 space-y-4 py-8 w-full mx-auto">
      <h2 className="text-4xl text-center font-bold text-slate-800">
        Shopping Cart
        <hr className="my-4 border-2" />
      </h2>
      <div className=" space-y-4">
        <ShoppingItem />
        <ShoppingItem />
        <ShoppingItem />
      </div>
      <div className="flex w-full  justify-between">
        <div>
          <h3 className="text-xl uppercase font-bold ">Subtotal</h3>
          <p className="text-gray-400">
            shipping and taxes will be calculated at checkout
          </p>
        </div>
        <span className="font-bold text-lg">$ 9585</span>
      </div>
      <button className="w-full py-2 px-4 bg-slate-600 text-white rounded-lg hover:bg-slate-700">
        Checkout
      </button>
    </div>
  );
}
