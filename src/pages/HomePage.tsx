import { useState } from "react";
import Hero from "../components/Hero";
import axios from "axios";
import RecipeList from "../components/RecipeList";
import { searchRecipes } from "../services/spoonacular";
import type { Recipe } from "../services/spoonacular";

const HomePage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [cuisine, setCuisine] = useState("");
  const handleSearch = async () => {
    if (!query.trim()) {
      return;
    }
    try {
      setLoading(true);
      setError(null);
      const data = await searchRecipes(query, cuisine);
      setRecipes(data.results);
      console.log(data);
    } catch (error) {
      console.log(error);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
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
