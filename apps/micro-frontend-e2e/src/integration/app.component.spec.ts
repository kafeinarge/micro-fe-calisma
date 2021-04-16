describe('micro-frontend', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));

  it('should render the component', () => {
    cy.get('micro-frontend-root').should('exist');
  });
});
