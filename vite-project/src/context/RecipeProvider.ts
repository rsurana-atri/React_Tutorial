import React, { createContext, useState, ReactNode } from "react";
import sampleData from "../utils/sampleData";
// create basic sample pages with the following recipe context

type DifficultyLevel = "Easy" | "Medium" | "Hard";

interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  vegetarian: boolean;
  vegan: boolean;
  difficulty: DifficultyLevel;
}

interface RecipeContextType {
  recipes: Recipe[];
  addRecipe: (newRecipe: Recipe) => void;
  editRecipe: (updatedRecipe: Recipe) => void;
  deleteRecipe: (recipeId: number) => void;
}

export const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

interface RecipeProviderProps {
  children: ReactNode;
}

const RecipeProvider = ({ children }: RecipeProviderProps): React.ReactElement => {
  const [recipes, setRecipes] = useState<Recipe[]>(sampleData); //react axios + json server

  const addRecipe = (newRecipe: Recipe) => {
    setRecipes((prev) => [...prev, { ...newRecipe, id: prev.length + 1 }]);
  };

  const editRecipe = (updatedRecipe: Recipe) => {
    setRecipes((prev) =>
      prev.map((recipe) => (recipe.id === updatedRecipe.id ? updatedRecipe : recipe))
    );
  };

  const deleteRecipe = (recipeId: number) => {
    setRecipes((prev) => prev.filter((recipe) => recipe.id !== recipeId));
  };

  return React.createElement(
    RecipeContext.Provider,
    { value: { recipes, addRecipe, editRecipe, deleteRecipe } },
    children
  );
};

export default RecipeProvider;