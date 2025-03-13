/// <reference types="cypress" />

describe("Edit Recipe", () => {
    beforeEach(() => {
      cy.visit("http://localhost:5173/"); 
    });
  
    it("Should edit an existing recipe", () => {
      cy.contains("✏️").first().click(); // Click the first edit button
  
      cy.get("input[name='name']").clear().type("Updated Chickpea Curry");
      cy.get("button[type='submit']").click();
  
      // Confirm edited recipe is visible
      cy.contains("Updated Chickpea Curry").should("be.visible");
    });
  });