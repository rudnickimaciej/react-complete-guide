import React from "react";

import "./AdoptionsFilter.css";

const AdoptionsFilter = (props) => {
  return (
    <div className="adoptions-filter">
      <div className="adoptions-filter__control">
        <label>Filter by status</label>
        <select onChange={props.onAdoptionsFiltedChange}>
          <option value="adopted">Adopted</option>
          <option value="duringadoption">During Adoption</option>
          <option value="notadopted">Not Adopted</option>
        </select>
      </div>
    </div>
  );
};

export default AdoptionsFilter;
