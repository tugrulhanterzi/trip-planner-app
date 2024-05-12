import { createNativeStackNavigator } from '@react-navigation/native-stack';

import useThemeStore from '_store/themeStore';
import { IThemeProviders } from '_styles/theming';

import StackNames from './StackNames';
import BottomNavBarStack from './Stacks/BottomNavBarStack';

const MainStackNavigator = createNativeStackNavigator();

const AppNavigator = () => {
  const { data } = useThemeStore();

  return (
    <IThemeProviders theme={data}>
      <MainStackNavigator.Navigator
        initialRouteName={StackNames.bottomNavBarStack}
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        <MainStackNavigator.Screen
          name={StackNames.bottomNavBarStack}
          component={BottomNavBarStack}
        />
      </MainStackNavigator.Navigator>
    </IThemeProviders>
  );
};

export default AppNavigator;
