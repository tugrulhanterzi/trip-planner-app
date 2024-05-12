import createsecureStore from '@neverdull-agency/expo-unlimited-secure-store';

const secureStore = createsecureStore();

const setSecureData = async (key: SecureKeys, data: any) => {
  try {
    await secureStore.setItem(key, data);
  } catch (error: any) {
    throw new Error(error);
  }
};

const getSecureData = async (key: SecureKeys) => {
  let data = '';
  try {
    data = (await secureStore.getItem(key)) ?? '';
  } catch (error) {
    data = '';
  }
  return data;
};

const removeSecureData = async (key: SecureKeys) => {
  try {
    await secureStore.removeItem(key);
  } catch (error: any) {
    throw new Error(error);
  }
};

const clearSecureStorage = async () => {
  try {
    Object?.keys(SecureKeys)?.forEach(async key => {
      await secureStore.removeItem(SecureKeys[key as keyof typeof SecureKeys]);
    });
  } catch (error: any) {
    throw new Error(error);
  }
};

enum SecureKeys {
  AUTH_DATA = 'authData',
  USER_DATA = 'userData',
  EXT_KEY = 'extKey',
  USER_ACL = 'userACL',
}

const secureStorageServices = {
  setAuthData: async (loginData: any) => {
    try {
      return await setSecureData(SecureKeys.AUTH_DATA, JSON.stringify(loginData));
    } catch (error: any) {
      throw new Error(error);
    }
  },
  getAuthData: async (key?: string) => {
    try {
      const authData = await getSecureData(SecureKeys.AUTH_DATA);
      if (!authData) return null;
      const parsedAuth = JSON.parse(authData || '{}');
      if (key) {
        return parsedAuth[key];
      }
      return parsedAuth;
    } catch (error) {
      return null;
    }
  },
  setUser: async (userData: any | null) => {
    try {
      return await setSecureData(SecureKeys.USER_DATA, JSON.stringify(userData));
    } catch (error: any) {
      throw new Error(error);
    }
  },
  getUser: async (key?: string) => {
    try {
      const userData = await getSecureData(SecureKeys.USER_DATA);
      if (!userData) return null;
      const parsedUser = JSON.parse(userData || '{}');
      if (key) {
        return parsedUser[key];
      }
      return parsedUser;
    } catch (error: any) {
      throw new Error(error);
    }
  },
  setExtKey: async (extKey: string) => {
    try {
      return await setSecureData(SecureKeys.EXT_KEY, extKey);
    } catch (error: any) {
      throw new Error(error);
    }
  },
  getExtKey: async () => {
    try {
      const extKey = await getSecureData(SecureKeys.EXT_KEY);
      return extKey || '';
    } catch (error: any) {
      throw new Error(error);
    }
  },
  setUserKeyACL: async (acl: any, index: any) => {
    let aclCached: any = await getSecureData(SecureKeys.USER_ACL);

    if (!aclCached) {
      aclCached = {};
    } else {
      aclCached = JSON.parse(aclCached);
    }

    if (!aclCached[index]) {
      aclCached[index] = {};
    }
    aclCached[index] = acl;
    await setSecureData(SecureKeys.USER_ACL, JSON.stringify(aclCached));
  },
  getUserKeyACL: async (index: any) => {
    let aclCached: any = await getSecureData(SecureKeys.USER_ACL);

    if (aclCached) {
      aclCached = JSON.parse(aclCached);
      if (aclCached[index]) {
        return aclCached[index];
      }
    }
    return null;
  },
  clearUserKeyACL: async () => {
    await removeSecureData(SecureKeys.USER_ACL);
  },
};

export {
  setSecureData,
  getSecureData,
  removeSecureData,
  clearSecureStorage,
  SecureKeys,
  secureStorageServices,
};
