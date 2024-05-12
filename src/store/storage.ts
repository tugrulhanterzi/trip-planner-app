import AsyncStorage from '@react-native-async-storage/async-storage';
import { StateStorage } from 'zustand/middleware';

export const zustandStorage: StateStorage = {
  async setItem(name, value) {
    try {
      await AsyncStorage.setItem(name, JSON.stringify(value));
    } catch (error) {
      console.error('Error storing data:', error);
    }
  },
  async getItem(name) {
    try {
      const value = await AsyncStorage.getItem(name);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error('Error retrieving data:', error);
      return null;
    }
  },
  async removeItem(name) {
    try {
      await AsyncStorage.removeItem(name);
    } catch (error) {
      console.error('Error removing data:', error);
    }
  },
};
