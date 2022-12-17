import React, { useState } from "react";
import AdoptionsFilter from "./AdoptionsFilter";
import AdoptionItem from "./AdoptionItem";
import Card from "../UI/Card";
import "./Adoptions.css";
import AdoptionStatus from "../../common/enums";

const Adoptions = (props) => {
  const [filteredAdoptions, setFilteredAdoptions] = useState(
    props.adoptions.filter((a) => {
      return a.status.id === AdoptionStatus.adopted.id;
    })
  );

  const onAdoptionsFiltedChange = (e) => {
    setFilteredAdoptions(() => {
      return props.adoptions.filter((a) => {
        return a.status.id === e.target.value;
      });
    });
  };
  return (
    <Card className="adoptions">
      <AdoptionsFilter
        onAdoptionsFiltedChange={onAdoptionsFiltedChange}
        initialValue={AdoptionStatus.adopted}
      />
      {filteredAdoptions.length === 0 && <p> Not adoptions in this status</p>}
      {filteredAdoptions.length > 0 && filteredAdoptions.map((a) => (
        <AdoptionItem
          key={a.id}
          title={a.title}
          status={a.status.name} 
          birthdate={a.birthdate}
        />
      ))}
  
    </Card>
  );
};

export default Adoptions;
