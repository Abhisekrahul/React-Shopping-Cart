import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../CartSlice/Cart";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
export default store;
