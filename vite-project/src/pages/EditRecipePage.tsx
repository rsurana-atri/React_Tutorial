import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeProvider";

const EditRecipePage: React.FC = () => {
  const { recipeId } = useParams<{ recipeId: string }>();
  const recipeContext = useContext(RecipeContext);

  if (!recipeContext) {
    return <div>Error: Recipe Context not available</div>;
  }

  const { recipes } = recipeContext;
  const recipe = recipes.find((r) => r.id === Number(recipeId));

  if (!recipe) {
    return (
      <div>
        <h1>Recipe Not Found</h1>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Edit Recipe: {recipe.name}</h1>
      <p>Ingredients: {recipe.ingredients.join(", ")}</p>
      <p>Difficulty: {recipe.difficulty}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default EditRecipePage;