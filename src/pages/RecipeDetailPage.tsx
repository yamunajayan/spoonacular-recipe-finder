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
    <main>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <section>
        <h2>Ingredients</h2>
        <ul>
          {recipe.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id} className="flex gap-4">
              <p>{ingredient.name} :</p>
              <div className="flex gap-1">
                <p>{ingredient.amount}</p>
                <p>{ingredient.unit}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default RecipeDetailPage;
