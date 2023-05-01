import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";
import productItemSlice from "./productItem-slice";

const store = configureStore({
  reducer: { ui: uiSlice, cart: cartSlice, productItem: productItemSlice },
});

export default store;
