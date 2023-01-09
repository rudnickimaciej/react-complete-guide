import React, { useContext } from "react";
import Card from "../Card/Card";
import classes from "./Cart.module.css";
import ReactDOM from "react-dom";
import CartItem from "./CartItem";
import StoreContext from "../../../context/store-context";

const Cart = (props) => {
  const storeCtx = useContext(StoreContext);

  return (
    storeCtx.cartIsVisible && (
      <React.Fragment>
        {ReactDOM.createPortal(
          <div className={classes.backdrop} onClick={props.onConfirm} />,
          document.getElementById("backdrop-root")
        )}
        {ReactDOM.createPortal(
          <Card className={classes.modal}>
            {storeCtx.tickets.map((t) => (
              <CartItem ticket={t} />
            ))}

            <footer className={classes.actions}>
              <h1>
                Total:$
                {Math.floor(
                  storeCtx.tickets
                    .map((t) => t.movie.price * t.count)
                    .reduce((partialSum, a) => partialSum + a, 0)
                )}
              </h1>
              <button onClick={storeCtx.onHideCartEventHandler}>Cancel</button>
              <button onClick={props.onOrder}>Order</button>
            </footer>
          </Card>,
          document.getElementById("overlay-root")
        )}
      </React.Fragment>
    )
  );
};

export default Cart;
