import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { addItem } from "../store/productSlice";
export default function AddProduct(props) {
  const dispatch = useDispatch();
  const title = useRef();
  const description = useRef();
  const price = useRef();
  const ratiing = useRef();
  const addProduct = (e) => {
    e.preventDefault();
    let item = {
      title: title.current.value,
      description: description.current.value,
      price: price.current.value,
      rating: ratiing.current.value,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",
    };
    dispatch(addItem(item));
    title.current.value = "";
    description.current.value = "";
    price.current.value = "";
    ratiing.current.value = "";
    props.setAddProduct(false);
  };
  return (
    <div className="max-w-xl z-50 mx-auto h-auto py-20 flex justify-center  items-center">
      <div className="py-8 bg-gray-50 text-black border rounded-lg w-full">
        <form
          className="flex  flex-col px-8 space-y-6"
          onSubmit={(e) => addProduct(e)}
        >
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

          <button className="px-4 py-2 focus:outline-none border cursor-pointer bg-slate-700 text-white hover:bg-slate-900 transition-all duration-150 capitalize">
            add product
          </button>
        </form>
      </div>
    </div>
  );
}
