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
          textAlign: "left",
          fontSize: "2.5rem", // Larger font size
          fontWeight: "bold",
          letterSpacing: "2px",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Adds a soft shadow
        }}
      >
        Ingredients Manager 🥗
      </h1>
      <h4>
        Discover the best recipes tailored to the ingredients you have at home! Simply enter your ingredients into the search box one-by-one,   <br />
        and watch as the list updates to show recipes ranked by relevance, minimizing the need for additional ingredients. You can also add and <br />
        edit your own recipes to keep your collection up-to-date. <br />
      </h4>
      <Link to="/add-recipe">➕ Add New Recipe</Link>
      {recipes.length > 0 ? <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} /> : <p>No recipes found.</p>}
    </div>
  );
};

export default HomePage;