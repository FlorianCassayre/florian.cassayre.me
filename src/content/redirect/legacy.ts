// https://github.com/FlorianCassayre/Website/blob/master/src/FlorianCassayre/Florian/RoutingController.php

export const REDIRECT_PAGE_NAME = '_redirect';

/**
 * The user is automatically redirected to the page.
 */
export const INVISIBLE_REDIRECTIONS: Record<string, string> = {
  '/gpg': '/pgp',
  '/projects': '/',
  '/realisations': '/',
};

const legacyGithubFile = (path: string) => `https://github.com/FlorianCassayre/Website/blob/master/${path}`;
const legacyGithubTemplate = (template: string) => legacyGithubFile(`templates/${template}.html.twig`);

/**
 * A redirection is proposed to the user (requires actions from their side).
 */
const VISIBLE_REDIRECTIONS: [path: RegExp | string, fallback: string][] = [
  ['/donation', legacyGithubTemplate('general/donation')],
  ['/realisations', legacyGithubFile('contents/florian/projects.json')],
  ['/api', legacyGithubTemplate('general/api')],
  // TODO add more
];

export const getLegacyVisibleRedirection = (urlPathname: string): string | null =>
  VISIBLE_REDIRECTIONS
    .filter(([expr]) => {
      if (typeof expr === 'string') {
        return expr === urlPathname;
      } else {
        return expr.exec(urlPathname);
      }
    })
    .map(([, fallback]) => fallback)[0] ?? null;
