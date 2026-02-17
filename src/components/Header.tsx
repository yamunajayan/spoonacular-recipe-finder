import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="py-2 shadow border px-4">
      <div className="flex justify-between items-center gap-4 max-w-6xl mx-auto">
        <div
          className="flex items-center justify-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={`${import.meta.env.BASE_URL}recipes4you-logo.svg`}
            alt="recipe 4 you logo"
            className="w-8"
          />
          <h3>Recipes4you</h3>
        </div>
        <button
          onClick={() => navigate("/")}
          className="px-4  bg-red-800 text-white rounded"
        >
          Home
        </button>
      </div>
    </header>
  );
};

export default Header;
