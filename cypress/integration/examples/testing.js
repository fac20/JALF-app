describe('making sure cypress is working', () => {
  it('fails the test with incorrect statements', () => {
    expect(true).to.equal(false);
  });
  it('passes the test with correct statements', () => {
    expect(true).to.equal(true);
  });
});

describe('first page renders correct buttons', () => {
  it('landing page has a tags with href attributes', () => {
    cy.visit('http://localhost:3000/');
    cy.get('a').should('have.attr', 'href').and('include', '/login');
  });
});

describe('functioning calculate button', () => {
  it('when calculate button is clicked, calculator is displayed', () => {
    cy.visit('http://localhost:3000/');
    cy.get('a[href*="calculate"]').click();
    cy.contains('Blood Glucose Level');
  });
});
