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
    <div style={{ padding: "20px" }}>
      {/* Title */}
      <h1
        style={{
          textAlign: "left",
          fontSize: "2.5rem",
          fontWeight: "bold",
          letterSpacing: "2px",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        }}
      >
        Ingredients Manager
      </h1>

      {/* Description */}
      <h4>
        Discover the best recipes tailored to the ingredients you have at home! Simply enter your ingredients into the search box one-by-one, <br />
        and watch as the list updates to show recipes ranked by relevance, minimizing the need for additional ingredients. You can also add and <br />
        edit your own recipes to keep your collection up-to-date. <br />
      </h4>

      {/* Buttons Section (Flexbox for better alignment) */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "20px" }}>
        {/* Add New Recipe Button */}
        <Link
          to="/add-recipe"
          style={{
            padding: "10px 15px",
            background: "#28a745",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
            fontWeight: "bold",
          }}
        >
          ➕ Add New Recipe
        </Link>

        {/* View Statistics Box */}
        <div
          style={{
            padding: "10px 15px",
            background: "#f8f9fa",
            borderRadius: "5px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <Link
            to="/statistics"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "#007bff",
            }}
          >
            📊 View Statistics
          </Link>
        </div>
      </div>

      {/* Recipe List */}
      {recipes.length > 0 ? (
        <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default HomePage;