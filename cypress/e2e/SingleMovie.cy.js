describe('Single-Movie component', () => {
  beforeEach(() => {
    // cy.intercept('GET', 'http://localhost:3000/api/v2/movies', { fixture: 'movies.json' })
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', { fixture: 'singleMovie.json' })
    cy.visit('http://localhost:3000/movies/436270')
  })

  it('displays a single movie on click', () => {
    cy.url().should('include', '/movies/436270')
    cy.get('.single-movie').should('exist')
    cy.get('.poster-container').find('img').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg')
    cy.get('.info-container').find('h2').should('contain', 'Black Adam')
    cy.get('.info-container').find('p').eq(0).should('contain', 'Average Rating: 4')
    cy.get('.info-container').find('p').eq(1).should('contain', 'Release Date: 2022-10-19')
    cy.get('.info-container').find('p').eq(2).should('contain', 'Runtime: 125 min')
    cy.get('.info-container').find('p').eq(3).should('contain', 'Genres: ActionFantasyScience Fiction')
    cy.get('.info-container').find('p').eq(4).should('contain', 'Overview: Nearly 5,000 years after he was bestowed')
  })
})
