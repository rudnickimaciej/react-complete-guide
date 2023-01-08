import React, { useState, useContext } from "react";
import Header from "./components/Header/Header";
import Movies from "./components/AvailableMovies/Movies";
import Cart from "./components/UI/Cart/Cart";
import StoreContext from "./context/store-context";
const App = () => {
  const storeCtx = useContext(StoreContext);
  return (
    <>
      <Header />
      <br /> <br /> <br />
      <Movies />
      <br /> <br /> <br />
      <Cart isVisible={storeCtx.cartIsVisible} />
    </>
  );
};

export default App;
