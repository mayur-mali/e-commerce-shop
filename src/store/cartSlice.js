const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state[itemIndex].qty += 1;
      } else {
        const product = action.payload;
        state.push({ ...product, qty: 1 });
      }
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    removeOne(state, action) {
      const itemIndex_dec = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state[itemIndex_dec].qty >= 1) {
        state[itemIndex_dec].qty -= 1;
      } else if (state[itemIndex_dec].qty === 1) {
        return state.filter((item) => item.id !== action.payload.id);
      }
    },
  },
});

export const { add, remove, removeOne } = cartSlice.actions;
export default cartSlice.reducer;
