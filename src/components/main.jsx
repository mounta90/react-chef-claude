// left off at 9:17:36

import { useState } from "react";
import Recipe from "./recipe";
import Ingredients from "./ingredients";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);

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
      <Ingredients ingredients={ingredients} onGetRecipe={onGetRecipe} />
      {isRecipeShown ? <Recipe /> : null}
    </main>
  );
}
