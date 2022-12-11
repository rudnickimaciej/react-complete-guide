import React from "react";

import Adoptions from "./components/Adoptions/Adoptions";

const App = () => {
  const adoptions = [
    {
      id: "e1",
      title: "Tara",
      status: "adoptowany",
      birthdate: new Date(2020, 7, 14),
    },
    { 
      id: "e2", 
      title: "Sara", 
      status: "adoptowany", 
      birthdate: new Date(2021, 2, 12) 
    },
    {
      id: "e3",
      title: "Leon",
      status: "czeka na adopcję",
      birthdate: new Date(2021, 2, 28),
    }
  ];

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <h2>Let's get started!</h2>
      <Adoptions items={adoptions} />
    </div>
  );
};

export default App;
