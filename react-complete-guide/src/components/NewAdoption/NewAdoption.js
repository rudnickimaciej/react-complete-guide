import React from "react";
import AdoptionForm from "./AdoptionForm";
import "./NewAdoption.css";

const NewAdoption = (props) => {
  const saveAdoptionHandler = (newAdoption) => {
    const adoption = { ...newAdoption, id: Math.random().toString() };
    console.log(adoption)
    props.onAdoptionCreated(adoption)
  };
  return (
    <div className="new-adoption">
      <AdoptionForm onAdoptionSubmit = {saveAdoptionHandler} />
    </div>
  );
};

export default NewAdoption;
