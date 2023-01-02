import React from "react";
import Product from "../components/product/Product";
import ProductSort from "../components/product/ProductSort";

export default function Home() {
  return (
    <div className="max-w-7xl min-h-screen h-auto py-6 mx-auto px-2 sm:px-4">
      <ProductSort />
      <div className="grid px-4 sm:px-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 ">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
