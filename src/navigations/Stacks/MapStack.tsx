import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Scenes from '_navigations/Scenes';
import Map from '_scenes/HomeFlow/Map/Map.component';
import { useTheme } from '_styles/theming';

const MapStackNavigator = createNativeStackNavigator();

const MapStack = () => {
  const theme = useTheme();

  return (
    <MapStackNavigator.Navigator
      initialRouteName={Scenes.map}
      screenOptions={{
        gestureEnabled: true,
        headerShown: true,
        headerTintColor: theme?.neutralColors?.neutral900,
        headerBackTitleVisible: false,
      }}>
      <MapStackNavigator.Screen
        name={Scenes.map}
        component={Map}
        options={{
          headerShown: true,
          headerTitle: 'Gezzy',
        }}
      />
    </MapStackNavigator.Navigator>
  );
};

export default MapStack;
