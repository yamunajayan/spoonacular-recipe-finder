import RecipeCard from "./RecipeCard";

type Recipe = {
  id: number;
  title: string;
  image: string;
};

const RecipeList = ({ recipes }: { recipes: Recipe[] }) => {
  return (
    <section>
      <ul className="grid grid-cols-1 gap-4 mx-auto md:grid-cols-2">
        {recipes.map((recipe: Recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </ul>
    </section>
  );
};

export default RecipeList;
