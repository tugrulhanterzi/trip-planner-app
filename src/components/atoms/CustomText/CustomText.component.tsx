import React, { useMemo } from 'react';
import { Text } from 'react-native';

import { useTheme } from '_styles/theming';
import { TextStyle } from '_styles/typography';

import styles from './CustomText.style';
import { CustomTextPropsTypes } from './CustomText.types';

const CustomText: React.FC<CustomTextPropsTypes> = ({
  text,
  overrideStyle,
  textFontStyle = 'bodyRegular',
  onPress,
  restTextProps,
}) => {
  const theme = useTheme();
  const { textStyle } = useMemo(() => styles(theme), [theme]);

  return (
    <Text
      {...restTextProps}
      style={[
        textStyle,
        textFontStyle && (TextStyle as Record<string, any>)[textFontStyle],
        overrideStyle,
      ]}
      onPress={onPress}
      allowFontScaling={false}>
      {text}
    </Text>
  );
};

export default CustomText;
