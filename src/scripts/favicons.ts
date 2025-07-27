import fs from 'fs';

// eslint-disable-next-line import/no-named-as-default
import favicons from 'favicons';

const source = 'public/favicon.svg',
  output = 'public/';

const configuration = {
  appName: 'Florian Cassayre',
  background: '#fff',
  theme_color: '#fff',
  appleStatusBarStyle: 'black-translucent',
  display: 'standalone',
  orientation: 'any',
  logging: false,
  pixel_art: false,
  loadManifestWithCredentials: false,
  manifestMaskable: false,
  icons: {
    // https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs
    android: ['android-chrome-192x192.png', 'android-chrome-512x512.png'],
    appleIcon: ['apple-touch-icon.png'],
    appleStartup: false,
    favicons: ['favicon.ico'],
    windows: false,
    yandex: false,
  },
};

void favicons(source, configuration)
  .then(response => {
    [response.images, response.files]
      .flat()
      .filter(({ name }) => name !== 'manifest.webmanifest')
      .forEach(({ name, contents }) => {
        fs.writeFileSync(output + name, typeof contents === 'string' ? contents : new Uint8Array(contents.buffer));
      });
    console.log(response.html.join('\n'));
  })
  .catch(error => {
    console.error(error.message);
    throw error;
  });
