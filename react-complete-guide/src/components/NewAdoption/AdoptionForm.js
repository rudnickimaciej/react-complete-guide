import React, { useState } from "react";
import "./AdoptionForm.css";
import AdoptionStatus from "../../common/enums";
import mapStatusToEnum from '../../common/helpers'

const AdoptionForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: "Name",
    birthdate: Date.now,
    status: AdoptionStatus.adopted.id,
  });
  const handleAdoptionStatusChange = (event) => {
    setUserInput(prev=>{
      return {...prev, status: mapStatusToEnum(event.target.value)}
    })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAdoptionSubmit({ ...userInput });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-adoption__controls">
        <div className="new-adoption__control">
          <label> Name</label>
          <input
            type="text"
            onChange={(e) =>
              setUserInput((prev) => {
                return {  ...prev ,title: e.target.value};
              })
            }
            value={userInput.title}
          />
        </div>
        <div className="new-adoption__control">
          <label> Birthdate</label>
          <input
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
        <button type="submit"> Add Adoption</button>
      </div>
    </form>
  );
};

export default AdoptionForm;
