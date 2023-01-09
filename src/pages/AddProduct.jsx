import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/productSlice";
import { Link, useHistory } from "react-router-dom";
export default function AddProduct() {
  const navigate = useHistory();
  const dispatch = useDispatch();
  const title = useRef();
  const description = useRef();
  const price = useRef();
  const ratiing = useRef();
  const addProduct = () => {
    const item = [
      {
        title: title.current.value,
        description: description.current.value,
        price: price.current.value,
        rating: ratiing.current.value,
        image: "https://i.dummyjson.com/data/products/1/1.jpg",
      },
    ];
    // console.log(item);
    localStorage.setItem("product", JSON.stringify(item));
    // dispatch(addItem(item));
  };
  return (
    <div className="max-w-xl  mx-auto h-auto py-20 flex justify-center  items-center">
      <div className="py-8 bg-gray-50 border rounded-lg w-full">
        <form className="flex  flex-col px-8 space-y-6">
          <input
            type="text"
            className="px-4 py-2 focus:outline-none border placeholder:capitalize"
            name="title"
            required
            ref={title}
            placeholder="title of product"
          />

          <textarea
            name="description"
            rows="5"
            placeholder="Description of product"
            required
            ref={description}
            className="px-4 py-2 focus:outline-none border placeholder:capitalize"
          ></textarea>
          <input
            type="number"
            name="price"
            placeholder="Price"
            required
            ref={price}
            className="px-4 py-2 focus:outline-none border placeholder:capitalize"
          />
          <input
            type="number"
            name="rating"
            placeholder="rating"
            required
            ref={ratiing}
            className="px-4 py-2 focus:outline-none border placeholder:capitalize"
          />
          <input
            type="file"
            name="product-img"
            className="block w-full text-sm text-slate-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-violet-700
          hover:file:bg-violet-100"
          />
          <Link to="/">
            <input
              type="button"
              value="add product"
              onClick={() => addProduct()}
              className="px-4 py-2 focus:outline-none border cursor-pointer bg-slate-700 text-white hover:bg-slate-900 transition-all duration-150 capitalize"
            />
          </Link>
        </form>
      </div>
    </div>
  );
}
