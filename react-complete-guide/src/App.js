import React, { useState } from "react";

import Adoptions from "./components/Adoptions/Adoptions";
import NewAdoption from "./components/NewAdoption/NewAdoption";

const App = () => {
  const adoptionsMock = [
    {
      id: "e1",
      title: "Tara",
      status: "adopted",
      birthdate: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Sara",
      status: "adopted",
      birthdate: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Leon",
      status: "notadopted",
      birthdate: new Date(2021, 2, 28),
    },
  ];
  const [adoptions, setAdoptions] = useState(adoptionsMock);

  const addAdoption = (adoption) => {
    setAdoptions([...adoptions, adoption]);

    console.log(adoptions);
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewAdoption onAdoptionCreated={addAdoption} />
      <Adoptions items={adoptions} />
    </div>
  );
};

export default App;
