import React, { useEffect, useState } from 'react';

import { StorageKeys, getStorageItem } from '_utils/storageHandler';

const useMyRoutes = () => {
  const [routes, setRoutes] = useState<any>([]);
  const [isRoutesLoading, setIsRoutesLoading] = useState<boolean>(true);

  const getRoutes = async () => {
    try {
      const routes = await getStorageItem(StorageKeys.RouteItems);
      setRoutes(JSON.parse(routes));
      setIsRoutesLoading(false);
    } catch (error) {
      console.log('error', error);
      setIsRoutesLoading(false);
    }
  };

  useEffect(() => {
    getRoutes();
  }, []);

  return {
    routes,
    isRoutesLoading,
  };
};

export { useMyRoutes };
