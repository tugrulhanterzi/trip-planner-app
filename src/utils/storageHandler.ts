import AsyncStorage from '@react-native-async-storage/async-storage';

const getStorageItem = async (key: StorageKeys) => {
  return (await AsyncStorage?.getItem(key)) ?? '';
};
const setStorageItem = async (key: StorageKeys, value: string = '') => {
  return AsyncStorage?.setItem(key, value);
};
const removeStorageItem = async (key: StorageKeys) => {
  return AsyncStorage?.removeItem(key);
};

const clearStorage = async () => {
  await AsyncStorage?.clear();
};

enum StorageKeys {
  User = 'User',
  Language = 'Language',
  RouteItems = 'RouteItems',
}

export { getStorageItem, setStorageItem, removeStorageItem, clearStorage, StorageKeys };
