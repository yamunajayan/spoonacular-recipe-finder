import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRecipeDetail } from "../services/spoonacular";
import type { RecipeDetail } from "../services/spoonacular";
import HealthInformation from "../components/HealthInformation";
import IngredientsList from "../components/IngredientsList";
import CookingInstructionsList from "../components/CookingInstructionsList";
import { useNavigate } from "react-router-dom";

const RecipeDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [recipe, setRecipe] = useState<RecipeDetail | null>(null);

  useEffect(() => {
    if (!id) return;
    const fetchRecipeDetail = async () => {
      try {
        const res = await getRecipeDetail(Number(id));
        setRecipe(res);
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
      <section className="flex flex-col bg-red-200 px-4 py-2">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 text-red-800 self-start hover:underline"
        >
          ← Back
        </button>
        <div className="flex flex-col items-center gap-4 py-2 mb-8">
          <h1 className="text-white">{recipe.title}</h1>
          <img
            src={recipe.image}
            alt={recipe.title}
            className="rounded-lg object-cover shadow lg:w-1/2"
          />
        </div>
      </section>
      <HealthInformation recipe={recipe} />
      <IngredientsList recipe={recipe} />
      <CookingInstructionsList recipe={recipe} />
    </main>
  );
};

export default RecipeDetailPage;
