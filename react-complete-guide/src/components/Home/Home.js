import React from "react";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = (props) => {
  function dragstart_handler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("text/plain", ev.target.id);
  }

  window.addEventListener("DOMContentLoaded", () => {
    // Get the element by id
    const element = document.getElementById("p1");
    // Add the ondragstart event listener
    element.addEventListener("dragstart", dragstart_handler);
  });
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
