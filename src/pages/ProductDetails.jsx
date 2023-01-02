import React from "react";
import AddToCartBtn from "../components/product/AddToCartBtn";
import QuantityIncAndDecBtn from "../components/product/QuantityIncAndDecBtn";
export default function ProductDetails() {
  return (
    <div className="max-w-7xl my-10 mx-auto">
      <div className="grid gap-5 px-4 grid-cols-1 md:grid-cols-2">
        <div className="col-span-1 ">
          <div className="aspect-h-2 border aspect-w-2 sm:aspect-h-4 sm:aspect-w-6 md:aspect-h-5 md:aspect-w-5 rounded-xl overflow-hidden">
            <img
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              alt="product"
              className="object-contain"
            />
          </div>
        </div>
        <div className="col-span-1 space-y-5">
          <h2 className="text-gray-700 font-bold text-2xl md:text-4xl">
            John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain
            Bracelet
          </h2>
          <p className=" text-slate-400 text-lg font-normol capitalize">
            rom our Legends Collection, the Naga was inspired by the mythical
            water dragon that protects the ocean's pearl. Wear facing inward to
            be bestowed with love and abundance, or outward for protection.
          </p>
          <h4 className="capitalize text-gray-400">jewelery</h4>
          <div className="flex items-center space-x-1 w-auto ">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#54B435"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
                key={i}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            ))}
            <span className="text-2xl">4.6</span>
          </div>
          <hr className="border-2" />
          <div className="space-y-8">
            <div className="text-4xl font-medium"> $950.12</div>
            <QuantityIncAndDecBtn />
            <div className="w-full md:w-56">
              <AddToCartBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
