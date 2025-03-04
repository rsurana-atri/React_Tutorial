import React, { useMemo } from "react";
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
            {style: {display: "flex", gap: "10px"} },
            React.createElement(Link, { to: `/edit-recipe/${row.original.id}` }, "✏️"),
            React.createElement(
              "button",
              {
                onClick: () => deleteRecipe(row.original.id),
                style:{
                  border: "none",
                  background: "none",
                  cursor: "none",
                  fontSize: "none",
                  color: "red",
                },
              },
              "❌"
            )
          )
      },
    ],
    [deleteRecipe]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data: recipes,
  });

  return React.createElement(
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
  );
};

export default RecipeList;