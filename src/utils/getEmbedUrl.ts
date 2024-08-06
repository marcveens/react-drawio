import { UrlParameters } from '../types';

export const getEmbedUrl = (
  baseUrl?: string,
  urlParameters?: UrlParameters,
  addConfiguration?: boolean
) => {
  const url = new URL('/', baseUrl ?? 'https://embed.diagrams.net');
  const urlSearchParams = new URLSearchParams();

  urlSearchParams.append('embed', '1');
  urlSearchParams.append('proto', 'json');

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

  return url.toString();
};
