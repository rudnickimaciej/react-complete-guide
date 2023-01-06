import React, { useState, useEffect, useReducer } from "react";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (state, action) => {
  //funkcja reducer jest zdefiniowana poza komponentem Login, ponieważ nie wymaga ona niczego co znajduje się w tym komponencie
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  //funkcja reducer jest zdefiniowana poza komponentem Login, ponieważ nie wymaga ona niczego co znajduje się w tym komponencie
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};
const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });

  useEffect(() => {
    //useEffect jest odpalany PO aktualizacjach stanu, dlatego można śmiało umieścić tutaj setFormIsValid ponieważ mamy pewność, że doszło do aktualizacji stanów email i phone
    const identifier = setTimeout(() => {
      console.log("chcecking form validity");
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [emailState.isValid, passwordState.isValid]); //dzięku temu, że używamy tutaj tylko atrybutu IsValid zamiast całego stanu
  //to useEffect nie jest niepotrzebnie odpalany gdy do hasła > 6 dodawane są kolejne znaki albo gdy do mejla z @ dodawane są kolejne znaki

  const emailChangeHandler = (event) =>
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

  const passwordChangeHandler = (event) =>
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });

  const validateEmailHandler = () => dispatchEmail({ type: "INPUT_BLUR" });

  const validatePasswordHandler = () =>
    dispatchPassword({ type: "INPUT_BLUR" });

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
