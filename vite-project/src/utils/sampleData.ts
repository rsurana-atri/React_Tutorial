type DifficultyLevel = "Easy" | "Medium" | "Hard";

interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  vegetarian: boolean;
  vegan: boolean;
  difficulty: DifficultyLevel; 
}

const sampleData: Recipe[] = [
  { id: 1, name: "Margherita Pizza", ingredients: ["Flour", "Tomato", "Cheese", "Basil"], vegetarian: true, vegan: false, difficulty: "Easy" },
  { id: 2, name: "Vegan Bowl", ingredients: ["Quinoa", "Chickpeas", "Spinach", "Tahini"], vegetarian: true, vegan: true, difficulty: "Easy" },
  { id: 3, name: "Chicken Stir Fry", ingredients: ["Chicken", "Soy Sauce", "Broccoli", "Garlic"], vegetarian: false, vegan: false, difficulty: "Medium" },
  { id: 4, name: "Vegan Tofu Scramble", ingredients: ["Tofu", "Turmeric", "Bell Peppers", "Spinach"], vegetarian: true, vegan: true, difficulty: "Easy" },
  { id: 5, name: "Beef Stroganoff", ingredients: ["Beef", "Mushrooms", "Cream", "Onion"], vegetarian: false, vegan: false, difficulty: "Hard" },
  { id: 6, name: "Vegetarian Chili", ingredients: ["Beans", "Tomatoes", "Bell Peppers", "Corn"], vegetarian: true, vegan: false, difficulty: "Medium" },
  { id: 7, name: "Vegan Lentil Soup", ingredients: ["Lentils", "Carrots", "Celery", "Tomatoes"], vegetarian: true, vegan: true, difficulty: "Easy" },
  { id: 8, name: "Grilled Salmon", ingredients: ["Salmon", "Lemon", "Dill", "Garlic"], vegetarian: false, vegan: false, difficulty: "Medium" },
  { id: 9, name: "Caprese Salad", ingredients: ["Tomato", "Mozzarella", "Basil", "Olive Oil"], vegetarian: true, vegan: false, difficulty: "Easy" },
  { id: 10, name: "Vegan Avocado Toast", ingredients: ["Bread", "Avocado", "Lemon", "Chili Flakes"], vegetarian: true, vegan: true, difficulty: "Easy" },
  { id: 11, name: "Shrimp Pad Thai", ingredients: ["Shrimp", "Rice Noodles", "Peanuts", "Bean Sprouts"], vegetarian: false, vegan: false, difficulty: "Medium" },
  { id: 12, name: "Vegetable Stir Fry", ingredients: ["Carrots", "Bell Peppers", "Broccoli", "Soy Sauce"], vegetarian: true, vegan: true, difficulty: "Easy" },
  { id: 13, name: "Vegan Pumpkin Soup", ingredients: ["Pumpkin", "Coconut Milk", "Onion", "Ginger"], vegetarian: true, vegan: true, difficulty: "Easy" },
  { id: 14, name: "Cheeseburger", ingredients: ["Beef Patty", "Cheese", "Bun", "Lettuce"], vegetarian: false, vegan: false, difficulty: "Medium" },
  { id: 15, name: "Vegan Chickpea Curry", ingredients: ["Chickpeas", "Coconut Milk", "Turmeric", "Tomato"], vegetarian: true, vegan: true, difficulty: "Medium" },
  { id: 16, name: "Spinach & Ricotta Ravioli", ingredients: ["Pasta", "Ricotta", "Spinach", "Parmesan"], vegetarian: true, vegan: false, difficulty: "Hard" },
  { id: 17, name: "Vegan Chocolate Cake", ingredients: ["Flour", "Cocoa Powder", "Coconut Oil", "Almond Milk"], vegetarian: true, vegan: true, difficulty: "Hard" },
  { id: 18, name: "BBQ Ribs", ingredients: ["Pork Ribs", "BBQ Sauce", "Garlic", "Brown Sugar"], vegetarian: false, vegan: false, difficulty: "Hard" },
  { id: 19, name: "Vegan Stuffed Peppers", ingredients: ["Bell Peppers", "Rice", "Black Beans", "Tomato"], vegetarian: true, vegan: true, difficulty: "Medium" },
  { id: 20, name: "Mac & Cheese", ingredients: ["Pasta", "Cheese", "Milk", "Butter"], vegetarian: true, vegan: false, difficulty: "Easy" },
  { id: 21, name: "Vegan Cauliflower Tacos", ingredients: ["Cauliflower", "Tortilla", "Avocado", "Lime"], vegetarian: true, vegan: true, difficulty: "Medium" },
  { id: 22, name: "Baked Ziti", ingredients: ["Pasta", "Tomato Sauce", "Mozzarella", "Ricotta"], vegetarian: true, vegan: false, difficulty: "Medium" },
  { id: 23, name: "Vegan Pesto Pasta", ingredients: ["Pasta", "Basil", "Pine Nuts", "Nutritional Yeast"], vegetarian: true, vegan: true, difficulty: "Medium" },
  { id: 24, name: "Eggplant Parmesan", ingredients: ["Eggplant", "Tomato Sauce", "Mozzarella", "Parmesan"], vegetarian: true, vegan: false, difficulty: "Hard" },
];

export default sampleData;