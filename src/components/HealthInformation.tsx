import type { RecipeDetail } from "../services/spoonacular";
const HealthInformation = ({ recipe }: { recipe: RecipeDetail }) => {
  return (
    <section className="flex flex-col gap-4 items-center py-8 px-4">
      <h2>Health Informations</h2>
      <div className="flex gap-4 flex-wrap items-center justify-center">
        <p className="rounded-md text-center w-40 p-2 bg-zinc-200 shadow">
          Vegetarian: {recipe.vegetarian ? "Yes" : "No"}
        </p>
        <p className="rounded-md text-center w-40 p-2 bg-zinc-200 shadow">
          Gluten Free: {recipe.glutenFree ? "Yes" : "No"}
        </p>
        <p className="rounded-md text-center w-40 p-2 bg-zinc-200 shadow">
          Dairy Free: {recipe.dairyFree ? "Yes" : "No"}
        </p>
        <p className="rounded-md text-center w-40 p-2 bg-zinc-200 shadow">
          Vegan: {recipe.vegan ? "Yes" : "No"}
        </p>
      </div>
    </section>
  );
};

export default HealthInformation;
