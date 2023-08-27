import { UrlParameters } from '../types';

export const getEmbedUrl = (urlParameters?: UrlParameters) => {
  const url = new URL('/', 'https://embed.diagrams.net');
  const urlSearchParams = new URLSearchParams();

  if (urlParameters) {
    Object.keys(urlParameters).forEach((key) => {
      const value = urlParameters[key as keyof UrlParameters];

      if (value) {
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
