import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Hero from "../components/Hero";
import RecipeList from "../components/RecipeList";
import { searchRecipes } from "../services/spoonacular";
import type { Recipe } from "../services/spoonacular";
const PAGE_SIZE = 5;

const HomePage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [query, setQuery] = useState("");
  const [cuisine, setCuisine] = useState("");

  // URL params (source of truth for "current search")
  const [searchParams, setSearchParams] = useSearchParams();

  const urlQuery = (searchParams.get("query") ?? "").trim();
  const urlCuisine = (searchParams.get("cuisine") ?? "").trim();
  const page = Number(searchParams.get("page") ?? "1");

  useEffect(() => {
    if (!urlQuery) {
      setRecipes([]);
      console.log("no query");
      return;
    }

    setQuery(urlQuery);
    setCuisine(urlCuisine);

    (async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await searchRecipes(
          urlQuery,
          urlCuisine || undefined,
          page
        );
        setRecipes(data.results);
        console.log(data);
      } catch (error) {
        console.log(error);
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    })();
  }, [urlQuery, urlCuisine, page]);

  const handleSearch = () => {
    const q = query.trim();
    if (!q) return;

    const params: Record<string, string> = {
      query: q,
      page: "1",
    };

    const c = cuisine.trim();
    if (c) params.cuisine = c;

    setSearchParams(params);
  };

  return (
    <main>
      <Hero
        onSearch={handleSearch}
        query={query}
        setQuery={setQuery}
        cuisine={cuisine}
        setCuisine={setCuisine}
      />
      <article className="text-red-500 flex flex-col items-center p-4">
        {loading && <p>Loading recipes...</p>}

        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && <RecipeList recipes={recipes} />}
      </article>
    </main>
  );
};

export default HomePage;
