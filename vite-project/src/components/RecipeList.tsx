import React, { useMemo, useState } from "react";
import { useTable, Column } from "react-table";
import { Link } from "react-router-dom";

interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  vegetarian: boolean;
  vegan: boolean;
  difficulty: "Easy" | "Medium" | "Hard";
}

interface RecipeListProps {
  recipes: Recipe[];
  deleteRecipe: (id: number) => void;
}

const RecipeList = ({ recipes, deleteRecipe }: RecipeListProps): React.ReactElement => {
  const [searchIngredients, setSearchIngredients] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const normalize = (str: string) => str.trim().toLowerCase(); // ✅ Normalize inputs for matching

  const addIngredient = () => {
    const normalizedInput = normalize(inputValue);
    if (normalizedInput && !searchIngredients.includes(normalizedInput)) {
      setSearchIngredients([...searchIngredients, normalizedInput]);
    }
    setInputValue(""); // Clear input after adding
  };

  const removeIngredient = (ingredient: string) => {
    setSearchIngredients(searchIngredients.filter((ing) => ing !== ingredient));
  };

  const filteredRecipes = useMemo(() => {
    if (searchIngredients.length === 0) {
      return [...recipes].sort((a, b) => a.id - b.id); // Default sort by ID
    }

    return [...recipes]
      .map((recipe) => ({
        ...recipe,
        matchCount: recipe.ingredients.filter((ing) =>
          searchIngredients.some((searchTerm) => normalize(ing).includes(searchTerm))
        ).length,
      }))
      .sort((a, b) => b.matchCount - a.matchCount);
  }, [recipes, searchIngredients]);

  const columns: Column<Recipe>[] = useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "Name", accessor: "name" },
      {
        Header: "Ingredients",
        accessor: "ingredients",
        Cell: ({ value }: { value: string[] }) => value.join(", "),
      },
      {
        Header: "Vegetarian",
        accessor: "vegetarian",
        Cell: ({ value }: { value: boolean }) => (value ? "Yes" : "No"),
      },
      {
        Header: "Vegan",
        accessor: "vegan",
        Cell: ({ value }: { value: boolean }) => (value ? "Yes" : "No"),
      },
      { Header: "Difficulty", accessor: "difficulty" },
      {
        Header: "Actions",
        Cell: ({ row }: { row: { original: Recipe } }) =>
          React.createElement(
            "div",
            { style: { display: "flex", gap: "10px" } },
            React.createElement(Link, { to: `/edit-recipe/${row.original.id}` }, "✏️"),
            React.createElement(
              "button",
              {
                onClick: () => deleteRecipe(row.original.id),
                style: {
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  fontSize: "16px",
                  color: "red",
                },
              },
              "❌"
            )
          ),
      },
    ],
    [deleteRecipe]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data: filteredRecipes,
  });

  return React.createElement(
    "div",
    null,
    // Search Box UI
    React.createElement(
      "div",
      { style: { marginBottom: "20px" } },
      React.createElement("h3", null, "Filter Recipes by Ingredients"),
      React.createElement(
        "div",
        { style: { display: "flex", gap: "10px", alignItems: "center" } },
        React.createElement("input", {
          type: "text",
          placeholder: "Enter ingredient...",
          value: inputValue,
          onChange: (e) => setInputValue(e.target.value),
          onKeyDown: (e) => e.key === "Enter" && addIngredient(),
          style: { padding: "8px", border: "1px solid #ccc", borderRadius: "5px" },
        }),
        React.createElement(
          "button",
          {
            onClick: addIngredient,
            style: {
              padding: "8px",
              border: "none",
              background: "#007bff",
              color: "white",
              borderRadius: "5px",
              cursor: "pointer",
            },
          },
          "+ Add"
        )
      ),
      // Ingredient Tags UI
      React.createElement(
        "div",
        { style: { marginTop: "10px", display: "flex", gap: "5px", flexWrap: "wrap" } },
        searchIngredients.map((ingredient) =>
          React.createElement(
            "div",
            {
              key: ingredient,
              style: {
                display: "flex",
                alignItems: "center",
                gap: "5px",
                background: "#e0e0e0",
                padding: "5px 10px",
                borderRadius: "20px",
              },
            },
            ingredient,
            React.createElement(
              "button",
              {
                onClick: () => removeIngredient(ingredient),
                style: {
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  color: "red",
                  fontSize: "14px",
                },
              },
              "❌"
            )
          )
        )
      )
    ),
    // Recipe Table UI
    React.createElement(
      "table",
      { ...getTableProps(), border: "1" },
      React.createElement(
        "thead",
        null,
        headerGroups.map((headerGroup, index) =>
          React.createElement(
            "tr",
            { ...headerGroup.getHeaderGroupProps(), key: `header-${index}` },
            headerGroup.headers.map((column, colIndex) =>
              React.createElement(
                "th",
                { ...column.getHeaderProps(), key: `col-${colIndex}` },
                column.render("Header")
              )
            )
          )
        )
      ),
      React.createElement(
        "tbody",
        getTableBodyProps(),
        rows.map((row, rowIndex) => {
          prepareRow(row);
          return React.createElement(
            "tr",
            { ...row.getRowProps(), key: `row-${row.original.id}` },
            row.cells.map((cell, cellIndex) =>
              React.createElement(
                "td",
                { ...cell.getCellProps(), key: `cell-${rowIndex}-${cellIndex}` },
                cell.render("Cell")
              )
            )
          );
        })
      )
    )
  );
};

export default RecipeList;