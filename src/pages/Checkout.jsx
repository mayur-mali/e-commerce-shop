import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import OrderSummary from "../components/product/OrderSummary";

export default function Checkout() {
  const items = useSelector((state) => state.cart);
  const history = useHistory();
  const [price, setPrice] = useState(0);
  const firstName = useRef();
  const lastName = useRef();
  const billingAddress = useRef();
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

  const handleCheckout = (e) => {
    firstName.current.value = "";
    lastName.current.value = "";
    billingAddress.current.value = "";
    e.preventDefault();
    history.push("/");
    toast.success("order placed..!");
  };

  return (
    <div className="max-w-xl  mx-auto h-auto py-10 flex justify-center  items-center">
      {items.length === 0 ? (
        <h2 className="text-3xl font-medium">
          You don't have any pending orders
        </h2>
      ) : (
        <div className="py-8 bg-gray-50 border-2 border-slate-200 rounded-lg w-full">
          <form
            className="flex  flex-col px-8 space-y-6"
            onSubmit={(e) => handleCheckout(e)}
          >
            <div className="space-x-6 flex">
              <input
                type="text"
                className="px-4 py-2 w-full focus:outline-none border placeholder:capitalize"
                name="firstname"
                required
                placeholder="first name"
                ref={firstName}
              />
              <input
                type="text"
                name="lastname"
                placeholder="last name"
                required
                ref={lastName}
                className="px-4 py-2 w-full focus:outline-none border placeholder:capitalize"
              />
            </div>
            <input
              type="text"
              name="address"
              placeholder="billing address"
              required
              ref={billingAddress}
              className="px-4 py-2 w-full focus:outline-none border placeholder:capitalize"
            />
            <div className="p-4 border-dashed border-2 border-blue-200 rounded-lg">
              <h3 className="text-xl text-slate-500">Order Summary</h3>
              <hr className="mb-4 mt-2" />
              <div className="space-y-3 max-h-96 overflow-y-auto scrollbar-hide">
                {items.map((item) => (
                  <OrderSummary key={item.id} item={item} />
                ))}
              </div>
            </div>
            <div className="space-x-6 items-center justify-between flex">
              <button
                type="sumbit"
                className="px-4 py-2 focus:outline-none border bg-slate-700 text-white hover:bg-slate-900 transition-all duration-150 capitalize"
              >
                place order
              </button>
              <div className="py-2 px-4 border bg-slate-100">
                <h3>Total :${price}</h3>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
