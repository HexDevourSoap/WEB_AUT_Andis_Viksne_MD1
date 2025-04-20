import { HomePage } from "./pageObjects/HomePage";

describe('demoqa scenarios', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/selectable')

  })

  it("Grid", () => {
    // Click Grid button
    HomePage.gridButton.click();
    
    
  });



})