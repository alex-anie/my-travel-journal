/// <reference types="cypress" />

describe('Validate Image URL', () => {
    it('check if the image contains the right url', () => {
      cy.visit('http://localhost:5173/')
      cy.get(".image-wrapper").each(($item) => {
        cy.wrap($item).should("include", "https://images.unsplash.com/")
      });
    })
  })
  
  