import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { RecipeContext } from "../context/RecipeProvider";
import React from "react";

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
  const params = useParams();
  console.log("🔍 params:", params);

  console.log("🔍 recipeId from URL:", recipeId);

  const { recipes, editRecipe } = recipeContext!;
  console.log("📋 Current recipes:", recipes);

  const recipe = recipes.find((r) => r.id === Number(recipeId)) || null;
  console.log("🔎 Found recipe:", recipe);

  useEffect(() => {
    if (recipe) {
      console.log("🎯 Setting form values for:", recipe);
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

    console.log("✅ Updating recipe:", updatedRecipe);
    editRecipe(updatedRecipe);
    navigate("/");
  };

  return recipe
    ? React.createElement(
        "div",
        null,
        React.createElement("h1", null, `Edit Recipe: ${recipe.name}`),
        React.createElement(
          "form",
          { onSubmit: handleSubmit(onSubmit) },
          React.createElement("label", null, "Recipe Name:"),
          React.createElement("input", { ...register("name"), required: true }),

          React.createElement("label", null, "Ingredients (comma-separated):"),
          React.createElement("input", { ...register("ingredients"), required: true }),

          React.createElement("label", null, "Vegetarian:"),
          React.createElement("input", { type: "checkbox", ...register("vegetarian") }),

          React.createElement("label", null, "Vegan:"),
          React.createElement("input", { type: "checkbox", ...register("vegan") }),

          React.createElement("label", null, "Difficulty:"),
          React.createElement("select", { ...register("difficulty") },
            React.createElement("option", { value: "Easy" }, "Easy"),
            React.createElement("option", { value: "Medium" }, "Medium"),
            React.createElement("option", { value: "Hard" }, "Hard")
          ),

          React.createElement("button", { type: "submit" }, "✅")
        ),
        React.createElement(Link, { to: "/" }, "🏠 Home")
      )
    : React.createElement(
        "div",
        null,
        React.createElement("h1", null, "Recipe Not Found"),
        React.createElement(Link, { to: "/" }, "🏠 Home")
      );
};

export default EditRecipePage;