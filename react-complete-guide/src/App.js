import React, { useState } from "react";
import AdoptionStatus from "./common/enums";

import Adoptions from "./components/Adoptions/Adoptions";
import NewAdoption from "./components/NewAdoption/NewAdoption";
import mapStatusToEnum from './common/helpers'
const App = () => {
  const adoptionsMock = [
    {
      id: "e1",
      title: "Tara",
      status: AdoptionStatus.adopted,
      birthdate: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Sara",
      status: AdoptionStatus.notAdopted,
      birthdate: new Date(2021, 2, 12),
    },
    // {
    //   id: "e3",
    //   title: "Leon",
    //   status: AdoptionStatus.duringAdoption,
    //   birthdate: new Date(2021, 2, 28),
    // },
    {
      id: "e4",
      title: "Leon",
      status: AdoptionStatus.adopted,
      birthdate: new Date(2021, 2, 28),
    },
  ];
  const [adoptions, setAdoptions] = useState(adoptionsMock);

  const addAdoption = (adoption) => {
    setAdoptions((prev) => {
      return [ adoption,...prev];
    });

     console.log(adoptions);
  };


  return (
    <div>
      <h2>Let's get started!</h2>
      <NewAdoption onAdoptionCreated={addAdoption} />
      <Adoptions adoptions={adoptions} />
    </div>
  );
};

export default App;
