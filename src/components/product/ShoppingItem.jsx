import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add, remove, removeOne } from "../../store/cartSlice";

export default function ShoppingItem(props) {
  const { title, price, image, id, qty } = props.item;
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  const handleAdd = (product) => {
    dispatch(add(product));
  };
  const handleRemoveOne = (product) => {
    dispatch(removeOne(product));
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="p-2 flex space-x-4">
        <div className="h-32 w-32 flex-none relative">
          <img className="h-full w-full absolute" src={image} alt="p" />
        </div>
        <div className="flex w-full flex-col justify-between">
          <div className="flex w-full justify-between">
            <h2 className="font-bold max-w-[300px] text-justify hover:text-yellow-700 h-full line-clamp-2 text-sm">
              {title}
            </h2>
            <span className="text-xs">$ {price}</span>
          </div>
          <div className="flex w-full justify-between">
            <div className="py-2 px-4 w-32 flex justify-between items-center rounded-full bg-slate-100">
              <span
                onClick={() =>
                  qty <= 1 ? handleRemove(id) : handleRemoveOne(props.item)
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </span>
              <span>{qty}</span>
              <span onClick={() => handleAdd(props.item)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              </span>
            </div>
            {totalPrice}
            <button
              onClick={() => handleRemove(id)}
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
