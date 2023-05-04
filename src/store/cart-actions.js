import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    // dispatch(
    //   uiActions.showNotification({
    //     status: "fetching",
    //     title: "Fetchnig...",
    //     message: "Fetching cart data!",
    //   }),
    // );

    const fetchRequest = async () => {
      const response = await fetch(
        "https://react-redux-8e5a7-default-rtdb.firebaseio.com/cart.json",
      );

      if (!response.ok) {
        throw new Error("Fetching cart data failed.");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchRequest();

      dispatch(cartActions.receivedCart(cartData));

      // dispatch(
      //   uiActions.showNotification({
      //     status: "success",
      //     title: "Success!",
      //     message: "Fetched cart data successfully!",
      //   }),
      // );
    } catch (error) {
      console.error(error);
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetched cart data failed!",
        }),
      );
    }
  };
};

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
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        },
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
