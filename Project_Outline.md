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
  - [x] **ID** (link to edit recipe using **React Router Link** [])
  - [x] **Recipe Name** (text field)
  - [x] **Ingredients** (list of selected ingredients)
  - [x] **Vegetarian** (Yes/No)
  - [x] **Vegan** (Yes/No)
  - [x] **Difficulty Level** (Easy, Medium, Hard)
  - [x] Button to **add a new recipe** (using **Reactstrap** [] if time allows)

---

## **Add Recipe Page (path = /add-recipe)**
- Uses **React Hook Form** [] for form management
- **Form Fields:**
  - [x] **Input field** - Recipe Name
  - [x] **Multi-checkbox field** - Ingredients (Flour, Sugar, Eggs, etc.)
  - [x] **Radio field** - Vegetarian (Yes/No)
  - [x] **Radio field** - Vegan (Yes/No)
  - [x] **Select field** - Difficulty Level (Easy, Medium, Hard)
  - [x] Uses **React-Select** [] (if time permits)
- On add, users are returned to the Homepage

---

## **Edit/Delete Recipe Page (path = /:recipeId)**
- Pre-fills form with the selected recipe's details
- Users can:
  - [x] Modify values and submit changes
  - [x] Delete the recipe
- On submit or delete, users return to the Homepage

---

## **Testing using Cypress**
- [x] Review Cypress Documentation
- [x] Implement tests for:
  - [x] Viewing the list of recipes
  - [x] Adding a new recipe
  - [x] Editing a recipe
  - [x] Deleting a recipe

---

## **Reach Goals**
- [x] Add search capability, that looks for most relevant recipes given a list of ingredients
- [ ] Incorporate a **chart** [] (e.g., bar chart showing the number of vegetarian vs. non-vegetarian recipes)
- [ ] Incorporate an `explore` page that pulls from external recipies using json_server