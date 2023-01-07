import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../../store/cartSlice";
import QuantityIncAndDecBtn from "./QuantityIncAndDecBtn";

export default function ShoppingItem(props) {
  const { id, image, title, price } = props.item;
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(remove(id));
  };

  return (
    <>
      <div className="p-2 flex space-x-4">
        <div className="h-32 w-32 flex-none relative">
          <img className="h-full w-full absolute" src={image} alt={title} />
        </div>
        <div className="flex w-full flex-col justify-between">
          <div className="flex w-full justify-between">
            <h2 className="font-bold max-w-[300px] text-justify hover:text-yellow-700 h-full line-clamp-2 text-sm">
              {title}
            </h2>
            <span className="text-xs">$ {price}</span>
          </div>
          <div className="flex w-full justify-between">
            <QuantityIncAndDecBtn />
            <button
              onClick={() => handleRemoveFromCart(id)}
              className="capitalize text-blue-600 font-bold"
            >
              remove
            </button>
          </div>
        </div>
      </div>
      <hr className="border border-dashed" />
    </>
  );
}
