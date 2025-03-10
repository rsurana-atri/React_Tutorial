/// <reference types="cypress" />

describe("Add New Recipe", () => {
    beforeEach(() => {
      cy.visit("http://localhost:5173/");
    });
  
    it("Should add a new recipe successfully", () => {
      cy.contains("Add New Recipe").click();
     
      cy.get("input[name='name']").type("Chickpea Curry");
      cy.get("input[name='ingredients']").type("Chickpeas, Coconut Milk, Spices");
      cy.get("input[name='vegetarian']").check();
      cy.get("input[name='vegan']").check();
      cy.get("select[name='difficulty']").select("Medium");
  
      cy.get("button[type='submit']").click();
  
      // Confirm new recipe is visible
      cy.contains("Chickpea Curry").should("be.visible");
    });
  });