import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingScreen from "../components/general/LoadingScreen";
import Product from "../components/product/Product";
import { STATUSES } from "../store/productSlice";

import { fetchProducts, deleteItems } from "../store/productSlice";

export default function Home() {
  const [sort, setSort] = useState("desc");
  const [sortBtnShow, setSortBtnShow] = useState(false);

  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts(sort));
  }, [sort]);
  return (
    <>
      {status === STATUSES.LOADING ? (
        <LoadingScreen />
      ) : (
        <div className="max-w-7xl min-h-screen h-auto py-6 mx-auto px-2 sm:px-4">
          <div className="h-20   mt-2 flex justify-end items-center">
            <div
              className="p-2 cursor-pointer relative flex items-center px-4 bg-gray-300 rounded-full"
              onClick={() => setSortBtnShow(!sortBtnShow)}
            >
              sort by
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
              {sortBtnShow && (
                <div className="absolute px-2 w-44 divide-y-2 divide-dashed bg-green-50 capitalize border rounded-xl right-0 top-12 z-50">
                  <h2
                    onClick={() => setSort("asc")}
                    className="font-bold py-4 text-md"
                  >
                    sort by high price
                  </h2>

                  <h2
                    onClick={() => setSort("desc")}
                    className="font-bold py-4 text-md"
                  >
                    sort by low price
                  </h2>
                </div>
              )}
            </div>
          </div>
          <div className="grid px-4 sm:px-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 ">
            {products?.map((item) => (
              <Product data={item} key={item.id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
