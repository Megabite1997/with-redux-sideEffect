import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    removeCart(state, action) {
      const uniqueItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      state.totalQuantity--;
      uniqueItem.quantity--;
      state.changed = true;
      if (uniqueItem.quantity === 0) {
        const getIndex = state.items.indexOf(uniqueItem);
        state.items.splice(getIndex, 1);
      }
    },

    addCart(state, action) {
      const { id, title, price, description } = action.payload;
      const existItemInCart = state.items.find((item) => item.id === id);
      state.totalQuantity++;
      state.changed = true;
      if (existItemInCart) {
        existItemInCart.quantity++;
      } else {
        state.items.push({ id, title, price, description, quantity: 1 });
      }
    },

    receivedCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
