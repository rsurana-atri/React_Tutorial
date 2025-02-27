# Project Description

## Must use the following libraries:
1. React Router
2. React Table
3. React Hook Form

Optional:
1. Reactstrap (bootstrap 5 version)
2. React-Select
 
#### Application should demonstrate CRUD operations - does not need to be stored in DB.  Can use a local application state variable to store change (i.e., on refresh goes back to default state).
 
## Sample Outline: Pizza Menu application

### Homepage (path = /) 
1. React table to list of pizzas (columns):

    2. ID (link to edit pizza using React-Router link)

    3. Pizza (name of pizza)

    4. Toppings - show list of toppings on pizza

    5. Fan Favorite (yes, no)

    6. Delivery (yes, no)

    7. Link to add todo; can be modal using Reactstrap

### Add Pizza Page (path = /add-pizza)
1. Form that is created using React-Hook-Form

    2. Input field - pizza name

    3. Multi-checkbox field -  toppings - cheese, pepperoni, etc.

    4. Radio field - fan favorite  (1-Yes, 0-No)

    5. Select field - available for delivery (1-Yes, 0-No)

    6. Use react-select time permitting

        7. On add users should be returned to the HomePage

### Edit/Delete Pizza page (path = /:pizzaId)
1. Populate form with values for selected pizza

2. Allow users to modify values

3. Submit should return users back to Homepage

4. Allow users the option to delete pizza

5. On delete should return users back to Homepage
 

### Testing using Cypress
1. Review Cypress Documentation 

    2. View list of pizzas

    3. Add pizza

    4. Edit pizza

    5. Delete pizza
 

### Reach Goals
1. Create a usePizza hook to store operations for managing pizzas on the menu

2. Provides pizzas, addPizza, editPizza, deletePizza

3. Use json-server and axios library to create a persistent application

4. Incorporate graphs into the homepage (e.g., chart pizza toppings in bar chart)