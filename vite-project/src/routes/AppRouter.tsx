import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddRecipePage from "../pages/AddRecipePage";
import EditRecipePage from "../pages/EditRecipePage";

const AppRouter: React.FC = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/add-recipe" element={<AddRecipePage />} />
                <Route path="/edit-recipe/:recipeID" element={<EditRecipePage />} />

            </Routes>
        </Router>
    );
};

export default AppRouter;