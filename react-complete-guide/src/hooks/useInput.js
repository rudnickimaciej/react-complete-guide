import { useState } from "react";

const useInput = (validationCallback) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueTouched, setEnteredValueTouched] = useState(false);

  const enteredValueIsValid = validationCallback(enteredValue);

  const onInputChangeHandler = (event) => {
    setEnteredValueTouched(true);
    setEnteredValue(event.target.value);
  };

  const onInputBlurHandler = (event) => {
    setEnteredValueTouched(true);
  };

  const reset = () => {
    setEnteredValueTouched(false);
    setEnteredValue("");
  };

  return {
    enteredValue,
    enteredValueTouched,
    enteredValueIsValid,
    onInputChangeHandler,
    onInputBlurHandler,
    reset,
  };
};

export default useInput;
