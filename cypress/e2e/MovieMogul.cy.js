describe('Movie Mogul App', () => {
  beforeEach(() => {
    // cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies.json' })
    // cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', { fixture: 'singleMovie.json' })
    cy.visit('http://localhost:3000/')
  })

  it('displays a list of movies on page load', () => {
    cy.get('.movie-list').find('.movie-item').should('have.length', 80)
  })

  it('displays a single movie on click', () => {
    cy.get('.movie-list').find('.movie-item').first().click()
    cy.url().should('include', '/movies/436270')
    cy.get('.single-movie').should('exist')
  })

  it('returns to movie container display on click of Back To Home', () => {
    cy.get('.movie-list').find('.movie-item').first().click()
    cy.get('.single-movie').should('exist')
    cy.get('.single-movie').contains('Back to Home').click()
    cy.url().should('not.include', '/movies/337401')
    cy.get('.movie-list').should('exist')
  })

  it('displays an error message if the movies fail to load', () => {
    cy.intercept('GET', '', { statusCode: 500 })
    cy.visit('http://localhost:3000/')
    cy.get('.error-message').should('exist')
  })

  it('displays a message if a movie fails to load', () => {
    // cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', { statusCode: 500 })
    cy.get('.movie-list').find('.movie-item').first().click()
    cy.get('.error-message').should('exist')
  })
})