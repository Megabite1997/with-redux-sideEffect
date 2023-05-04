import { useSelector, useDispatch } from "react-redux";
import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const distpatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const allQuantityCartItems = cartItems?.reduce(
    (acc, curr) => acc + curr.quantity,
    0,
  );

  const toggleCartHandler = () => {
    distpatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{allQuantityCartItems}</span>
    </button>
  );
};

export default CartButton;
