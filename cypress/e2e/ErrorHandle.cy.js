describe('Error handling', () => {
  it('displays an error message when movies fail to load', () => {
    cy.intercept('GET', 'http://localhost:3000/api/v2/movies', { statusCode: 500 })
    cy.visit('/')
    cy.get('.error-message').should('exist')
  })

  it('displays an error message when a single movie fails to load', () => {
    cy.intercept('GET', 'http://localhost:3000/api/v2/movies/694919', { statusCode: 500 })
    cy.visit('/movies/694919')
    cy.get('.error-message').should('exist')
  })

  it('displays an error message when single movie id is incorrect', () => {
    cy.intercept('GET', 'http://localhost:3000/api/v2/movies/1', { fixture: 'movieMissingData.json' })
    cy.visit('/movies/1')
    cy.get('.error-message').should('exist')
    cy.get('.poster-container').should('not.exist')
  })
})