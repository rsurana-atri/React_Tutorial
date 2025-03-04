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
    <div>
      <h1>Add New Recipe</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Recipe Name:</label>
        <input {...register("name", { required: true })} />

        <label>Ingredients (comma-separated):</label>
        <input {...register("ingredients", { required: true })} />

        <label>Vegetarian:</label>
        <input type="checkbox" {...register("vegetarian")} />

        <label>Vegan:</label>
        <input type="checkbox" {...register("vegan")} />

        <label>Difficulty:</label>
        <select {...register("difficulty")}>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <button type="submit">✅</button>
      </form>
      <Link to="/">🏠 Home</Link>
    </div>
  );
};

export default AddRecipePage;