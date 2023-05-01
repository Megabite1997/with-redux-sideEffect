import { createSlice } from "@reduxjs/toolkit";

const productItemInitialState = [
  {
    title: "Test",
    price: 6,
    description: "This is a first product - amazing!",
  },
  {
    title: "Test 2",
    price: 7,
    description: "This is a second product - good!",
  },
];

const productItemSlice = createSlice({
  name: "productItem",
  initialState: productItemInitialState,
  reducers: {
    // addProductItem(state, action) {
    //   const { title, price, description } = action.payload;
    //   const isAlreadyInCart = state.find((item) => item.title === title);
    //   state.push({ title, price, description });
    // },
  },
});

export const productItemActions = productItemSlice.actions;

export default productItemSlice.reducer;
