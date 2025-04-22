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
    
    HomePage.twoButton.should("have.class", "active");
    HomePage.fourButton.should("have.class", "active");
    HomePage.sixButton.should("have.class", "active");
    HomePage.eightButton.should("have.class", "active");

    // Validate that “One”, “Three”, “Five”, “Seven”, “Nine” are not highlighted
    HomePage.oneButton.should("not.have.class", "active");
    HomePage.threeButton.should("not.have.class", "active");
    HomePage.fiveButton.should("not.have.class", "active");
    HomePage.sevenButton.should("not.have.class", "active");
    HomePage.nineButton.should("not.have.class", "active");

  });

 
})  