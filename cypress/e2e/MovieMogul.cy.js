describe('Movie Mogul App', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies.json' })
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401', { fixture: 'singleMovie.json' })
    cy.visit('http://localhost:3000/')
  })

  it('displays a list of movies on page load', () => {
    cy.get('.movie-item').should('have.length', 2)
  })

  it('displays a single movie on click', () => {
    cy.get('.movie-list').first().click()
    cy.url().should('include', 'movies/337401')
    cy.get('.logo-container').should('exist')
    cy.get('.single-movie').should('exist')
  })

  it('returns to movie container display on click of the Brand Logo', () => {
    cy.get('.movie-list').find('.movie-item').first().click()
    cy.get('.single-movie').should('exist',  {force: true})
    cy.get('.logo-container').should('exist')
    cy.get('.brand-logo').click()
    cy.url().should('be.equal', 'http://localhost:3000/')
    cy.get('.movie-list').should('exist')
  })

})