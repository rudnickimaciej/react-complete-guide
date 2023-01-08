import React, { useState, useEffect } from "react";

const StoreContext = React.createContext({
  cartIsVisible: undefined,
  tickets: [],
  onAddTicket: (ticket, count) => {},
  onDeleteTicket: (id) => {},
  onHideCartEventHandler: () => {},
  onShowCartEventHandler: () => {},
});

export const StoreContextProvider = (props) => {
  const [tickets, setTickets] = useState([]);
  const [cartIsVisible, setCartIsVisible] = useState(false);

  //   useEffect(() => {
  //     //const isLogged = localStorage.getItem("isLoggedIn");
  //     console.log("isLogged: " + isLogged);
  //     setIsLoggedIn(isLogged);
  //   }, []);

  const onAddTicketHandler = (ticket) => {
    //todo: add to localStorage
    setTickets((prev) => [...prev, ticket]);
  };

  const onDeleteTicketHandler = (id) => {
    //todo: remove ticket with ID==id
    //todo: remove from localStorage
    // setTickets((prev)=>[...prev.p, ticket]);
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
