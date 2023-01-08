import React, { useState, useEffect, useReducer, useContext } from "react";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../context/auth-context";

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
  const authCtx = useContext(AuthContext);
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
    }, 100);
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
    authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          label="E-Mail"
          id="email"
          type="email"
          value={emailState.value}
          isValid={emailState.isValid}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          value={passwordState.value}
          isValid={passwordState.isValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
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
