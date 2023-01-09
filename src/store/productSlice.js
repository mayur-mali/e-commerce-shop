import { axiosInstance } from "../config";

const { createSlice } = require("@reduxjs/toolkit");
export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    addProduct(state, action) {
      const data = action.payload;
      return { data };
    },
    deleteProduct(state, action) {
      const data = state.data.filter((item) => item.id !== action.payload);
      return { data };
    },
  },
});

export const { setProducts, setStatus, deleteProduct, addProduct } =
  productSlice.actions;
export default productSlice.reducer;

export function fetchProducts(sort) {
  return async function fetchProductThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await axiosInstance.get(`/products?sort=${sort}`);
      dispatch(setProducts(res.data));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (err) {
      console.log(err);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

export function addItem(item) {
  return async function addProductThunk(dispatch, getState) {
    try {
      const cart = getState();
      // console.log(cart.product.data);
      const res = await axiosInstance.post("/products", item);
      const products = [...cart.product.data, { ...res.data }];
      console.log(products);
      dispatch(addProduct(products));
    } catch (err) {
      console.log(err);
    }
  };
}
