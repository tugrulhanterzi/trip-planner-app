import { StyleProp, ViewStyle } from 'react-native';

import MainTypes from '_types/index';

type DividerPropsTypes = MainTypes & {
  overrideStyle?: StyleProp<ViewStyle>;
};

export type { DividerPropsTypes };
