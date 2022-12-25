import React, { useState } from "react";
import AdoptionForm from "./AdoptionForm";
import "./NewAdoption.css";

const NewAdoption = (props) => {
  const [formIdExpanded, setFormIdExpanded] = useState(false);

  const handleExpandButtonClick = (event) => {
    event.preventDefault();
    setFormIdExpanded(true)
  };
  const expandFormButton = (
    <div className="add-adoption__actions">
      <button onClick={handleExpandButtonClick} type="submit">
        {" "}
        Add Adoption
      </button>
    </div>
  );

  const saveAdoptionHandler = (newAdoption) => {
    const adoption = { ...newAdoption, id: Math.random().toString() };
    props.onAdoptionCreated(adoption);
  };
  return (
    <div className="new-adoption">
      {formIdExpanded !== true && expandFormButton}
      {formIdExpanded === true && (
        <AdoptionForm
          onAdoptionSubmit={saveAdoptionHandler}
          cancelAddAdoption={() => setFormIdExpanded(false)}
        />
      )}
    </div>
  );
};

export default NewAdoption;
