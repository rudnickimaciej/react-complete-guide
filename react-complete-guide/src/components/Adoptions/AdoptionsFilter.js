import React from "react";
import AdoptionStatus
 from "../../common/enums";
import "./AdoptionsFilter.css";

const AdoptionsFilter = (props) => {
  return (
    <div className="adoptions-filter">
      <div className="adoptions-filter__control">
        <label>Filter by status</label>
        <select onChange={props.onAdoptionsFiltedChange}>
        {Object.keys(AdoptionStatus).map((key) => (
              <option key={key} value={AdoptionStatus[key].id}>
                {AdoptionStatus[key].name}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default AdoptionsFilter;
