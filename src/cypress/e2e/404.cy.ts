describe('404 page', () => {
  it('shows not found page on made up URL', () => {
    cy.visit('/foobar', { failOnStatusCode: false });
    cy.contains('404');
    cy.contains('Page not found');
  });

  it('contains a link to the homepage', () => {
    cy.visit('/foobar', { failOnStatusCode: false });
    cy.contains('Back to the home page').click();
    cy.location('pathname').should('be.eq', '/');
  });

  it('provides a link to GitHub for a legacy URL', () => {
    cy.visit('/api', { failOnStatusCode: false });
    cy.contains('Page deleted');
    cy.contains('you may access its source code');
    cy.get('a[href*="github.com/FlorianCassayre/Website"]').should('exist');
  });

  it('can be translated to french', () => {
    cy.visit('/foobar', { failOnStatusCode: false });
    cy.contains('FR').click();
    cy.location('pathname').should('be.eq', '/fr/foobar');
  });

  it('can be translated to english', () => {
    cy.visit('/fr/foobar', { failOnStatusCode: false });
    cy.contains('Page introuvable');
    cy.contains('EN').click();
    cy.location('pathname').should('be.eq', '/foobar');
  });
});
