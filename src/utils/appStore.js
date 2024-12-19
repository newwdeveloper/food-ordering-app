import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // Import your actual cart reducer

const appStore = configureStore({
  reducer: {
    cart: cartReducer, // Use the cart reducer from cartSlice here
  },
});

export default appStore;
