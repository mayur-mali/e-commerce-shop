import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../../store/cartSlice";

export default function AddToCartBtn(props) {
  const dispatch = useDispatch();
  const handleAdd = (product) => {
    dispatch(add(product));
  };
  return (
    <>
      <div
        onClick={() => handleAdd(props.item)}
        className="h-10 mt-5 font-bold rounded-full px-4 border flex justify-center items-center py-2 border-slate-700 hover:bg-blue-600 cursor-pointer hover:text-white"
      >
        Add to Cart
      </div>
    </>
  );
}
