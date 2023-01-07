import React, { useEffect, useState } from "react";
import Product from "../components/product/Product";
import ProductSort from "../components/product/ProductSort";
import { axiosInstance } from "../config";

export default function Home() {
  const [product, setProducts] = useState([]);
  const [sort, setSort] = useState(null);

  useEffect(() => {
    //dispatch(fetchProducts());

    const fetchProducts = async () => {
      const res = await axiosInstance.get("/products?sort=desc");
      setProducts(res.data);
    };
    fetchProducts();
  }, []);
  return (
    <div className="max-w-7xl min-h-screen h-auto py-6 mx-auto px-2 sm:px-4">
      <ProductSort />
      <div className="grid px-4 sm:px-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 ">
        {product.map((item) => (
          <Product data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
