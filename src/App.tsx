import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import Header from "./components/Header";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id/:title" element={<RecipeDetailPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
