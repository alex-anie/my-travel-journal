
describe('check if heading text contain chain icon', () => {
    it('check if the class is still active on the link', () => {
      cy.visit('http://localhost:5173/')
      cy.get("h1.visits").should('have.class', 'visits')
    })
  })
  
  