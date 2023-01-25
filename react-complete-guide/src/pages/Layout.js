import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import classes from "./Layout.module.css";

function Layout() {
  return (
    <>
      <MainNavigation />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
