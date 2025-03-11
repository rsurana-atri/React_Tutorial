import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css'; // Import the existing CSS file for styling

interface Recipe {
	id: number;
	input: string;
	ingredients: { name: string; measurement: string }[];
	instructions: string[];
}

const formatRecipeName = (name: string): string => {
	return name
		.split('-')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
};

const ExplorePage: React.FC = () => {
	const [recipes, setRecipes] = useState<Recipe[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
	const navigate = useNavigate();

	useEffect(() => {
		fetch('http://localhost:3000/recipes', { mode: 'cors' })
		.then(response => response.json())
		.then(data => {
			if (Array.isArray(data)) {
				const formattedRecipes = data.map((recipe: { id: number; input: string; output: string }) => {
					const output = recipe.output;
					const ingredientsMatch = output.match(/ingredients:(.*?)\ninstructions:/s);
					const ingredientsString = ingredientsMatch ? ingredientsMatch[1] : '';
					const ingredients = ingredientsString.split('\u3001').map((ingredient: string) => {
						const match = ingredient.match(/(.*)\((.*)\)/);
						if (match) {
							return { name: match[1].trim(), measurement: match[2].trim() };
						}
						return { name: ingredient.trim(), measurement: '' };
					});
					const instructionsMatch = output.match(/instructions:\n([\s\S]*)/);
					const instructions = instructionsMatch ? instructionsMatch[1].split('\n').map((instr: string) => instr.trim()).filter((instr: string) => instr) : [];
					return {
						id: recipe.id,
						input: formatRecipeName(recipe.input),
						ingredients,
						instructions
					};
				});
				setRecipes(formattedRecipes);
			}
			setLoading(false);
		})
		.catch(error => {
			console.error('Error fetching data:', error);
			setLoading(false);
		});
	}, []);

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const filteredRecipes = recipes.filter(recipe =>
		recipe.input.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const handleRecipeClick = (recipe: Recipe) => {
		setSelectedRecipe(recipe);
	};

	const closeModal = () => {
		setSelectedRecipe(null);
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="explore-page">
			<h1>Explore Page</h1>
			<button onClick={() => navigate('/')}>Go to Homepage</button>
			{selectedRecipe && (
				<div className="modal">
					<div className="modal-content">
						<span className="close" onClick={closeModal}>&times;</span>
						<h2>Recipe Details</h2>
						<p><strong>Ingredients:</strong></p>
						<table className="ingredients-table">
							<thead>
								<tr>
									<th>Ingredient</th>
									<th>Measurement</th>
								</tr>
							</thead>
							<tbody>
								{selectedRecipe.ingredients.map((ingredient, index) => (
									<tr key={index}>
										<td>{ingredient.name}</td>
										<td>{ingredient.measurement}</td>
									</tr>
								))}
							</tbody>
						</table>
						<p><strong>Instructions:</strong></p>
							<ol>
								{selectedRecipe.instructions.map((instruction, index) => (
									<li key={index}>{instruction}</li>
								))}
							</ol>
						</div>
					</div>
			)}
			<div className="recipe-list">
				<input
					type="text"
					placeholder="Search for a recipe"
					value={searchTerm}
					onChange={handleSearch}
					className="search-input"
				/>
				<table className="recipe-table">
					<tbody>
						{filteredRecipes.map(recipe => (
							<tr key={recipe.id} onClick={() => handleRecipeClick(recipe)} className="clickable-row">
								<td>{recipe.input}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ExplorePage;
