import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';

import { scale } from '_styles/scaling';
import { useTheme } from '_styles/theming';

import CustomActivityIndicator from '../CustomActivityIndicator/CustomActivityIndicator.component';
import CustomText from '../CustomText/CustomText.component';
import styles from './CustomButton.style';
import { CustomButtonPropsTypes } from './CustomButton.types';

const CustomButton: React.FC<CustomButtonPropsTypes> = ({
  onPress = () => {},
  overrideStyle,
  title = '',
  overrideFontStyle = 'buttonBig',
  overrideTitleStyle,
  disabled = false,
  loading = false,
  activeOpacity = 0.8,
}) => {
  const theme = useTheme();
  const { containerStyle, textStyle, disabledStyle, loaderStyle } = useMemo(
    () => styles(theme),
    [theme]
  );

  return (
    <TouchableOpacity
      style={[containerStyle, overrideStyle, disabled && disabledStyle]}
      activeOpacity={activeOpacity}
      onPress={onPress}
      disabled={disabled || loading}>
      {Boolean(loading) === true ? (
        <CustomActivityIndicator
          loaderSize={scale(17)}
          isAnimating={loading}
          hidesWhenStopped
          overrideStyle={loaderStyle}
        />
      ) : (
        <CustomText
          overrideStyle={[textStyle, overrideTitleStyle]}
          text={title}
          textFontStyle={overrideFontStyle}
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
