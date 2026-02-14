type Recipe = {
  id: number;
  title: string;
  image: string;
};

const RecipeList = ({ recipes }: { recipes: Recipe[] }) => {
  return (
    <section>
      <ul className="flex flex-col gap-4 mx-auto">
        {recipes.map((recipe: Recipe) => (
          <li
            key={recipe.id}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-md shadow"
          >
            <h2 className="text-center">{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecipeList;
