// https://github.com/FlorianCassayre/Website/blob/master/src/FlorianCassayre/Florian/RoutingController.php
/**
 * The user is automatically redirected to the page.
 */
export const INVISIBLE_REDIRECTIONS: Record<string, string> = {
  '/gpg': '/pgp',
  '/projects': '/realisations',
  '/genealogy': '/articles/genealogy',
  '/articles/genealogy': 'https://genealogy.florian.cassayre.me',
  '/about': '/',
  '/netherrail': 'https://zeps.carrade.eu',
  '/articles': '/blog', // Not a valid legacy URL, but part of a path
};

const legacyGithubFile = (path: string) => `https://github.com/FlorianCassayre/Website/blob/master/${path}`;
const legacyGithubTemplate = (template: string) => legacyGithubFile(`templates/${template}.html.twig`);

/**
 * A redirection is proposed to the user (requires actions from their side).
 */
const VISIBLE_REDIRECTIONS: [path: RegExp | string | string[], fallback: string][] = [
  ['/donation', legacyGithubTemplate('general/donation')],
  ['/realisations', legacyGithubFile('contents/florian/projects.json')],
  ['/api', legacyGithubTemplate('general/api')],
  [/^(\/uuid|\/tools\/minecraft\/uuid(\/[^/]*)?)$/, legacyGithubTemplate('tools/uuid')],
  [['/enchanting', '/tools/minecraft/enchanting'], legacyGithubTemplate('tools/enchanting/homepage')],
  [
    /^\/tools\/minecraft\/enchanting(\/combinations(\/[a-z]+\/[a-z]+\/[0-9]+(\/[a-z]+\/(any|[1-5]))?)?)?$/,
    legacyGithubTemplate('tools/enchanting/combinations'),
  ],
  ['/tools/minecraft/enchanting/constraints', legacyGithubTemplate('tools/enchanting/constraints')],
  [['/ping', '/tools/minecraft/ping'], legacyGithubTemplate('general/not_yet')],
  [['/files/uhc-model.html', '/ktz/6'], legacyGithubTemplate('static/ktz6')],
  ['/api', legacyGithubTemplate('general/api')],
  ['/brand', legacyGithubTemplate('general/brand')],
  ...['crypto', 'js', 'float', 'random', 'youtube', 'pins', 'genealogy', 'publibike']
    .map(article => `articles/${article}`)
    .map(path => [`/${path}`, legacyGithubTemplate(path)] satisfies [string, string]),
  ['/tools/minecraft/zcraft/tracker', legacyGithubTemplate('tools/ztracker')],
  [
    /^\/tools\/minecraft\/zcraft\/tracker\/image\/v6(_(nether|end))?.png$/,
    legacyGithubFile('src/FlorianCassayre/Florian/Controllers/Tools/ZcraftTrackerController.php'),
  ],
  ['/comptebon', legacyGithubTemplate('static/comptebon')],
  ['/card', legacyGithubTemplate('static/card')],
  ['/card2', legacyGithubTemplate('static/card2')],
  // Dropped (old redirections that were deprecated long time ago):
  // /api/minecraft/netherrail
  // /api/minecraft/netherrail-list
];

export const getLegacyVisibleRedirection = (urlPathname: string): string | null =>
  VISIBLE_REDIRECTIONS.filter(([expr]) => {
    if (typeof expr === 'string') {
      return expr === urlPathname;
    } else if (Array.isArray(expr)) {
      return expr.includes(urlPathname);
    } else {
      return expr.exec(urlPathname);
    }
  }).map(([, fallback]) => fallback)[0] ?? null;
