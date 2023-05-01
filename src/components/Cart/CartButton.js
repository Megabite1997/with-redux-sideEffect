import { useSelector } from "react-redux";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const cartItems = useSelector((state) => state.cart);

  const allQuantityCartItems = cartItems.reduce(
    (acc, curr) => acc + curr.quantity,
    0,
  );

  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{allQuantityCartItems}</span>
    </button>
  );
};

export default CartButton;
