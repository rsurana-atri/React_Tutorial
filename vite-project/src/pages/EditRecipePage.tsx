import { Link, useParams } from "react-router-dom"

const EditRecipePage: React.FC = () => {
    const { recipeID } = useParams<{ recipeID: string }>();
    return (
        <div>
            <h1>Edit Recipe {recipeID}</h1>
            <Link to="/"> Back to Home</Link>
        </div>


    );
};

export default EditRecipePage;