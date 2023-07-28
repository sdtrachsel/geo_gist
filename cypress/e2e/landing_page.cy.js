describe('Landing Page', () => {
  beforeEach(() => {
    cy.intercept('GET', `https://newsapi.org/v2/top-headlines?country=us&apiKey=4844c8d920594b76a01af8ecf0c5a5b9`, {
      statusCode: 200,
      fixture: 'us_art.json'
    });
    cy.intercept('GET', `https://newsapi.org/v2/top-headlines?country=gb&apiKey=4844c8d920594b76a01af8ecf0c5a5b9`, {
      statusCode: 200,
      fixture: 'uk_art.json'
    });
    cy.visit('http://localhost:3000/');
  });

  it('it should display logo', () => {
    cy.get('.logo').should('be.visible').and('have.attr', 'src').and('include', '/static/media/logo.0066ac59e97c4a7d97f1.png')
  });

  it('should display US articles upon load', () => {
    cy.get('#country').should('have.value', 'us')
    cy.get('.card').should('have.length', 20)
    cy.get('.card-title').first().contains('Australia vs. Nigeria highlights: Nigeria stuns Australia with 3-2 comeback')
    cy.get('.card-title').last().contains('Heart attack death risk can double during heat waves, high pollution: study')
    cy.get('.card-source').first().contains('Fox Sports')
    cy.get('.card-source').last().contains('New York Post')

    cy.get('.card-date').first().contains('07/27/2023')
    cy.get('.card-date').last().contains('07/26/2023')
    cy.get('.card-desc').first().contains("The 2023 FIFA Women's World Cup continued Thursday with Nigeria rallying to beat Australia. Here were the top moments!")
    cy.get('.card-desc').last().contains('Certain groups of people may have twice the risk of dying from a heart attack during heat waves and high levels of fine particulate pollution, according to a new study published in Circulation.')
    cy.get('.card-img').first().should('have.attr', 'src', 'https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/07/1408/814/07.21.23_Womens-World-Cup-Top-Moments_Australia-vs-Nigeria_16x9_3.jpg?ve=1&tl=1')
    cy.get('.card-img').last().should('have.attr', 'src', 'https://nypost.com/wp-content/uploads/sites/2/2023/07/NYPICHPDPICT000014735997.jpg?quality=75&strip=all&w=1024')
  });

  it('it should display Uk articles when selected', () => {
    cy.get('#country').select('gb') 
    cy.get('.card').should('have.length', 20)
    cy.get('.card-title').first().contains("An emotional farewell from Liverpool's squad to Jordan Henderson")
    cy.get('.card-title').last().contains("Rishi Sunak 'steps in' to sort out London housing crisis taking a dig at Sadiq Khan for sky-high home prices")
    cy.get('.card-source').first().contains('Google News')
    cy.get('.card-source').last().contains('Google News')

    cy.get('.card-date').first().contains('07/27/2023')
    cy.get('.card-date').last().contains('07/27/2023')
    cy.get('.card-desc').first().should('be.empty')
    cy.get('.card-desc').last().should('be.empty')
    cy.get('.card-img').first().should('have.attr', 'src', 'https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg')
    cy.get('.card-img').last().should('have.attr', 'src', 'https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg')
  });
})