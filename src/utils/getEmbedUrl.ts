import { UrlParameters } from '../types';

export const getEmbedUrl = (
  baseUrl?: string,
  urlParameters?: UrlParameters,
  addConfiguration?: boolean
) => {
  const url = new URL(baseUrl ?? 'https://embed.diagrams.net');
  const urlSearchParams = new URLSearchParams();

  urlSearchParams.append('embed', '1');
  urlSearchParams.append('proto', 'json');
  // urlSearchParams.append('libraries', '1');
  // urlSearchParams.append('clibs', 'Uhttps://jgraph.github.io/drawio-libs/libs/voyage-icons.xml');
  // urlSearchParams.append(
  //   'clibs',
  //   'Uhttps%3A%2F%2Fjgraph.github.io%2Fdrawio-libs%2Flibs%2Fun-ocha-icons-bluebox.xml;Uhttps%3A%2F%2Fjgraph.github.io%2Fdrawio-libs%2Flibs%2Fun-ocha-icons.xml'
  // );
  // urlSearchParams.append('libs', 'azure');
  urlSearchParams.append('picker', '0');
  urlSearchParams.append('browser', '0');

  if (addConfiguration) {
    urlSearchParams.append('configure', '1');
  }

  if (urlParameters) {
    Object.keys(urlParameters).forEach((key) => {
      const value = urlParameters[key as keyof UrlParameters];

      if (value !== undefined) {
        if (typeof value === 'boolean') {
          urlSearchParams.append(key, value ? '1' : '0');
        } else {
          urlSearchParams.append(key, value.toString());
        }
      }
    });
  }

  url.search = urlSearchParams.toString();

  console.log('getEmbedUrl', addConfiguration);

  return url.toString();
};
