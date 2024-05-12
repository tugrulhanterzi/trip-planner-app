import { useMemo } from 'react';

import { IconMap2, IconUser } from 'tabler-react-native/icons';

import NavigationServices from '_navigations/NavigationServices';
import Scenes from '_navigations/Scenes';
import { useTheme } from '_styles/theming';

const useProfile = () => {
  const theme = useTheme();

  const menuItemsSection = useMemo(
    () => [
      {
        title: 'Kişisel Bilgilerim',
        icon: IconUser,
        iconColor: theme?.neutralColors?.neutral900,
        onPress: () => NavigationServices.navigate(Scenes.personalInformations),
      },
      {
        title: 'Rotalarım',
        icon: IconMap2,
        iconColor: theme?.neutralColors?.neutral900,
        onPress: () => NavigationServices.navigate(Scenes.myRoutes),
      },
    ],
    []
  );

  return {
    menuItemsSection,
  };
};

export { useProfile };
