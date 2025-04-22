import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
    static get url() {
      return "/#/";
    } 

    static get gridButton() {
        return cy.get("#demo-tab-grid");
      }
    
    static get twoButton() {
        return cy.get("#row1 > li:nth-child(2)").click();
    }  

    static get fourButton() {
        return cy.get("#row2 > li:nth-child(1)").click();
    }

    static get sixButton() {
        return cy.get("#row2 > li:nth-child(3)").click();
    }
    static get eightButton() {
      return cy.get("#row3 > li:nth-child(2)").click();
    }


     static get oneButton() {    
      return cy.get("#row1 > li:nth-child(1)");
    }
    
    static get threeButton() {
      return cy.get("#row1 > li:nth-child(3)");
    }

    static get fiveButton() {
      return cy.get("#row2 > li:nth-child(2)");
    }
    static get sevenButton() {
      return cy.get("#row3 > li:nth-child(1)");
    }
    static get nineButton() {
      return cy.get("#row3 > li:nth-child(3)");
    }

    // static get twohighlightedButton() {
    //   return cy.get("#row1 > li.list-group-item.active.list-group-item-action");
    // }

    // static get fourhighlightedButton() {
    //   return cy.get("#row2 > li.list-group-item.active.list-group-item-action");
    // }

    // static get sixhighlightedButton() {
    //   return cy.get("#row2 > li.list-group-item.active.list-group-item-action");
    // }

    // static get eighthighlightedButton() {
    //   return cy.get("#row3 > li.list-group-item.active.list-group-item-action");
    // }
    
}