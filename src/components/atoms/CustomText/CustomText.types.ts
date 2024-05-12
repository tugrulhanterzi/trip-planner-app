import { StyleProp, TextProps, TextStyle } from 'react-native';

import { TextStyleTypes } from '_styles/typography';
import MainTypes from '_types/index';

type CustomTextPropsTypes = MainTypes & {
  text?: string | React.ReactElement;
  overrideStyle?: StyleProp<TextStyle>;
  restTextProps?: TextProps;
  textFontStyle?: TextStyleTypes;
  onPress?: () => void;
};

export type { CustomTextPropsTypes };
