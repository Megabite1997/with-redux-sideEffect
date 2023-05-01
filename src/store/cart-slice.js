import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    increment(state, action) {
      const specifyItem = state.find(
        (item) => item.title === action.payload.title,
      );
      specifyItem.quantity++;
    },

    decrement(state, action) {
      const specifyItem = state.find(
        (item) => item.title === action.payload.title,
      );

      specifyItem.quantity--;

      if (specifyItem.quantity === 0) {
        const getIndex = state.indexOf(specifyItem);
        state.splice(getIndex, 1);
      }
    },

    addCart(state, action) {
      const { title, price, description } = action.payload;

      const existItemInCart = state.find((item) => item.title === title);

      if (existItemInCart) {
        existItemInCart.quantity++;
      } else {
        state.push({ title, price, description, quantity: 1 });
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
