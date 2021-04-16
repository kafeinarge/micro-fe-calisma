describe('header', () => {
  beforeEach(() => cy.visit('/iframe.html?id=headercomponent--primary'));

  it('should render the component', () => {
    cy.get('micro-frontend-header').should('exist');
  });
});
