import React from "react";
import classes from "./BuildControls.module.css";

import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Lettuce", type: "lettuce" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>${props.price.toFixed(2)}</strong>
    </p>
    {controls.map((obj, index) => (
      <BuildControl
        label={obj.label}
        key={obj.label}
        addIngredient={() => props.addIngredient(obj.type)}
        removeIngredient={() => props.removeIngredient(obj.type)}
        disabled={props.disabledIngredients[obj.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.purchase}
    >
      Order Now
    </button>
  </div>
);

export default buildControls;
