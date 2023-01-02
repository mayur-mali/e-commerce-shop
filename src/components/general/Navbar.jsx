import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-slate-900 text-white font-bold text-xl">
      <div className="min-h-[4rem] relative h-full px-4 flex items-center justify-between md:space-x-20 max-w-7xl mx-auto">
        <div>
          <Link to="/">Logo</Link>
        </div>
        <div className="space-x-10 h-full hidden md:flex justify-center items-center">
          <Link to="/">Home</Link>
          <Link to="/add-product">Add Product</Link>
          <Link to="/checkout">Checkout</Link>
          <Link to="/about">About</Link>
        </div>
        {show && (
          <div className="py-4 space-y-10 w-full h-screen left-0 md:hidden p-4 z-40 bg-slate-900 text-white top-0 flex flex-col text-center absolute">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 float-right cursor-pointer "
                onClick={() => setShow(false)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <Link to="/" className="mt-10">
              Home
            </Link>
            <Link to="/add-product">Add Product</Link>
            <Link to="/checkout">Checkout</Link>
            <Link to="/about">About</Link>
          </div>
        )}
        <div className="flex space-x-4">
          <Link to="/cart">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              Cart <span className="ml-2">2</span>
            </div>
          </Link>

          <div className="md:hidden block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
              onClick={() => setShow(true)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
