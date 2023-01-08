import React from "react";
import classes from "./CartItem.module.css";
import Input from "../Input/Input";

const CartItem = (props) => {
  return (
    <div className={classes["cart-item"]}>
      <h2>Avatar 2</h2>
      <div className={classes.summary}>Avatar2 opis</div>
      <div className={classes.price}>$22.99</div>
      <div className={classes.amount}>x2</div>

      <footer className={classes.actions}>
        <Input type="button" value={"+"} />
        <Input type="button" value={"-"} />
      </footer>
    </div>
  );
};

export default CartItem;
