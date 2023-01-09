import React from "react";

export default function OrderSummary(props) {
  const { title, price, qty, image } = props.item;

  return (
    <div className="p-2 border flex items-center space-x-4 rounded-lg">
      <div className="h-20 w-20 flex-none relative">
        <img className="h-full w-full absolute" src={image} alt="p" />
      </div>
      <div className="flex items-center">
        <h2 className="font-bold hover:text-yellow-700 h-full line-clamp-2 text-sm">
          {title}
        </h2>
        <div className="flex-none font-bold text-md">
          <h4>${price * qty}</h4>
          <span>Quantity :</span> <span>{qty}</span>
        </div>
      </div>
    </div>
  );
}
