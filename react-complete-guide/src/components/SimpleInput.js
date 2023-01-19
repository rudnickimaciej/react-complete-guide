import useInput from "../hooks/useInput";

const SimpleInput = (props) => {
  const addressValidationFunction = (value) => {
    if (value.length > 5) return true;
    else return false;
  };

  const emailValidationFunction = (value) => {
    if (value.includes("@")) return true;
    else return false;
  };

  const {
    enteredValue: enteredEmail,
    enteredValueTouched: enteredEmailTouched,
    enteredValueIsValid: enteredEmailIsValid,
    onInputChangeHandler: onEmailInputChangeHandler,
    onInputBlurHandler: onEmailInputBlurHandler,
    reset: resetEnteredEmail,
  } = useInput(emailValidationFunction);

  const {
    enteredValue: enteredAddres,
    enteredValueTouched: enteredAddresTouched,
    enteredValueIsValid: enteredAddresIsValid,
    onInputChangeHandler: onAddressInputChangeHandler,
    onInputBlurHandler: onAddressInputBlurHandler,
    reset: resetEnteredAddress,
  } = useInput(addressValidationFunction);

  const formIsValid = enteredEmailIsValid & enteredAddresIsValid;

  const onFormSubmissionHandler = (event) => {
    event.preventDefault();
    // setEnteredEmailTouched(true);

    if (!formIsValid) return;

    resetEnteredEmail();
    resetEnteredAddress();
  };
  return (
    <form onSubmit={onFormSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Email</label>
        <input
          value={enteredEmail}
          onChange={onEmailInputChangeHandler}
          onBlur={onEmailInputBlurHandler}
          type="email"
          id="email"
        />
      </div>
      {!enteredEmailIsValid && enteredEmailTouched && (
        <p className="error-text"> Email must contain @!</p>
      )}

      <div className="form-control">
        <label htmlFor="name">Address</label>
        <input
          value={enteredAddres}
          onChange={onAddressInputChangeHandler}
          onBlur={onAddressInputBlurHandler}
          type="text"
          id="email"
        />
      </div>
      {!enteredAddresIsValid && enteredAddresTouched && (
        <p className="error-text"> Address must be longer than 5 characters</p>
      )}

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
