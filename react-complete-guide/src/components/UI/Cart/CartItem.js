import React, { useContext } from "react";
import classes from "./CartItem.module.css";
import Input from "../Input/Input";
import StoreContext from "../../../context/store-context";

const CartItem = (props) => {
  const storeCtx = useContext(StoreContext);
  return (
    <div className={classes["cart-item"]}>
      <h2>{props.ticket.movie.title}</h2>
      <div className={classes.summary}>{props.ticket.movie.description}</div>
      <div className={classes.price}>${props.ticket.movie.price}</div>
      <div className={classes.amount}>x{props.ticket.count}</div>

      <footer className={classes.actions}>
        <Input
          onClick={() => storeCtx.onAddTicket(props.ticket.movie, 1)}
          type="button"
          value={"+"}
        />
        <Input
          onClick={() => storeCtx.onDeleteTicket(props.ticket.movie.id)}
          type="button"
          value={"-"}
        />
      </footer>
    </div>
  );
};

export default CartItem;
