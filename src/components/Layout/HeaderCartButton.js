
import { useContext } from "react";

import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  // When Cart Context Changes this component will be reevaluated
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currrNumber,item)=>{
    return currrNumber + item.amount;
  },0)

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
