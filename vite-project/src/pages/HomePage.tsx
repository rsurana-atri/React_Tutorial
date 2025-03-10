import { useContext } from "react";
import { RecipeContext } from "../context/RecipeProvider";
import RecipeList from "../components/RecipeList";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  const recipeContext = useContext(RecipeContext);

  if (!recipeContext) {
    return <div>Error: Recipe Context not available</div>;
  }

  const { recipes, deleteRecipe } = recipeContext;

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5rem", // Larger font size
          fontWeight: "bold",
          WebkitBackgroundClip: "text",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Adds a soft shadow
          padding: "10px",
          marginBottom: "20px",
          letterSpacing: "2px", // Makes it feel premium
          display: "inline-block",
        }}
      >
        Kitchen Manager
      </h1>
      <br></br>
      <Link to="/add-recipe">➕ Add New Recipe</Link>
      {recipes.length > 0 ? <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} /> : <p>No recipes found.</p>}
    </div>
  );
};

export default HomePage;