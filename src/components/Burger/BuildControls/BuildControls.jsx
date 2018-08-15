import React from "react";
import classes from "./BuildControls.module.css";

import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    {controls.map((obj, index) => (
      <BuildControl
        label={obj.label}
        key={obj.label}
        addIngredient={() => props.addIngredient(obj.type)}
        removeIngredient={() => props.removeIngredient(obj.type)}
        disabled={props.disabledIngredients[obj.type]}
      />
    ))}
  </div>
);

export default buildControls;
