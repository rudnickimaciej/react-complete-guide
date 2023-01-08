import React from "react";
import classes from "./Movies.module.css";
import Card from "../UI/Card/Card";
import MovieItem from "../MovieItem/MovieItem";
import ticketsMock from "./../../mocks/ticketsMocks";
const Movies = (props) => {
  return (
    <Card className={classes.movies}>
      <ul>
        {ticketsMock.map((m) => (
          <li key={m.id}>
            <MovieItem movie={m} />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Movies;
