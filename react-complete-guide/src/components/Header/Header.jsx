import CartButton from "./CartButton";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <header className={classes.header}>
        <h1 classes={classes.logo}>ReactTickets</h1>
        <CartButton />
      </header>
    </div>
  );
};

export default Header;
