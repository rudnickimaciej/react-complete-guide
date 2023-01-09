import React, { useState, useEffect } from "react";

const StoreContext = React.createContext({
  cartIsVisible: undefined,
  tickets: [],
  onAddTicket: (ticket, count) => {},
  onDeleteTicket: (movieId) => {},
  onHideCartEventHandler: () => {},
  onShowCartEventHandler: () => {},
});

// [
//     {movie:movie, count:2},
//     {movie:movie, count:2}

// ]

export const StoreContextProvider = (props) => {
  const [tickets, setTickets] = useState([]);
  const [cartIsVisible, setCartIsVisible] = useState(false);

  //   useEffect(() => {
  //     //const isLogged = localStorage.getItem("isLoggedIn");
  //     console.log("isLogged: " + isLogged);
  //     setIsLoggedIn(isLogged);
  //   }, []);

  //   const onAddTicketHandler = (movieToAdd, count) => {
  //     // (1)
  //     const i = tickets.findIndex(
  //       (_element) => _element.movie.id === movieToAdd.id
  //     );
  //     if (i > -1)
  //       tickets[i] = {
  //         movie: tickets[i].movie,
  //         count: tickets[i].count + count,
  //       };
  //     // (2)
  //     else tickets.push({ movie: movieToAdd, count: count });
  //   };
  const onAddTicketHandler = (movieToAdd, count) => {
    //todo: add to localStorage
    //TODO: zmienić ten algorytm
    console.log("add item handler");
    if (tickets.some((t) => t.movie.id === movieToAdd.id)) {
      const filtered = tickets.filter((t) => t.movie.id !== movieToAdd.id);
      const movieAlreadyAdded = tickets.filter(
        (t) => t.movie.id === movieToAdd.id
      )[0];

      setTickets((prev) => [
        ...filtered,
        { movie: movieAlreadyAdded.movie, count: movieAlreadyAdded.count + 1 },
      ]);
    } else {
      setTickets((prev) => [...prev, { movie: movieToAdd, count: count }]);
    }
  };

  const onDeleteTicketHandler = (id) => {
    //todo: remove ticket with ID==id
    //todo: remove from localStorage
    console.log("remove item handler");

    const filtered = tickets.filter((t) => t.movie.id !== id);
    const movieToDecrement = tickets.filter((t) => t.movie.id === id)[0];

    if (movieToDecrement.count > 1) {
      setTickets((prev) => [
        ...filtered,
        { movie: movieToDecrement.movie, count: movieToDecrement.count - 1 },
      ]);
    } else {
      setTickets(filtered);
    }
  };

  const onShowCartEventHandler = () => {
    setCartIsVisible(true);
  };

  const onHideCartEventHandler = () => {
    setCartIsVisible(false);
  };
  return (
    <StoreContext.Provider
      value={{
        cartIsVisible: cartIsVisible,
        tickets: tickets,
        onDeleteTicket: onDeleteTicketHandler,
        onAddTicket: onAddTicketHandler,
        onShowCartEventHandler: onShowCartEventHandler,
        onHideCartEventHandler: onHideCartEventHandler,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContext;
