import { useNavigate } from "react-router-dom";

type Recipe = {
  id: number;
  title: string;
  image: string;
};

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  const navigate = useNavigate();

  const slugify = (text: string) =>
    text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  const handleClick = (id: number, title: string) => {
    console.log(title);
    const slug = slugify(title);
    navigate(`/recipe/${id}/${slug}`);
  };
  return (
    <li
      className="flex flex-col items-center justify-between p-4 bg-white rounded-md shadow h-96 max-w-md hover:shadow-rose-500 
    cursor-pointer"
      onClick={() => handleClick(recipe.id, recipe.title)}
    >
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-72 rounded-md object-cover shadow"
      />
      <h3 className="text-center text-green-900! text-lg! text-bold">
        {recipe.title}
      </h3>
    </li>
  );
};

export default RecipeCard;
