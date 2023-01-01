import React from "react";
import { Link } from "react-router-dom";

export default function Product({ id }) {
  return (
    <div className="space-y-4">
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
          src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
          alt="product"
          className="absolute h-full w-full object-contain"
        />
      </div>
      <div className="space-y-2">
        <Link to={`/product/${id}`}>
          <h2 className="font-bold hover:text-yellow-700 h-full line-clamp-2 text-lg">
            John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain
            Bracelet
          </h2>
        </Link>
        <p className="line-clamp-1 text-slate-500 font-bold capitalize">
          rom our Legends Collection, the Naga was inspired by the mythical
          water dragon that protects the ocean's pearl. Wear facing inward to be
          bestowed with love and abundance, or outward for protection.
        </p>
        <div className="flex items-center justify-between ">
          <h4 className="capitalize text-gray-400">jewelery</h4>
          <p className="font-bold text-lg">At Just $ 458.00 </p>
        </div>
      </div>
      <div className="h-10 font-bold rounded-full px-4 border flex justify-center items-center py-2 border-slate-700 hover:bg-blue-600 cursor-pointer hover:text-white">
        Add to Cart
      </div>
    </div>
  );
}
