import { useState } from 'react';

export const useRemoteFile = () => {
  const [inputXml, setInputXml] = useState<string>('');

  const urlToBase64 = async (url: string) => {
    const data = await fetch(url);

    console.log(data);

    if (data) {
      const blob = await data.blob();

      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result;

        setInputXml(base64data as string);
      };
    }
  };

  return {
    inputXml,
    urlToBase64
  };
};
