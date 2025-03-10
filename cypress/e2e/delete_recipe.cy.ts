describe("Delete Recipe", () => {
    beforeEach(() => {
      cy.visit("http://localhost:5173/");
    });
  
    it("Should delete a recipe", () => {
      cy.contains("❌").first().click(); // Click the first delete button
  
      cy.on("window:confirm", () => true); // Handle confirmation pop-up if added
  
      cy.contains("Updated Chickpea Curry").should("not.exist");
    });
  });