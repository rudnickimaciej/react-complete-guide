import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';
import styled from 'styled-components';

const FormControl =styled.div`
  margin: 0.5rem 0;

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props=>props.isEmptyStringValidation || props.isNotEmailValidation?'red':'#ccc'};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

&__validation{
  color:red
}
& input.error{
  border-color: red;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}
` 
const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [style, setStyle] = useState()
  const [isEmptyStringValidation, setIsEmptyStringValidation] = useState(false)
  const [isNotEmailValidation, setIsNotEmailValidation] = useState(false)
  
  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setStyle("error")
      setIsEmptyStringValidation(true)
      return
    }
    setIsEmptyStringValidation(false)

    if(!enteredValue.includes("@")){
      setStyle("error")
      setIsNotEmailValidation(true)
      return
    }
    setStyle("")
    setIsNotEmailValidation(false)
    props.onAddGoal(enteredValue);
    setEnteredValue("")
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl>
        <label>Course Goal</label>
        <input value ={enteredValue} className = {`${style}`} type="text" onChange={goalInputChangeHandler} />
        {isEmptyStringValidation && <p className='form-control__validation'> Cannot add empty goal!</p>}      
        {isNotEmailValidation && <p className='form-control__validation'> Not valid Email addres </p>}      
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
