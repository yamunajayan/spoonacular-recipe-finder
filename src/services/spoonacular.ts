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
  cuisine?: string,
  page = 1
): Promise<ComplexSearchData> {
  const pageSize = 5;
  const q = query.trim();
  const c = cuisine?.trim() || undefined;

  if (!q) {
    return { results: [], offset: 0, number: pageSize, totalResults: 0 };
  }
  const offset = (page - 1) * pageSize;

  const key = `recipes:${q}:${c || "all"}:page:${page}`;

  // 1) Try cache first
  const cached = sessionStorage.getItem(key);
  if (cached) {
    return JSON.parse(cached);
  }

  const params: Record<string, string | number> = {
    query: q,
    number: pageSize,
    offset,
  };
  if (c) params.cuisine = c;

  // 2) Call API
  const res = await spoonacular.get<ComplexSearchData>(
    "/recipes/complexSearch",
    { params }
  );

  // 3) Save result
  sessionStorage.setItem(key, JSON.stringify(res.data));
  return res.data;
}

export async function getRecipeDetail(id: number): Promise<RecipeDetail> {
  const res = await spoonacular.get(`/recipes/${id}/information`, {
    params: { includeNutrition: false },
  });
  return res.data;
}
