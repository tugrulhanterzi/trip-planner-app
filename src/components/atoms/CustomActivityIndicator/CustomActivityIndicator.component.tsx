import React from 'react';
import { ActivityIndicator } from 'react-native';

import { getAutomationTestingProp } from '_utils/helpers';

import { CustomActivityIndicatorPropsTypes } from './CustomActivityIndicator.types';

const CustomActivityIndicator: React.FC<CustomActivityIndicatorPropsTypes> = ({
  testId = '',
  loaderColor = '',
  isAnimating = true,
  loaderSize = 'small',
  overrideStyle,
  hidesWhenStopped = false,
}) => {
  return (
    <ActivityIndicator
      {...getAutomationTestingProp(testId)}
      size={loaderSize}
      color={loaderColor}
      style={overrideStyle}
      animating={isAnimating}
      hidesWhenStopped={hidesWhenStopped}
    />
  );
};

export default CustomActivityIndicator;
