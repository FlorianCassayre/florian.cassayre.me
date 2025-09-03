describe('Redirection', () => {
  it('redirects an alias', () => {
    cy.visit('/gpg');
    cy.location('pathname').should('be.eq', '/pgp');
  });
});
