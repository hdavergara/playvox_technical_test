describe('Technical test solution', () => {
  it('Authentication', () => {
    cy.visit('http://demo.testim.io/')
    cy.get('.NavButton__nav-button___34wHC').click();
    cy.get('#login > :nth-child(1) > .theme__inputElement___27dyY').type('usertest');
    cy.get('#login > :nth-child(2) > .theme__inputElement___27dyY').type('passwordTest');
    cy.get('.Login__button-box___1OzjH > .theme__raised___ONZv6').click();
    cy.get('.mui-btn > :nth-child(1)').should('have.text','Hello, John ');
  });
  it('Select Destination', () => {
    cy.visit('http://demo.testim.io/')
    cy.get(':nth-child(1) > [data-react-toolbox="date-picker"] > .theme__input___qUQeP > .theme__inputElement___27dyY').click();
    cy.get(':nth-child(21) > span').click();
    cy.get('.theme__navigation___3eiS- > :nth-child(2)').click();
    cy.get('.Hero__form-box___126DY > :nth-child(3) > .theme__input___qUQeP > .theme__inputElement___27dyY').click();
    cy.get('.theme__active___31xyK > .theme__values___1jS4g > :nth-child(2)').click();
    cy.get(':nth-child(4) > .theme__input___qUQeP > .theme__inputElement___27dyY').click();
    cy.get('.theme__active___31xyK > .theme__values___1jS4g > :nth-child(2)').click();
    cy.get('.Hero__hero___1FDXn > :nth-child(4) > .theme__button___1iKuo').click();
    cy.get(':nth-child(1) > .theme__input___qUQeP > .theme__inputElement___27dyY').click();
    cy.get('.theme__active___31xyK > .theme__values___1jS4g > :nth-child(5)').click();
    cy.get('.theme__title___35Wsy').should('have.text','Flagstaff');    
  })
}),
describe('API Testing', () => {

  it('Body Length', () => {
    cy.request('https://api.thecatapi.com/v1/images/search')
    .its('body')
    .should('have.length',1)
  });
  it('Http status code', () => {
    cy.request('https://api.thecatapi.com/v1/images/search')
    .its('status')
    .should('eq',200)
  });
  it('JSON Schema validation', () => {
    cy.request('https://api.thecatapi.com/v1/images/search')
    .its('body')
    .each(object => {
      expect(object).to.have.all.keys('breeds','id','url','width','height')
    })
  })
})