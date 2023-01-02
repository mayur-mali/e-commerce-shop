import React from "react";

export default function OrderSummary() {
  return (
    <div className="p-2 border flex items-center space-x-4 rounded-lg">
      <div className="h-20 w-20 flex-none relative">
        <img
          className="h-full w-full absolute"
          src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
          alt="p"
        />
      </div>
      <div className="flex items-center">
        <h2 className="font-bold hover:text-yellow-700 h-full line-clamp-2 text-sm">
          John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain
          Bracelet
        </h2>
        <div className="flex-none font-bold text-md">
          <h4>$4005.00</h4>
          <span>Quantity :</span> <span>2</span>
        </div>
      </div>
    </div>
  );
}
