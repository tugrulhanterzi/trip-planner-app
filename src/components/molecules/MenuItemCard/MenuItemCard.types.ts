import { ViewStyle } from 'react-native';

import MainTypes from '_types/index';

export type MenuItemCardProps = MainTypes & {
  title: string;
  icon: any;
  iconColor: string;
  onItemPress?: any;
  containerStyle?: ViewStyle;
};
