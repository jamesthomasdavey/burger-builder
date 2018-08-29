import React from "react";
import classes from "./Backdrop.module.css";

const backdrop = props => (
  <div className={props.show ? classes.Backdrop : ""} 
  onClick={props.clicked}/>
);

export default backdrop;
