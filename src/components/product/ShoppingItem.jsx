import React from "react";
import QuantityIncAndDecBtn from "./QuantityIncAndDecBtn";

export default function ShoppingItem() {
  return (
    <>
      <div className="p-2 flex space-x-4">
        <div className="h-32 w-32 flex-none relative">
          <img
            className="h-full w-full absolute"
            src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
            alt="p"
          />
        </div>
        <div className="flex w-full flex-col justify-between">
          <div className="flex w-full justify-between">
            <h2 className="font-bold max-w-[300px] text-justify hover:text-yellow-700 h-full line-clamp-2 text-sm">
              John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain
              Bracelet
            </h2>
            <span className="text-xs">$ 4105.00</span>
          </div>
          <div className="flex w-full justify-between">
            <QuantityIncAndDecBtn />
            <button className="capitalize text-blue-600 font-bold">
              remove
            </button>
          </div>
        </div>
      </div>
      <hr className="border border-dashed" />
    </>
  );
}
