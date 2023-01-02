import React from "react";
import OrderSummary from "../components/product/OrderSummary";

export default function Checkout() {
  return (
    <div className="max-w-xl  mx-auto h-auto py-10 flex justify-center  items-center">
      <div className="py-8 bg-gray-50 border-2 border-slate-200 rounded-lg w-full">
        <form className="flex  flex-col px-8 space-y-6">
          <div className="space-x-6 flex">
            <input
              type="text"
              className="px-4 py-2 w-full focus:outline-none border placeholder:capitalize"
              name="firstname"
              placeholder="first name"
            />
            <input
              type="text"
              name="lastname"
              placeholder="last name"
              className="px-4 py-2 w-full focus:outline-none border placeholder:capitalize"
            />
          </div>
          <input
            type="text"
            name="address"
            placeholder="billing address"
            className="px-4 py-2 w-full focus:outline-none border placeholder:capitalize"
          />
          <div className="p-4 border-dashed border-2 border-blue-200 rounded-lg">
            <h3 className="text-xl text-slate-500">Order Summary</h3>
            <hr className="mb-4 mt-2" />
            <div className="space-y-3 max-h-96 overflow-y-auto scrollbar-hide">
              <OrderSummary />
              <OrderSummary />
            </div>
          </div>
          <div className="space-x-6 items-center justify-between flex">
            <input
              type="button"
              value="place order"
              className="px-4 py-2 focus:outline-none border bg-slate-700 text-white hover:bg-slate-900 transition-all duration-150 capitalize"
            />
            <div className="py-2 px-4 border bg-slate-100">
              <h3>Total :$1014</h3>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
