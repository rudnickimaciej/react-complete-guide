import React, { useState } from "react";
import "./AdoptionForm.css";
import AdoptionStatus from "../../common/enums";

const AdoptionForm = (props) => {
  const [userInput, setUserInput] = useState({
    name: "Name",
    birtdate: "2022-04-12",
    status: AdoptionStatus.adopted.id,
  });
  const [adoptionStatus, setAdoptionStatus] = useState(
    AdoptionStatus.notAdopted.value
  );
  const handleAdoptionStatusChange = (event) => {
    setUserInput(prev=>{
      return {...prev, status:event.target.value}
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
                return { ...prev, name: e.target.value };
              })
            }
            value={userInput.name}
          />
        </div>
        <div className="new-adoption__control">
          <label> Birthdate</label>
          <input
            type="date"
            min="2000-01-01"
            max="2022-12-31"
            value={userInput.birthdate}
            onChange={(e) =>
              setUserInput((prev) => {
                return { ...prev, birtdate: new Date(e.target.value) };
              })
            }
          />
        </div>
        <div className="new-adoption__control">
          <label> Status</label>
          <select
            name="statuses"
            id="statuses"
            value={userInput.status}
            onChange={handleAdoptionStatusChange}
          >
            {Object.keys(AdoptionStatus).map((key) => (
              <option key={key} value={key}>
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
