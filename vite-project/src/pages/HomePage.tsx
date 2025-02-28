import { Link } from "react-router-dom"

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Recipe Manager</h1>
            <Link to="/add-recipe"> + Add New Recipe</Link>
        </div>


    );
};

export default HomePage;