import { useContext } from "react";
import { RecipeContext } from "../context/RecipeProvider";
import RecipeList from "../components/RecipeList";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  const recipeContext = useContext(RecipeContext);

  if (!recipeContext) {
    return <div>Error: Recipe Context not available</div>;
  }

  const { recipes } = recipeContext;

  return (
    <div>
      <h1>Recipe Manager</h1>
      <Link to="/add-recipe">➕ Add New Recipe</Link>
      {recipes.length > 0 ? <RecipeList recipes={recipes} /> : <p>No recipes found.</p>}
    </div>
  );
};

export default HomePage;