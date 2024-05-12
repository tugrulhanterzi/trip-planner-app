import { Platform } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IconRoute, IconUser } from 'tabler-react-native/icons';

import Scenes from '_navigations/Scenes';
import StackNames from '_navigations/StackNames';
import { scale, verticalScale } from '_styles/scaling';
import { useTheme } from '_styles/theming';
import { TextStyle } from '_styles/typography';
import { getAutomationTestingProp } from '_utils/helpers';

import MapStack from './MapStack';
import ProfileStack from './ProfileStack';

const BottomNavBarStackNavigator = createBottomTabNavigator();

const BottomNavBarStack = () => {
  const theme = useTheme();

  return (
    <BottomNavBarStackNavigator.Navigator
      initialRouteName={Scenes.map}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: theme?.neutralColors?.neutral900,
        tabBarInactiveTintColor: theme?.neutralColors?.neutral300,
        tabBarLabelStyle: {
          ...TextStyle['bodyRegularMedium'],
        },
        tabBarItemStyle: {
          paddingTop: verticalScale(6),
          paddingBottom: verticalScale(6),
          height: Platform.OS === 'android' ? verticalScale(40) : verticalScale(60),
        },
        tabBarStyle: {
          backgroundColor: theme?.otherColors?.white,
          borderTopColor: 'transparent',
          height: Platform.OS === 'android' ? verticalScale(55) : verticalScale(75),
        },
      }}>
      <BottomNavBarStackNavigator.Screen
        {...getAutomationTestingProp('map-bottom-nav')}
        name={StackNames.mapStack}
        options={() => ({
          tabBarLabel: 'Rota',
          tabBarIcon: ({ size, color }) => (
            <IconRoute size={size} color={color} stroke={scale(2)} />
          ),
        })}
        component={MapStack}
      />
      <BottomNavBarStackNavigator.Screen
        {...getAutomationTestingProp('profile-bottom-nav')}
        name={StackNames.profileStack}
        options={() => ({
          tabBarLabel: 'Profilim',
          tabBarIcon: ({ size, color }) => <IconUser size={size} color={color} stroke={scale(2)} />,
        })}
        component={ProfileStack}
      />
    </BottomNavBarStackNavigator.Navigator>
  );
};

export default BottomNavBarStack;
