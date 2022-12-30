import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-slate-900 text-white">
      <div className="h-16 flex items-center space-x-20 max-w-7xl mx-auto">
        <div>
          <Link to="/">Logo</Link>
        </div>
        <div className="space-x-10 h-full flex justify-center items-center">
          <Link to="/">Home</Link>
          <Link to="/add-product">Add Product</Link>
          <Link to="/checkout">Checkout</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </div>
  );
}
