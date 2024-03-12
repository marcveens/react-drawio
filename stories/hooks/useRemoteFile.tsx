import { useState } from 'react';

type UrlToBase64Options = {
  isVisio?: boolean;
};

const basePath = process.env.GH_PAGE ? '/react-drawio' : '';

export const useRemoteFile = () => {
  const [inputXml, setInputXml] = useState<string>('');

  const urlToBase64 = async (url: string, options?: UrlToBase64Options) => {
    const data = await fetch(`${basePath}${url}`);

    if (data) {
      const blob = await data.blob();

      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        let base64data = (reader.result || '') as string;

        if (options?.isVisio) {
          base64data = base64data.replace('data:application/octet-stream;base64', 'data:application/vnd.visio;base64');
        }

        setInputXml(base64data);
      };
    }
  };

  return {
    inputXml,
    urlToBase64
  };
};
