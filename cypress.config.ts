import { defineConfig } from 'cypress';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  e2e: {
    specPattern: 'src/cypress/e2e/*.cy.ts',
    supportFile: 'src/cypress/support/e2e.ts',
    fixturesFolder: 'src/cypress/fixtures',
    downloadsFolder: 'src/cypress/downloads',
    setupNodeEvents: () => {},
  },
});
