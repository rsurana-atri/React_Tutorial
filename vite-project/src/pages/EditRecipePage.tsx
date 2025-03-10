import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { RecipeContext } from "../context/RecipeProvider";

interface EditRecipeForm {
  name: string;
  ingredients: string;
  vegetarian: boolean;
  vegan: boolean;
  difficulty: "Easy" | "Medium" | "Hard";
}

const EditRecipePage: React.FC = () => {
  const { recipeId } = useParams<{ recipeId: string }>();
  const navigate = useNavigate();
  const recipeContext = useContext(RecipeContext);
  const { register, handleSubmit, setValue } = useForm<EditRecipeForm>();

  const { recipes, editRecipe } = recipeContext!;
  const recipe = recipes.find((r) => r.id === Number(recipeId)) || null;

  useEffect(() => {
    if (recipe) {
      setValue("name", recipe.name);
      setValue("ingredients", recipe.ingredients.join(", "));
      setValue("vegetarian", recipe.vegetarian);
      setValue("vegan", recipe.vegan);
      setValue("difficulty", recipe.difficulty);
    }
  }, [setValue, recipe]);

  const onSubmit = (data: EditRecipeForm) => {
    if (!recipe) return;

    const updatedRecipe = {
      ...recipe,
      name: data.name,
      ingredients: data.ingredients.split(", ").map((ing) => ing.trim()),
      vegetarian: data.vegetarian === true,
      vegan: data.vegan === true,
      difficulty: data.difficulty,
    };

    editRecipe(updatedRecipe);
    navigate("/");
  };

  return recipe ? (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px", background: "#fff", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>Edit Recipe</h1>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <label>Recipe Name:</label>
        <input {...register("name", { required: true })} style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />

        <label>Ingredients (comma-separated):</label>
        <input {...register("ingredients", { required: true })} style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />

        <label>Vegetarian:</label>
        <input type="checkbox" {...register("vegetarian")} />

        <label>Vegan:</label>
        <input type="checkbox" {...register("vegan")} />

        <label>Difficulty:</label>
        <select {...register("difficulty")} style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <button type="submit" style={{ backgroundColor: "#007bff", color: "white", padding: "12px", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" }}>✅ Save Changes</button>
      </form>
      <div style={{ textAlign: "center", marginTop: "15px" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#007bff", fontSize: "16px" }}>🏠 Cancel & Go Back</Link>
      </div>
    </div>
  ) : (
    <div style={{ textAlign: "center" }}>
      <h1>Recipe Not Found</h1>
      <Link to="/" style={{ textDecoration: "none", color: "#007bff", fontSize: "16px" }}>🏠 Back to Home</Link>
    </div>
  );
};

export default EditRecipePage;