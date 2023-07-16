import MultipleStub from "../fixtures/MultipleStub"
import SingleStub from "../fixtures/SingleStub"

describe('User Form dashboard with user flows', () => {
  let testVisit = () => cy.visit('http://localhost:3000/')
  
  beforeEach(()=> {

    cy.intercept({method: 'GET', url:'https://rancid-tomatillos.herokuapp.com/api/v2/movies'}, MultipleStub)
    cy.intercept({method: 'GET', url:'https://rancid-tomatillos.herokuapp.com/api/v2/movies/*'}, SingleStub)
    // cy.intercept({ method: 'GET', url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies' }, { 
    //   statusCode: 500, 
    // })
    testVisit()

  })
  it('displays multiple movie items on the home page', () => {
    cy.get('.movie-item').should('have.length', MultipleStub.movies.length)

    MultipleStub.movies.forEach((movie, index) => {
      cy.get('.movie-item').eq(index).within(() => {
        cy.get('h2').should('contain', movie.title)
        cy.get('img').should('have.attr', 'src', movie.poster_path)
        cy.get('p').contains(`Average Rating: ${movie.average_rating}`)
        cy.get('p').contains(`Release Date: ${movie.release_date}`)
      })
    })
  })
  it('displays single movie details on the movie page', () => {
    const movieId = SingleStub.movie.id

    cy.get('.movie-item').contains(SingleStub.movie.title).click()
    
    cy.url().should('include', `/movies/${movieId}`)

    cy.get('.single-movie').within(() => {
      cy.get('h2').should('contain', SingleStub.movie.title)
      cy.get('img').should('have.attr', 'src', SingleStub.movie.poster_path)
      cy.get('p').contains(`Average Rating: ${SingleStub.movie.average_rating}`)
      cy.get('p').contains(`Release Date: ${SingleStub.movie.release_date}`)
      cy.get('p').contains(`Runtime: ${SingleStub.movie.runtime} min`)
      cy.get('p').contains(`Overview: ${SingleStub.movie.overview}`)
    })
  })
})