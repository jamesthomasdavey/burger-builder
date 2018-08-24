import React, { Fragment } from "react";
import classes from "./OrderSummary.module.css";

import Button from "./../../UI/Button/Button";

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
      <p>
        <strong>Total Price: ${props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" click={props.cancelPurchase}>
        <span style={{ textTransform: "uppercase" }}>Cancel</span>
      </Button>
      <Button btnType="Success" click={props.continuePurchase}>
        <span style={{ textTransform: "uppercase" }}>Continue</span>
      </Button>
    </Fragment>
  );
};

export default orderSummary;
