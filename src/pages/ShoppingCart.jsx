import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EmptyCart from "../components/general/EmptyCart";
import ShoppingItem from "../components/product/ShoppingItem";
export default function ShoppingCart() {
  const items = useSelector((state) => state.cart);
  const [price, setPrice] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const subTotal = () => {
    let price = 0;
    items.map((item) => {
      price = item.price * item.qty + price;
    });
    setPrice(price);
  };
  useEffect(() => {
    subTotal();
  }, [subTotal]);

  return (
    <div className="max-w-2xl px-4 space-y-4 py-8 w-full mx-auto">
      {items.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <h2 className="text-4xl text-center font-bold text-slate-800">
            Shopping Cart
            <hr className="my-4 border-2" />
          </h2>
          <div className=" space-y-4">
            {items.map((item) => (
              <ShoppingItem item={item} i={items} key={item.id} />
            ))}
          </div>
          <div className="flex w-full  justify-between">
            <div>
              <h3 className="text-xl uppercase font-bold ">Subtotal</h3>
              <p className="text-gray-400">
                shipping and taxes will be calculated at checkout
              </p>
            </div>
            <span className="font-bold text-lg">$ {price}</span>
          </div>
          <button className="w-full py-2 px-4 bg-slate-600 text-white rounded-lg hover:bg-slate-700">
            Checkout
          </button>
        </>
      )}
    </div>
  );
}
