describe('Home page', () => {
  it('loads correctly', () => {
    cy.visit('/');
    cy.contains('Florian Cassayre').should('be.visible');
    cy.title().should('eq', 'Florian Cassayre');
  });

  it('is accessible', () => {
    cy.visit('/');
    cy.injectAxe();
    cy.checkA11y();
  });

  it('is translated', () => {
    const english = 'I am currently';
    const french = 'Je suis actuellement';

    cy.visit('/');
    cy.contains(english).should('be.visible');
    cy.contains(french).should('not.exist');
    cy.get('head meta[name="description"]').should('have.attr', 'content').and('include', 'personal website');

    cy.visit('/fr');
    cy.contains(french).should('be.visible');
    cy.contains(english).should('not.exist');
    cy.get('head meta[name="description"]').should('have.attr', 'content').and('include', 'Site personnel');
  });

  it('has a link opening in a new tab', () => {
    cy.visit('/');
    cy.get('a').contains('CERN').should('have.attr', 'target', '_blank');
  });

  it('can copy the email address', () => {
    cy.visit('/');
    cy.wait(500);
    cy.window().then(win => cy.stub(win.navigator.clipboard, 'writeText').as('clipboardWrite'));
    cy.contains('You can write me at').siblings().find('button').scrollIntoView().click();
    cy.get('@clipboardWrite').should('have.been.calledWith', 'florian' + '@' + 'cassayre.me');
  });
});
