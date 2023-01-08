import StoreContext from "../../context/store-context";
import classes from "./CartButton.module.css";
import React, { useContext } from "react";
const CartButton = () => {
  const storeCtx = useContext(StoreContext);
  return (
    <div className={classes.button} onClick={storeCtx.onShowCartEventHandler}>
      <span className={classes.icon}>&#8472; </span>
      Your Cart
      <span className={classes.badge}>{storeCtx.tickets.length} </span>
    </div>
  );
};

export default CartButton;
