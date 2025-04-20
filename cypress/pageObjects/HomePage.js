import { BasePage } from "./pageObjects/BasePage";

export class HomePage extends BasePage {
    static get url() {
      return "/#/";
    } 

    static get gridButton() {
        return cy.get("#demo-tab-grid");
      }



}