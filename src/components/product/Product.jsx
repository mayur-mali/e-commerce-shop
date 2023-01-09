import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { add } from "../../store/cartSlice";
import { deleteProduct } from "../../store/productSlice";
export default function Product(props) {
  const dispatch = useDispatch();
  const { id, title, description, image, price, category } = props.data;

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };
  return (
    <div className="flex flex-col justify-between">
      <div className=" rounded-lg flex flex-col h-96 overflow-hidden border p-2">
        <div className="py-2  flex justify-between items-center w-full  px-4 h-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="  cursor-pointer left-0 w-6 h-6"
            onClick={() => handleDelete(id)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg>
        </div>
        <img
          src={image}
          alt={title}
          className=" h-80 top-3 w-full object-contain"
        />
      </div>
      <div className="">
        <Link to={`/product/${id}`}>
          <h2 className="font-bold hover:text-yellow-700 h-full line-clamp-2 text-lg">
            {title}
          </h2>
        </Link>
      </div>
      <p className="line-clamp-1 text-slate-500 font-bold capitalize">
        {description}
      </p>
      <div className="flex items-center justify-between ">
        <h4 className="capitalize text-gray-400">{category}</h4>
        <p className="font-bold text-lg">At Just $ {price} </p>
      </div>
      <button
        onClick={() => handleAdd(props.data)}
        className="h-10 font-bold rounded-full px-4 border flex justify-center items-center py-2 border-slate-700 hover:bg-blue-600 cursor-pointer hover:text-white"
      >
        Add to Cart
      </button>
    </div>
  );
}
