import React from "react";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <p id="p1" draggable="true">
        This element is draggable.
      </p>
    </Card>
  );
};

export default Home;
