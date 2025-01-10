// left off at 8:09:36

import { useState } from "react";
import Recipe from "./recipe";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);

  const ingredientsList = ingredients.map((i) => <li key={i}>{i}</li>);

  function onFormSubmitted(formData) {
    const newIngredient = formData.get("ingredient");

    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  // ---

  const [isRecipeShown, setIsRecipeShown] = useState(false);

  function onGetRecipe() {
    setIsRecipeShown((prev) => !prev);
  }

  return (
    <main>
      <form action={onFormSubmitted}>
        <input
          className="input-element"
          type="text"
          aria-label="Add ingredient"
          name="ingredient"
          placeholder="e.g. oregano"
        />
        <button className="input-element">Add Ingredient</button>
      </form>
      {ingredients.length > 0 ? (
        <section className="ingredients-section">
          <h2>Current Ingredients</h2>
          <ul>{ingredientsList}</ul>
        </section>
      ) : null}
      {ingredients.length > 3 ? (
        <section className="get-recipe-section">
          <p>Ready for a recipe?</p>
          <button onClick={onGetRecipe}>Get Recipe</button>
        </section>
      ) : null}
      {isRecipeShown ? <Recipe /> : null}
    </main>
  );
}
