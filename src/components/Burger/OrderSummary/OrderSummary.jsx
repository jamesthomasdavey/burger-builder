import React, { Fragment } from "react";

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
      <ul>{ingredients}</ul>
    </Fragment>
  );
};

export default orderSummary;
