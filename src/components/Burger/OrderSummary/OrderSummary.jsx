import React, { Fragment } from "react";

import classes from "./OrderSummary.module.css";

const orderSummary = props => {
  const ingredients = Object.keys(props.ingredients).map(ing => {
    return (
      <li key={ing}>
        <span style={{ textTransform: "capitalize" }}>{ing}: </span>
        {props.ingredients[ing]}
      </li>
    );
  });

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul className={classes.list}>{ingredients}</ul>
      <p>Continue to Checkout?</p>
    </Fragment>
  );
};

export default orderSummary;
