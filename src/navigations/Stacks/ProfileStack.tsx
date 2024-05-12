import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Scenes from '_navigations/Scenes';
import MyRoutes from '_scenes/ProfileFlow/MyRoutes/MyRoutes.component';
import PersonalInformations from '_scenes/ProfileFlow/PersonalInformations/PersonalInformations.component';
import Profile from '_scenes/ProfileFlow/Profile/Profile.component';
import { useTheme } from '_styles/theming';

const ProfileStackNavigator = createNativeStackNavigator();

const ProfileStack = () => {
  const theme = useTheme();

  return (
    <ProfileStackNavigator.Navigator
      initialRouteName={Scenes.profile}
      screenOptions={{
        gestureEnabled: true,
        headerShown: true,
        headerTintColor: theme?.neutralColors?.neutral900,
        headerBackTitleVisible: false,
      }}>
      <ProfileStackNavigator.Screen
        name={Scenes.profile}
        component={Profile}
        options={{
          headerShown: true,
          headerTitle: 'Profilim',
        }}
      />
      <ProfileStackNavigator.Screen
        name={Scenes.personalInformations}
        component={PersonalInformations}
        options={{
          headerShown: true,
          headerTitle: 'Kişisel Bilgilerim',
        }}
      />
      <ProfileStackNavigator.Screen
        name={Scenes.myRoutes}
        component={MyRoutes}
        options={{
          headerShown: true,
          headerTitle: 'Rotalarım',
        }}
      />
    </ProfileStackNavigator.Navigator>
  );
};

export default ProfileStack;
