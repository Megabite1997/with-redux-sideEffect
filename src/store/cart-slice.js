import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    increment(state, action) {
      const specifyItem = state.find((item) => item.id === action.payload.id);
      specifyItem.quantity++;
    },

    removeCart(state, action) {
      const specifyItem = state.find((item) => item.id === action.payload.id);
      specifyItem.quantity--;
      if (specifyItem.quantity === 0) {
        const getIndex = state.indexOf(specifyItem);
        state.splice(getIndex, 1);
      }
    },

    addCart(state, action) {
      const { id, title, price, description } = action.payload;
      const existItemInCart = state.find((item) => item.id === id);
      if (existItemInCart) {
        existItemInCart.quantity++;
      } else {
        state.push({ id, title, price, description, quantity: 1 });
      }
    },
  },
});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      }),
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-redux-8e5a7-default-rtdb.firebaseio.com/cart.json",
        { method: "PUT", body: JSON.stringify(cart) },
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        }),
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sent cart data failed!",
        }),
      );
    }
  };
};

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
