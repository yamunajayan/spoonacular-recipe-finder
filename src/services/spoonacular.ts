import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

export const spoonacular = axios.create({
  baseURL: "https://api.spoonacular.com",
  params: {
    apiKey,
  },
});

export type Recipe = {
  id: number;
  title: string;
  image: string;
};

type ComplexSearchData = {
  results: Recipe[];
  offset: number;
  number: number;
  totalResults: number;
};

type Step = {
  number: number;
  step: string;
};

type Instruction = {
  steps: Step[];
};

export type RecipeDetail = {
  id: number;
  title: string;
  image: string;
  vegan: boolean;
  dairyFree: boolean;
  glutenFree: boolean;
  vegetarian: boolean;
  extendedIngredients: Array<{
    id: number;
    name: string;
    original: string;
    amount: number;
    unit: string;
    originalName: string;
  }>;
  analyzedInstructions: Instruction[];
};

export async function searchRecipes(
  query: string,
  cuisine?: string
): Promise<ComplexSearchData> {
  const res = await spoonacular.get<ComplexSearchData>(
    "/recipes/complexSearch",
    {
      params: { query, cuisine, number: 5 },
    }
  );
  return res.data;
}

export async function getRecipeDetail(id: number): Promise<RecipeDetail> {
  const res = await spoonacular.get(`/recipes/${id}/information`, {
    params: { includeNutrition: false },
  });
  return res.data;
}
