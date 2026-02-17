import type { RecipeDetail } from "../services/spoonacular";
const CookingInstructionsList = ({ recipe }: { recipe: RecipeDetail }) => {
  return (
    <section className="flex flex-col gap-4 items-center py-12 px-4 lg:w-3/4 mx-auto">
      <h2 className="text-center">Cooking Instructions</h2>
      <ol>
        {recipe.analyzedInstructions
          .flatMap((i) => i.steps)
          .map((step, index) => (
            <li
              key={index}
              className="grid grid-cols-[80px_1fr] gap-1 p-3 shadow mb-1 rounded"
            >
              <p className="font-bold text-red-900">Step {index + 1}:</p>
              <p>{step.step}</p>
            </li>
          ))}
      </ol>
    </section>
  );
};

export default CookingInstructionsList;
