import React from "react";
import AdoptionsFilter from "./AdoptionsFilter";
import AdoptionItem from "./AdoptionItem";
import Card from "../UI/Card";
import "./Adoptions.css";

const Adoptions = (props) => {

  const onAdoptionsFiltedChange = (e) => {
    console.log("filter! " + e.target.value)
  }
  return (
    <Card className="adoptions">
      <AdoptionsFilter onAdoptionsFiltedChange = {onAdoptionsFiltedChange}/>
      <AdoptionItem
        title={props.items[0].title}
        status={props.items[0].status}
        birthdate={props.items[0].birthdate}
      />
      <AdoptionItem
        title={props.items[1].title}
        status={props.items[1].status}
        birthdate={props.items[1].birthdate}
      />
      <AdoptionItem
        title={props.items[2].title}
        status={props.items[2].status}
        birthdate={props.items[2].birthdate}
      />
    </Card>
  );
};

export default Adoptions;
