import { Fragment } from "react";

export default function Ingredients(props) {
  const ingredientsList = props.ingredients.map((i) => <li key={i}>{i}</li>);

  return (
    <Fragment>
      {props.ingredients.length > 0 ? (
        <section className="ingredients-section">
          <h2>Current Ingredients</h2>
          <ul>{ingredientsList}</ul>
        </section>
      ) : null}
      {props.ingredients.length > 3 ? (
        <section className="get-recipe-section">
          <p>Ready for a recipe?</p>
          <button onClick={props.onGetRecipe}>Get Recipe</button>
        </section>
      ) : null}
    </Fragment>
  );
}
