import axios from "axios";

// API call using Axios package
export const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});
