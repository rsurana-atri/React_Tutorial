/// <reference types="cypress" />

describe("Add New Recipe", () => {
    beforeEach(() => {
      cy.visit("http://localhost:5173/");
    });
  
    it("Should have an explore page", () => {
      cy.contains("Explore").click();
      cy.get("input[placeholder='Search for a recipe']").type("pancake{enter}");
      cy.get("tbody tr").first().should("contain.text", "Pancakes");
      cy.contains("tbody tr", "Kid Friendly").click();
      cy.get(".explore-page .close").click();
      cy.get("button").contains("Go to Homepage").click();

    });
  });