describe('footer', () => {
  beforeEach(() => cy.visit('/iframe.html?id=footercomponent--primary'));

  it('should render the component', () => {
    cy.get('micro-frontend-footer').should('exist');
  });
});
