describe('Blog home page', () => {
  it('shows multiple articles', () => {
    cy.visit('/blog');
    cy.title().should('contain', 'Blog');
    cy.contains('New website').should('be.visible');
    cy.contains('Career update').should('be.visible');
  });

  it('is index page accessible', () => {
    cy.visit('/blog');
    cy.injectAxe();
    cy.checkA11y();
  });

  it('is article page accessible', () => {
    cy.visit('/blog/post/2025-09-01-career-update');
    cy.injectAxe();
    cy.checkA11y();
  });

  it('can filter by keyword on article and clear', () => {
    cy.visit('/blog');
    cy.wait(500);
    cy.contains('Technical').siblings('button').click(); // Small quirk with chips
    cy.contains('You are now filtering the posts').should('be.visible');
    cy.contains('ViaRhôna').should('not.be.visible');
    cy.contains('Clear').click();
    cy.contains('You are now filtering the posts').should('not.be.visible');
    cy.contains('ViaRhôna').should('be.visible');
  });

  it('does not reset the search state when switching language', () => {
    cy.visit('/blog');
    cy.wait(500);
    cy.contains('Technical').siblings('button').click();
    cy.contains('You are now filtering the posts').should('be.visible');
    cy.contains('FR').click();
    cy.location('pathname').should('be.eq', '/fr/blog');
    cy.contains('Vous êtes en train de filtrer les articles').should('be.visible');
  });

  it('can click on keyword from article', () => {
    cy.visit('/blog/post/2025-02-03-new-website');
    cy.wait(500); // Seems necessary
    cy.contains('Technical').click();
    cy.location('pathname').should('be.eq', '/blog');
    cy.contains('You are now filtering the posts').should('be.visible');
    cy.contains('ViaRhôna').should('not.be.visible');
  });

  it('has a link opening in a new tab', () => {
    cy.visit('/blog/post/2025-09-01-career-update');
    cy.get('a').contains('BPMN').should('have.attr', 'target', '_blank');
  });
});
