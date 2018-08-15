import React from "react";

import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  let burgerIngredients = Object.keys(props.ingredients)
    .map(ing => {
      return Array(props.ingredients[ing])
        .fill(ing)
        .map((ing, index) => <BurgerIngredient key={ing + index} type={ing} />);
    })
    .reduce((acc, val) => {
      return [...acc, ...val];
    }, []);

  if (burgerIngredients.length === 0) {
    burgerIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {burgerIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
