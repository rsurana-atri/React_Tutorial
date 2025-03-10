/// <reference types="cypress" />

describe("Recipe Manager App - Full Test", () => {
    beforeEach(() => {
      cy.visit("http://localhost:5173/"); 
    });
  
    it("Displays the homepage correctly", () => {
      cy.contains("Recipe Manager").should("be.visible");
      cy.contains("Add New Recipe").should("be.visible");
    });
  
    it("Adds a new recipe", () => {
      cy.contains("Add New Recipe").click();
     
      cy.get("input[name='name']").type("Test Recipe");
      cy.get("input[name='ingredients']").type("Tomato, Cheese");
      cy.get("input[name='vegetarian']").check();
      cy.get("input[name='vegan']").uncheck();
      cy.get("select[name='difficulty']").select("Medium");
  
      cy.get("button[type='submit']").click();
  
      // Confirm new recipe is visible
      cy.contains("Test Recipe").should("be.visible");
    });
  
    it("Edits an existing recipe", () => {
      cy.contains("✏️").first().click(); // Click the first edit button
  
      cy.get("input[name='name']").clear().type("Updated Recipe Name");
      cy.get("button[type='submit']").click();
  
      // Confirm edited recipe is visible
      cy.contains("Updated Recipe Name").should("be.visible");
    });
  
    it("Deletes a recipe", () => {
      cy.contains("❌").first().click(); // Click the first delete button
  
      cy.on("window:confirm", () => true); // Handle confirmation pop-up if added
  
      cy.contains("Updated Recipe Name").should("not.exist");
    });
  
    it("Filters recipes by ingredient (Tomato - only first row check)", () => {
      cy.get("input[placeholder='Enter ingredient...']").type("Tomato{enter}");
  
      // Ensure only the first result contains "Tomato"
      cy.get("tbody tr").first().should("contain.text", "Tomato");
  
      // Remove filter and confirm full list is visible again
      cy.get("div").contains("❌").click();
      cy.get("tbody tr").should("have.length.greaterThan", 1);
    });
  });
  