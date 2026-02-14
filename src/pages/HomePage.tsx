import { useState } from "react";
import Hero from "../components/Hero";
import axios from "axios";
import RecipeList from "../components/RecipeList";
const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [cuisine, setCuisine] = useState("");
  const apiKey = import.meta.env.VITE_API_KEY;
  const handleSearch = async () => {
    if (!query.trim()) {
      console.log("Enter a search term");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const url =
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}` +
        `&query=${encodeURIComponent(query)}` +
        (cuisine ? `&cuisine=${encodeURIComponent(cuisine)}` : "") +
        `&number=5`;

      const res = await axios.get(url);
      setRecipes(res.data.results);

      console.log(res.data.results);
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
