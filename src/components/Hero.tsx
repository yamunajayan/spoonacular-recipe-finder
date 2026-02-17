import SelectDropDown from "./SelectDropDown";
import { useState } from "react";

type HeroProps = {
  query: string;
  setQuery: (value: string) => void;
  cuisine: string;
  setCuisine: (value: string) => void;
  onSearch: () => void;
};

const Hero = ({
  query,
  setQuery,
  cuisine,
  setCuisine,
  onSearch,
}: HeroProps) => {
  const [error, setError] = useState("");
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) {
      setError("Please enter a recipe name");
      return;
    }
    setError("");
    onSearch();
  };

  return (
    <section className="bg-linear-to-b from-red-900 to-red-800 flex flex-col items-center p-4 md:p-16 lg:px-32">
      <h1 className="text-white">Recipe Search</h1>
      <p className="text-white">Find delicious recipes</p>

      <form
        onSubmit={handleSubmit}
        className="mt-4 flex flex-col gap-1 bg-white p-6 rounded-md w-full md:p-8 lg:w-3/4 shadow"
      >
        <div className="h-3">
          {error && <p className="text-red-500 text-sm!">{error}</p>}
        </div>
        <div className="flex gap-1 flex-wrap">
          <label className="sr-only" htmlFor="recipe-search">
            Search recipes
          </label>
          <input
            type="text"
            id="recipe-search"
            placeholder="Search recipes"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              if (error) setError("");
            }}
            className="border border-gray-300 rounded-md px-4 py-2 bg-white grow"
          />

          <button
            type="submit"
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Search
          </button>
        </div>
        <SelectDropDown cuisine={cuisine} setCuisine={setCuisine} />
      </form>
    </section>
  );
};

export default Hero;
