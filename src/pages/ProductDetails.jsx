import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingScreen from "../components/general/LoadingScreen";
import AddToCartBtn from "../components/product/AddToCartBtn";
import { axiosInstance } from "../config";

export default function ProductDetails() {
  const { productid } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoding] = useState(false);

  useEffect(() => {
    setLoding(true);
    const fetchProduct = async () => {
      const res = await axiosInstance.get(`/products/${productid}`);
      setProduct(res.data);
      setLoding(false);
    };
    fetchProduct();
  }, [productid]);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="max-w-7xl my-10 mx-auto" key={product.id}>
          <div className="grid gap-5 px-4 grid-cols-1 md:grid-cols-2">
            <div className="col-span-1 ">
              <div className="aspect-h-2 border aspect-w-2 sm:aspect-h-4 sm:aspect-w-6 md:aspect-h-5 md:aspect-w-5 rounded-xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="col-span-1 space-y-5">
              <h2 className="text-gray-700 font-bold text-2xl md:text-4xl">
                {product.title}
              </h2>
              <p className=" text-slate-400 text-lg font-normol capitalize">
                {product.description}
              </p>
              <h4 className="capitalize text-gray-400">{product.category}</h4>
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
              </div>
              <hr className="border-2" />
              <div className="space-y-8">
                <div className="text-4xl font-medium"> $ {product.price}</div>
                <div className="w-full md:w-56">
                  <AddToCartBtn item={product} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
