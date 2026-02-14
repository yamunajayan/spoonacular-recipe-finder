import { useState } from "react";
import Hero from "../components/Hero";
import axios from "axios";
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
      <ul className="grid grid-cols-2 gap-4">
        {recipes.map((recipe: any) => (
          <li key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} />
            <h2>{recipe.title}</h2>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default HomePage;
