import { toast } from "react-toastify";
const { createSlice } = require("@reduxjs/toolkit");
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // add product to cart
    add(state, action) {
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state[itemIndex].qty += 1;
        toast.success(`Item Quantity Increment By ${state[itemIndex].qty}`);
      } else {
        const product = action.payload;
        state.push({ ...product, qty: 1 });
        toast.success("🦄 Item is added to Cart!");
      }
    },

    // remove product from cart
    remove(state, action) {
      toast.success("Item is Remove from Cart!");
      return state.filter((item) => item.id !== action.payload);
    },

    // decrement quntity of product added in cart
    removeOne(state, action) {
      const itemIndex_dec = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state[itemIndex_dec].qty >= 1) {
        state[itemIndex_dec].qty -= 1;
        toast.success(`Item Quantity Decrement By ${state[itemIndex_dec].qty}`);
      } else if (state[itemIndex_dec].qty === 1) {
        return state.filter((item) => item.id !== action.payload.id);
      }
    },
  },
});

export const { add, remove, removeOne } = cartSlice.actions;
export default cartSlice.reducer;
