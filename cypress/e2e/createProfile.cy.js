describe('Check if create profile page renders the correct components', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/cadastro')
  })

  it('should steps 1 and 2 works', () => {
    cy.get('input[type="text"]').type('Wagner')
    cy.get('input[type="email"]').type('teste@teste.com')
    cy.get('input[type="tel"]').type('123456789')
    cy.get('button[type="submit"]').click()
    cy.get('input[type="password"]').type('Wagner1067@')
    cy.get('button[type="submit"]').should('be.visible')
  })
})
