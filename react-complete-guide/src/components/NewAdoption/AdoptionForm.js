import React, { useState,useRef } from "react";
import "./AdoptionForm.css";
import AdoptionStatus from "../../common/enums";
import mapStatusToEnum from "../../common/helpers";
import ErrorModal
 from "../UI/ErrorModal";
const AdoptionForm = (props) => {

  const titleRef = useRef();
  const [userInput, setUserInput] = useState({
    birthdate: null,
    status: mapStatusToEnum(AdoptionStatus["adopted"].id),
  });

  const [error, setError] = useState();
  const handleAdoptionStatusChange = (event) => {
    setUserInput((prev) => {
      return { ...prev, status: mapStatusToEnum(event.target.value) };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(userInput);
    if (titleRef.current.value.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Name cannot be empty!",
      });
      return;
    }
    if (userInput.birthdate === null) {
      setError({
        title: "Invalid date",
        message: "Date cannot be empty!",
      });
      return;
    }
    props.onAdoptionSubmit({ ...userInput,title:titleRef.current.value });
    setUserInput({
      birthdate: null,
      status: AdoptionStatus.adopted.id,
    });
  };

  return (
    <>
       {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm ={()=>setError(null)}
        />
      )}
      <form onSubmit={submitHandler}>
        <div className="new-adoption__controls">
          <div className={`new-adoption__control`}>
            <label> Name</label>
            <input
              className={error ? "error" : ""}
              type="text"
              ref ={titleRef}
            />
          </div>
          <div className="new-adoption__control">
            <label> Birthdate</label>
            <input
              className={error ? "error" : ""}
              type="date"
              min="2000-01-01"
              max="2022-12-31"
              onChange={(e) =>
                setUserInput((prev) => {
                  return { ...prev, birthdate: new Date(e.target.value) };
                })
              }
            />
          </div>
          <div className="new-adoption__control">
            <label> Status</label>
            <select
              name="statuses"
              id="statuses"
              onChange={handleAdoptionStatusChange}
            >
              {Object.keys(AdoptionStatus).map((key) => (
                <option key={key} value={AdoptionStatus[key].id}>
                  {AdoptionStatus[key].name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="add-adoption__actions">
          <button onClick={props.cancelAddAdoption} type="submit">
            {" "}
            Cancel
          </button>
          <button type="submit"> Add</button>
        </div>
      </form>
    </>
  );
};

export default AdoptionForm;
