import React, { useState, useContext } from "react";
import classes from "./MovieItem.module.css";
import Input from "../UI/Input/Input";
import StoreContext from "../../context/store-context";

const MovieItem = (props) => {
  const [count, setCount] = useState(1);
  const storeCtx = useContext(StoreContext);

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    storeCtx.onAddTicket(props.movie, count);
  };
  return (
    <div className={classes.movie}>
      <h3>{props.movie.title}</h3>
      <div className={classes.description}>{props.movie.description}</div>
      <div className={classes.price}>${props.movie.price}</div>
      <form className={classes.form} onSubmit={onFormSubmitHandler}>
        <div>
          <Input
            value={count}
            onCountChange={(event) => setCount(event.target.value)}
            label={"Amount"}
          />
        </div>
        <button> + Add </button>
      </form>
    </div>
  );
};

export default MovieItem;
