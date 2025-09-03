describe('Menu', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('navigates to blog', () => {
    cy.get('a[aria-label="Blog"]').click();
    cy.location('pathname').should('be.eq', '/blog');
  });

  it('scrolls to top when clicked', () => {
    // Scroll down, slowly (important)
    cy.scrollTo('bottom', { easing: 'linear', duration: 500 });
    cy.window().its('scrollY').should('be.greaterThan', 0); // Should normally be the case

    // Try to scroll back up
    cy.get('button[aria-label="Scroll to top"]').should('be.visible').click();
    cy.window().its('scrollY').should('eq', 0);
  });
});
