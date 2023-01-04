import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { add } from "../../store/cartSlice";
export default function Product(props) {
  const dispatch = useDispatch();
  const { id, title, description, image, price, category } = props.data;
  const handleAdd = (product) => {
    dispatch(add(product));
  };
  return (
    <div className="flex flex-col justify-between">
      <div className="relative rounded-lg h-80 overflow-hidden border p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 absolute right-2 cursor-pointer z-40"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>

        <img
          src={image}
          alt={title}
          className="absolute h-full w-full object-contain"
        />
      </div>
      <div className="">
        <Link to={`/product/${id}`}>
          <h2 className="font-bold hover:text-yellow-700 h-full line-clamp-2 text-lg">
            {title}
          </h2>
        </Link>
      </div>
      <p className="line-clamp-1 text-slate-500 font-bold capitalize">
        {description}
      </p>
      <div className="flex items-center justify-between ">
        <h4 className="capitalize text-gray-400">{category}</h4>
        <p className="font-bold text-lg">At Just $ {price} </p>
      </div>
      <button
        onClick={() => handleAdd(props.data)}
        className="h-10 font-bold rounded-full px-4 border flex justify-center items-center py-2 border-slate-700 hover:bg-blue-600 cursor-pointer hover:text-white"
      >
        Add to Cart
      </button>
    </div>
  );
}
