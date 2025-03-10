/// <reference types="cypress" />

describe("Concurrent Search for Chickpeas & Coconut Milk", () => {
    beforeEach(() => {
      cy.visit("http://localhost:5173/");
    });
  
    it("Filters recipes containing Chickpeas and Coconut Milk together", () => {
      cy.get("input[placeholder='Enter ingredient...']").type("Chickpeas{enter}");
      cy.get("input[placeholder='Enter ingredient...']").type("Coconut Milk{enter}");
  
      // Ensure at least one row contains "Chickpeas"
      cy.get("tbody tr").first().should("contain.text", "Chickpeas");
  
      // Ensure at least one row contains "Coconut Milk"
      cy.get("tbody tr").first().should("contain.text", "Coconut Milk");
  
      // Remove both filters
      cy.get("div").contains("❌").first().click(); // Remove "Chickpeas"
      cy.get("div").contains("❌").first().click(); // Remove "Coconut Milk"
  
      // Confirm full list is visible again
      cy.get("tbody tr").should("have.length.greaterThan", 1);
    });
  });