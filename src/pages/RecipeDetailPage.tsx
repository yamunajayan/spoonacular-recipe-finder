import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRecipeDetail } from "../services/spoonacular";
import type { RecipeDetail } from "../services/spoonacular";

const RecipeDetailPage = () => {
  const { id } = useParams();

  const [recipe, setRecipe] = useState<RecipeDetail | null>(null);

  useEffect(() => {
    if (!id) return;
    const fetchRecipeDetail = async () => {
      try {
        const res = await getRecipeDetail(Number(id));
        setRecipe(res);
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipeDetail();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Recipe Detail Page</h1>
      <h2>{recipe.title}</h2>
    </div>
  );
};

export default RecipeDetailPage;
