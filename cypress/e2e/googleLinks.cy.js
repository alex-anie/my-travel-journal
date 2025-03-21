
describe('check if the google link is valid', () => {
    it('test for validating google link', () => {
      cy.visit('http://localhost:5173/')
      cy.get("a.google-map-link")
      cy.contains('View on Google Maps').should('be.visible')
    })
  })
  
  