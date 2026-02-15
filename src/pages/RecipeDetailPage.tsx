import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRecipeDetail } from "../services/spoonacular";
import type { RecipeDetail } from "../services/spoonacular";
import HealthInformation from "../components/HealthInformation";
import IngredientsList from "../components/IngredientsList";
import CookingInstructionsList from "../components/CookingInstructionsList";

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
    <main>
      <section className="flex flex-col items-center bg-red-900 px-4 py-12 ">
        <h1 className="text-white">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="rounded-lg object-cover shadow lg:w-1/2"
        />
      </section>
      <HealthInformation recipe={recipe} />
      <IngredientsList recipe={recipe} />
      <CookingInstructionsList recipe={recipe} />
    </main>
  );
};

export default RecipeDetailPage;
