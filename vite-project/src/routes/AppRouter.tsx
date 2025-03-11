import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddRecipePage from "../pages/AddRecipePage";
import EditRecipePage from "../pages/EditRecipePage";
import StatisticsPage from "../pages/StatisticsPage";
import ExplorePage from "../pages/ExplorePage";

const AppRouter: React.FC = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/add-recipe" element={<AddRecipePage />} />
                <Route path="/edit-recipe/:recipeId" element={<EditRecipePage />} />
                <Route path="/statistics" element={<StatisticsPage />} />
                <Route path="/explore" element={<ExplorePage />} />

            </Routes>
        </Router>
    );
};

export default AppRouter;