import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart-slice";
import productItemSlice from "./productItem-slice";

const store = configureStore({
  reducer: { cart: cartSlice, productItem: productItemSlice },
});

export default store;
