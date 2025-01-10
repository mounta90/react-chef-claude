// left off at 7:03:00

import { useState } from "react";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);

  const ingredientsList = ingredients.map((i) => <li key={i}>{i}</li>);

  function onFormSubmitted(formData) {
    const newIngredient = formData.get("ingredient");

    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
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
      <section className="ingredients-section">
        <ul>{ingredientsList}</ul>
      </section>
    </main>
  );
}
