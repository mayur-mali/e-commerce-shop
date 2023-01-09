import { toast } from "react-toastify";
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
    // fetch product from api
    setProducts(state, action) {
      state.data = action.payload;
    },
    //set differnt status
    setStatus(state, action) {
      state.status = action.payload;
    },
    // add new product
    addProduct(state, action) {
      const data = action.payload;
      return { data };
    },
    // delete product from store
    deleteProduct(state, action) {
      const data = state.data.filter((item) => item.id !== action.payload);
      toast.success("Product is remove from Store!");
      return { data };
    },
  },
});

export const { setProducts, setStatus, deleteProduct, addProduct } =
  productSlice.actions;
export default productSlice.reducer;
// fetching product via api
export function fetchProducts(sort) {
  return async function fetchProductThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await axiosInstance.get(`/products?sort=${sort}`);
      dispatch(setProducts(res.data));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (err) {
      toast.error(`error`);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

// add new product

export function addItem(item) {
  return async function addProductThunk(dispatch, getState) {
    try {
      const cart = getState();
      const res = await axiosInstance.post("/products", item);
      const products = [...cart.product.data, { ...res.data }];
      toast.success("New Product is added at the bottom!");
      dispatch(addProduct(products));
    } catch (err) {
      toast.error(`error`);
    }
  };
}
