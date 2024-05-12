import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import * as Font from 'expo-font';

import fontsObject from '_assets/fonts/fontsObject';

const Inter = fontsObject?.Inter;
const InterMedium = fontsObject?.InterMedium;
const InterSemibold = fontsObject?.InterSemibold;
const InterBold = fontsObject?.InterBold;

export default function useAssets() {
  const [isAssetsLoaded, setIsAssetsLoaded] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await Font.loadAsync({
          'Inter-Regular': Inter,
          'Inter-Medium': InterMedium,
          'Inter-Semibold': InterSemibold,
          'Inter-Bold': InterBold,
        });
      } catch (e) {
        Alert.alert('Failed to load assets', (e as Error).message);
      } finally {
        setIsAssetsLoaded(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isAssetsLoaded;
}
