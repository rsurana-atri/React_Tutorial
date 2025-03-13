import AppRouter from "./routes/AppRouter";
import RecipeProvider from "./context/RecipeProvider";

const App: React.FC = () => {
// basic recipe provider
  return (
    <RecipeProvider>
      <AppRouter />
    </RecipeProvider>
  );

};

export default App;