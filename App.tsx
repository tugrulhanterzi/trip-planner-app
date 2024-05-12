import { useCallback, useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';

import { PortalProvider } from '@gorhom/portal';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import * as Updates from 'expo-updates';

import { openTimedAlertBottomSheetModal } from '_atoms';
import useAssets from '_hooks/useAssets';
import AppNavigator from '_navigations/AppNavigator';
import NavigationServices from '_navigations/NavigationServices';
import { BottomAlertTypes } from '_types/index';

const App = () => {
  const isAssetsLoaded = useAssets();
  const navigationRef = useNavigationContainerRef();

  const onStartUpApp = useCallback(async () => {
    try {
      if (!__DEV__) {
        const update = await Updates.checkForUpdateAsync();
        if (update.isAvailable) {
          await Updates.fetchUpdateAsync();
          await Updates.reloadAsync();
        }
      }
    } catch (error: any) {
      openTimedAlertBottomSheetModal({
        desc: JSON.stringify(error),
        type: BottomAlertTypes.Error,
      });
    }
  }, []);

  useEffect(() => {
    onStartUpApp();
  }, [onStartUpApp]);

  return (
    isAssetsLoaded && (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style='dark' />
        <NavigationContainer
          ref={navigatorRef => {
            navigationRef.current = navigatorRef;
            NavigationServices.setTopLevelNavigator(navigatorRef);
          }}>
          <PortalProvider>
            <AppNavigator />
          </PortalProvider>
        </NavigationContainer>
      </GestureHandlerRootView>
    )
  );
};

export default App;
