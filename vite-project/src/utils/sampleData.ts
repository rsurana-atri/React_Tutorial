type DifficultyLevel = "Easy" | "Medium" | "Hard";

interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  vegetarian: boolean;
  difficulty: DifficultyLevel; 
}

const sampleData: Recipe[] = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    ingredients: ["Pasta", "Meat", "Tomato Sauce"],
    vegetarian: false,
    difficulty: "Medium",
  },
  {
    id: 2,
    name: "Vegetable Stir Fry",
    ingredients: ["Carrots", "Broccoli", "Soy Sauce"],
    vegetarian: true,
    difficulty: "Easy",
  },
];

export default sampleData;