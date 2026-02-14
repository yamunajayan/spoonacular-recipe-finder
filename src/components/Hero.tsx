const Hero = () => {
  return (
    <section className="bg-linear-to-b from-red-900 to-red-700 flex flex-col items-center py-4">
      <h1 className="text-white">Recipe Search</h1>
      <p className="text-white">Find delicious recipes</p>

      <form className="mt-4 flex flex-col gap-1 bg-white p-4 rounded-md">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search recipes"
            className="border border-gray-300 rounded-md px-4 py-2 bg-white"
          />

          <button className="bg-red-500 text-white px-4 py-2 rounded-md">
            Search
          </button>
        </div>
        <select className="border border-gray-300 rounded-md px-4 py-2 bg-white">
          <option value="">All cuisines</option>
          <option value="italian">Italian</option>
          <option value="mexican">Mexican</option>
          <option value="indian">Indian</option>
          <option value="chinese">Chinese</option>
          <option value="thai">Thai</option>
        </select>
      </form>
    </section>
  );
};

export default Hero;
