import type { RecipeDetail } from "../services/spoonacular";
const IngredientsList = ({ recipe }: { recipe: RecipeDetail }) => {
  return (
    <section className="flex flex-col gap-4 items-center py-4 px-4 bg-white shadow rounded-2xl">
      <h2>Ingredients List</h2>

      <ul>
        {recipe.extendedIngredients.map((ingredient) => (
          <li
            key={`${ingredient.id}-${ingredient.original}`}
            className="flex gap-2 items-center py-1"
          >
            <p>{ingredient.originalName}: </p>
            <div className="flex gap-1 px-2">
              <p>{ingredient.amount}</p>
              <p>{ingredient.unit}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IngredientsList;
