import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { RecipeContext } from "../context/RecipeProvider";

interface AddRecipeForm {
  name: string;
  ingredients: string;
  vegetarian: boolean;
  vegan: boolean;
  difficulty: "Easy" | "Medium" | "Hard";
}

const AddRecipePage: React.FC = () => {
  const navigate = useNavigate();
  const recipeContext = useContext(RecipeContext);
  const { register, handleSubmit } = useForm<AddRecipeForm>();

  const { addRecipe, recipes } = recipeContext!;
 
  const onSubmit = (data: AddRecipeForm) => {
    const newRecipe = {
      id: recipes.length + 1,
      name: data.name,
      ingredients: data.ingredients.split(", ").map((ing) => ing.trim()),
      vegetarian: data.vegetarian === true,
      vegan: data.vegan === true,
      difficulty: data.difficulty,
    };

    addRecipe(newRecipe);
    navigate("/");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "10px", background: "#fff", borderRadius: "3px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>Add New Recipe</h1>
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

        <button type="submit" style={{ backgroundColor: "#007bff", color: "white", padding: "12px", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" }}>✅ Add Recipe</button>
      </form>
      <div style={{ textAlign: "center", marginTop: "15px" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#007bff", fontSize: "16px" }}>🏠 Cancel & Go Home</Link>
      </div>
    </div>
  );
};

export default AddRecipePage;