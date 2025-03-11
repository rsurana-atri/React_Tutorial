import React, { useContext, useState } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { RecipeContext } from "../context/RecipeProvider";
import { Link } from "react-router-dom";

import { Recipe } from "../types"; // Ensure you have a Recipe type defined in your types file

const useStatisticsData = (recipes: Recipe[]) => {
    const flareColors = ["#f94144", "#f3722c", "#f8961e", "#f9844a", "#f9c74f", "#90be6d", "#43aa8b", "#577590"];

    const dietaryData = recipes.length > 0 ? [
        { category: "Vegetarian", count: recipes.filter((r) => r.vegetarian).length },
        { category: "Vegan", count: recipes.filter((r) => r.vegan).length },
    ].filter((item) => item.count > 0) : [];

    const difficultyData = recipes.length > 0 ? [
        { category: "Easy", count: recipes.filter((r) => r.difficulty === "Easy").length },
        { category: "Medium", count: recipes.filter((r) => r.difficulty === "Medium").length },
        { category: "Hard", count: recipes.filter((r) => r.difficulty === "Hard").length },
    ].filter((item) => item.count > 0) : [];

    const ingredientData = recipes.length > 0 ? (() => {
        const ingredientCount: Record<string, number> = {};
        recipes.forEach((recipe) => {
            recipe.ingredients.forEach((ingredient: string) => {
                const lowerCaseIngredient: string = ingredient.toLowerCase();
                ingredientCount[lowerCaseIngredient] = (ingredientCount[lowerCaseIngredient] || 0) + 1;
            });
        });
        return Object.entries(ingredientCount)
            .map(([ingredient, count]) => ({ category: ingredient, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 10);
    })() : [];

    return { dietaryData, difficultyData, ingredientData, flareColors };
};

const StatisticsPage = (): React.ReactElement => {
    const recipeContext = useContext(RecipeContext);
    const recipes = recipeContext ? recipeContext.recipes : [];
    const [graphType, setGraphType] = useState<"bar" | "ingredients">("bar");

    const { dietaryData, difficultyData, ingredientData, flareColors } = useStatisticsData(recipes);

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            {/* Title */}
            <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>📊 Recipe Statistics</h2>

            {/* Back to Homepage Link */}
            <Link
                to="/"
                style={{
                    display: "inline-block",
                    marginBottom: "20px",
                    padding: "10px 15px",
                    background: "#007bff",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "5px",
                }}
            >
                🏠 Home
            </Link>

            {/* Graph Type Selection */}
            <div style={{ marginBottom: "20px" }}>
                <label style={{ fontSize: "16px", fontWeight: "bold", marginRight: "10px" }}>Select Graph Type:</label>
                <select
                    onChange={(e) => setGraphType(e.target.value as "bar" | "ingredients")}
                    value={graphType}
                    style={{ padding: "8px", fontSize: "16px" }}
                >
                    <option value="bar">📊 Bar Charts</option>
                    <option value="ingredients">🍽️ Most Common Ingredients</option>
                </select>
            </div>

            {/* Graphs Layout */}
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "30px",
                    maxWidth: "1200px",
                    margin: "auto",
                }}
            >
                {/* Bar Charts (Side by Side) */}
                {graphType === "bar" && (
                    <>
                        <div style={{ width: "45%", height: "500px", minWidth: "400px" }}>
                            <h3>🟢 Dietary Types</h3>
                            <ResponsiveBar
                                data={dietaryData}
                                keys={["count"]}
                                indexBy="category"
                                margin={{ top: 50, right: 50, bottom: 100, left: 60 }}
                                padding={0.3}
                                colors={({ index }) => flareColors[index % flareColors.length]} // Assigns unique colors
                                axisLeft={{ legend: "Number of Recipes", legendPosition: "middle", legendOffset: -40 }}
                                axisBottom={{
                                    tickRotation: -30,
                                    legend: "Dietary Type",
                                    legendPosition: "middle",
                                    legendOffset: 50,
                                }}
                            />
                        </div>

                        <div style={{ width: "45%", height: "500px", minWidth: "400px" }}>
                            <h3>🟠 Difficulty Levels</h3>
                            <ResponsiveBar
                                data={difficultyData}
                                keys={["count"]}
                                indexBy="category"
                                margin={{ top: 50, right: 50, bottom: 100, left: 60 }}
                                padding={0.3}
                                colors={({ index }) => flareColors[index % flareColors.length]} // Assigns unique colors
                                axisLeft={{ legend: "Number of Recipes", legendPosition: "middle", legendOffset: -40 }}
                                axisBottom={{
                                    tickRotation: -30,
                                    legend: "Difficulty Level",
                                    legendPosition: "middle",
                                    legendOffset: 50,
                                }}
                            />
                        </div>
                    </>
                )}

                {/* Most Common Ingredients (Full Width) */}
                {graphType === "ingredients" && (
                    <div style={{ width: "80%", height: "500px", minWidth: "600px" }}>
                        <h3>🍽️ Most Common Ingredients</h3>
                        <ResponsiveBar
                            data={ingredientData}
                            keys={["count"]}
                            indexBy="category"
                            margin={{ top: 50, right: 50, bottom: 100, left: 60 }}
                            padding={0.3}
                            colors={({ index }) => flareColors[index % flareColors.length]} // Assigns unique colors
                            axisLeft={{ legend: "Number of Recipes", legendPosition: "middle", legendOffset: -40 }}
                            axisBottom={{
                                tickRotation: -30,
                                legend: "Ingredient",
                                legendPosition: "middle",
                                legendOffset: 50,
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default StatisticsPage;
