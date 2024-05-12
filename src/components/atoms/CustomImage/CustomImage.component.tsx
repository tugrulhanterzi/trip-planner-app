import React, { useMemo } from 'react';

import { Image } from 'expo-image';

import imagesObject from '_assets/images/imagesObject';
import { useTheme } from '_styles/theming';

import styles from './CustomImage.style';
import { CustomImagePropsTypes } from './CustomImage.types';

const defaultPlaceHolder = imagesObject?.userPlaceholder;

const CustomImage: React.FC<CustomImagePropsTypes> = ({
  source,
  overrideStyle,
  overrideResizeMode = 'cover',
  placeholder,
}) => {
  const theme = useTheme();
  const { imageStyle } = useMemo(() => styles(theme), [theme]);

  return (
    <Image
      source={source ?? defaultPlaceHolder}
      style={overrideStyle ?? imageStyle}
      contentFit={source ? overrideResizeMode : 'cover'}
      recyclingKey={source?.toString()}
      placeholder={placeholder}
      placeholderContentFit={overrideResizeMode}
      transition={200}
    />
  );
};

export default CustomImage;
