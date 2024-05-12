import React, { useMemo } from 'react';
import { View } from 'react-native';

import { useTheme } from '_styles/theming';
import { getAutomationTestingProp } from '_utils/helpers';

import styles from './Divider.styles';
import { DividerPropsTypes } from './Divider.types';

const Divider: React.FC<DividerPropsTypes> = ({ overrideStyle, testId = '' }) => {
  const theme = useTheme();
  const { containerStyle } = useMemo(() => styles(theme), [theme]);

  return <View style={[containerStyle, overrideStyle]} {...getAutomationTestingProp(testId)} />;
};

export default Divider;
