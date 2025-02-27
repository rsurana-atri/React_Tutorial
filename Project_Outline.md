# Recipe Manager Application

## Must use the following libraries:
- [x] React Router []
- [x] React Table []
- [x] React Hook Form []

### Optional:
- [ ] Reactstrap (bootstrap 5 version) []
- [ ] React-Select []

## Application should demonstrate CRUD operations
- Changes stored in local state (not persisted in DB)
- On refresh, data resets to default state

---

## **Homepage (path = /)**
- Uses **React Table** [] to display a list of recipes
- **Columns:**
  - [ ] **ID** (link to edit recipe using **React Router Link** [])
  - [ ] **Recipe Name**
  - [ ] **Ingredients** (list of selected ingredients)
  - [ ] **Vegetarian** (Yes/No)
  - [ ] **Vegan** (Yes/No)
  - [ ] **Difficulty Level** (Easy, Medium, Hard)
  - [ ] Button to **add a new recipe** (modal using **Reactstrap** [] if time permits)

---

## **Add Recipe Page (path = /add-recipe)**
- Uses **React Hook Form** [] for form management
- **Form Fields:**
  - [ ] **Input field** - Recipe Name
  - [ ] **Multi-checkbox field** - Ingredients (Flour, Sugar, Eggs, etc.)
  - [ ] **Radio field** - Vegetarian (Yes/No)
  - [ ] **Radio field** - Vegan (Yes/No)
  - [ ] **Select field** - Difficulty Level (Easy, Medium, Hard)
  - [ ] Uses **React-Select** [] (if time permits)
- On add, users are returned to the Homepage

---

## **Edit/Delete Recipe Page (path = /:recipeId)**
- Pre-fills form with the selected recipe's details
- Users can:
  - [ ] Modify values and submit changes
  - [ ] Delete the recipe
- On submit or delete, users return to the Homepage

---

## **Testing using Cypress**
- [ ] Review Cypress Documentation
- [ ] Implement tests for:
  - [ ] Viewing the list of recipes
  - [ ] Adding a new recipe
  - [ ] Editing a recipe
  - [ ] Deleting a recipe

---

## **Reach Goals**
- [ ] Create a **useRecipes** custom hook for managing recipe operations
  - [ ] Provides `recipes`, `addRecipe`, `editRecipe`, `deleteRecipe`
- [ ] Incorporate a **chart** [] (e.g., bar chart showing the number of vegetarian vs. non-vegetarian recipes)
- [ ] Use `json-server` and `axios` [] for persistent data storage
