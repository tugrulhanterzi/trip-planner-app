import { ColorValue, StyleProp, ViewStyle } from 'react-native';

import MainTypes from '_types/index';

type CustomActivityIndicatorPropsTypes = MainTypes & {
  isAnimating?: boolean | undefined;
  loaderColor?: ColorValue | undefined;
  hidesWhenStopped?: boolean | undefined;
  overrideStyle?: StyleProp<ViewStyle> | undefined;
  loaderSize?: number | 'small' | 'large' | undefined;
};

export type { CustomActivityIndicatorPropsTypes };
