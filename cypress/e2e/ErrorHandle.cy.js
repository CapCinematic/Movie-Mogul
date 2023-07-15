describe('Error handling', () => {
  it('displays an error message when movies fail to load', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/007', { statusCode: 404 })
    cy.visit('http://localhost:3000/movies/007')
    cy.get('.error-message').should('contain', 'Error: Failed to fetch movies')
  })


  it('displays an error message when the server returns a 500 error', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { statusCode: 500 })
    cy.visit('http://localhost:3000/movies')
    cy.get('.error-message').should('exist')
    cy.get('.error-message').should('contain', 'Failed to fetch movies')
  })

  it('displays an error message when the server returns a 500 error for single movies', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies.json' })
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401', { fixture: 'singleMovie.json', statusCode: 500 })
    cy.visit('http://localhost:3000/movies/337401')
    cy.url().should('include', '/movies/337401')
    cy.get('.error-message').should('exist')
    cy.get('.error-message').should('contain', 'Failed to fetch movie')
  })
})