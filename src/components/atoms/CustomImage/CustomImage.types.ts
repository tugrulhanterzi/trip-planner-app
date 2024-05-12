import { ImageSourcePropType, ImageStyle, StyleProp } from 'react-native';

import { ImageContentFit, ImageSource } from 'expo-image';

import MainTypes from '_types/index';

type PlaceHolderProps = null | string | number | string[] | ImageSource | ImageSource[];

type CustomImagePropsTypes = MainTypes & {
  source: ImageSourcePropType;
  placeholder?: PlaceHolderProps;
  overrideStyle?: StyleProp<ImageStyle>;
  overrideResizeMode?: ImageContentFit;
};

export type { CustomImagePropsTypes, PlaceHolderProps };
