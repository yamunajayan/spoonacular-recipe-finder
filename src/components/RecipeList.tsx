import RecipeCard from "./RecipeCard";

type Recipe = {
  id: number;
  title: string;
  image: string;
};

const RecipeList = ({
  recipes,
  query,
  cuisine,
}: {
  recipes: Recipe[];
  query: string;
  cuisine: string;
}) => {
  const noResultsMessage = () => {
    if (recipes.length > 0) return null;

    if (cuisine && query)
      return `No recipes found for "${query}" in ${cuisine} cuisine. Try different cuisine.`;

    return `No recipes found for "${query}". Try different dish.`;
  };

  return (
    <section>
      {recipes.length === 0 ? (
        <p className="text-center py-8">{noResultsMessage()}</p>
      ) : (
        <>
          <h2 className="text-center">
            Recipes for "{query}" {cuisine && `in ${cuisine} cuisine`}
          </h2>
          <ul className="grid grid-cols-1 gap-4 mx-auto md:grid-cols-2 py-8">
            {recipes.map((recipe: Recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default RecipeList;
