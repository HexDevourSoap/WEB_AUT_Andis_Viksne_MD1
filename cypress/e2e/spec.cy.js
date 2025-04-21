import { HomePage } from "../pageObjects/Homepage";


describe('demoqa scenarios', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/selectable')

  });
  
  // Click “Grid” scenario
  it("Grid", () => {
    // Click Grid button
    HomePage.gridButton.click();
  });

  // Click - “Two”, “Four”, “Six”, “Eight” scenario
  it("Two, Four, Six, Eight", () => {
    // Click Grid button
    HomePage.gridButton.click();
    // Click - “Two”, “Four”, “Six”, “Eight”
    HomePage.twoButton.click();
    HomePage.fourButton.click();
    HomePage.sixButton.click();
    HomePage.eightButton.click();

    // Validate - “Two”, “Four”, “Six”, “Eight” are highlighted
    
    HomePage.twohighlightedButton.should("have.class", "active");


  });

 
})  