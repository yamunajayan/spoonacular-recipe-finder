import { CUISINES } from "../constants/cuisines";

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
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        <div className="flex gap-1 flex-wrap">
          <input
            type="text"
            placeholder="Search recipes"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 bg-white grow"
          />

          <button
            type="submit"
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Search
          </button>
        </div>
        <select
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          className="border border-gray-300 rounded-md px-2 py-1 bg-white"
        >
          <option value="">All cuisines</option>
          {CUISINES.map((cuisine) => (
            <option key={cuisine} value={cuisine}>
              {cuisine}
            </option>
          ))}
        </select>
      </form>
    </section>
  );
};

export default Hero;
