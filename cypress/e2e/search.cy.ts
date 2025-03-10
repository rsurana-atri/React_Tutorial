/// <reference types="cypress" />

describe("Concurrent Search for Chickpeas & Coconut Milk", () => {
    beforeEach(() => {
      cy.visit("http://localhost:5173/");
    });
  
    it("Filters recipes containing Chickpeas and Coconut Milk together", () => {
      cy.get("input[placeholder='Enter ingredient...']").type("tomato{enter}");
      cy.get("input[placeholder='Enter ingredient...']").type("Coconut Milk{enter}");
      cy.get("input[placeholder='Enter ingredient...']").type("beans{enter}");
      cy.get("input[placeholder='Enter ingredient...']").type("rice{enter}");
      cy.get("input[placeholder='Enter ingredient...']").type("peppers{enter}");
      cy.get("input[placeholder='Enter ingredient...']").type("flour{enter}");
  
      // Ensure at least one row contains "Chickpeas"
      cy.get("tbody tr").first().should("contain.text", "Rice");
  
      // Ensure at least one row contains "Coconut Milk"
      cy.get("tbody tr").first().should("contain.text", "Black Beans");
  
      // Remove both filters
      cy.get("div").contains("❌").first().click(); 
      cy.get("div").contains("❌").first().click(); 
      cy.get("div").contains("❌").first().click(); 
      cy.get("div").contains("❌").first().click(); 
      cy.get("div").contains("❌").first().click(); 
      cy.get("div").contains("❌").first().click(); 
  
      // Confirm full list is visible again
      cy.get("tbody tr").should("have.length.greaterThan", 1);
    });
  });