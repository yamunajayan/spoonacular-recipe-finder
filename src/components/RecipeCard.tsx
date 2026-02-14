type Recipe = {
  id: number;
  title: string;
  image: string;
};

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <li className="flex flex-col items-center justify-between p-4 bg-white rounded-md shadow h-96 max-w-md">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-72 rounded-md object-cover shadow"
      />
      <h3 className="text-center text-red-900">{recipe.title}</h3>
    </li>
  );
};

export default RecipeCard;
