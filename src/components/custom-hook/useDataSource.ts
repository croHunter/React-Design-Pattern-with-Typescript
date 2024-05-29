import { useState, useEffect } from 'react';

export const useDataSource = <T>(getResourceFunc: () => Promise<T>) => {
  const [resource, setResource] = useState<T | null>(null);

  useEffect(() => {
    (async () => {
      const result = await getResourceFunc();
      setResource(result);
    })();
  }, [getResourceFunc]);

  return resource;
};
