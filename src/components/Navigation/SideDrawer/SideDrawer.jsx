import React, { Fragment } from "react";
import classes from "./SideDrawer.module.css";

import Logo from "./../../Logo/Logo";
import NavigationItems from "./../NavigationItems/NavigationItems";
import Backdrop from "./../../UI/Backdrop/Backdrop";

const sideDrawer = props => {
  // ...
  return (
    <Fragment>
      <Backdrop clicked={props.closeSideDrawer} show={props.showSideDrawer} />
      <div
        className={[
          classes.SideDrawer,
          classes[props.showSideDrawer ? "Open" : "Close"]
        ].join(" ")}
      >
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  );
};

export default sideDrawer;
