import React, { useMemo } from 'react';
import { View } from 'react-native';

import { IconBoxModel2 } from 'tabler-react-native/icons';

import { scale } from '_styles/scaling';
import { useTheme } from '_styles/theming';

import CustomText from '../../atoms/CustomText/CustomText.component';
import styles from './ListEmpty.style';
import { ListEmptyPropsTypes } from './ListEmpty.types';

const ListEmpty: React.FC<ListEmptyPropsTypes> = ({
  overrideText,
  restTextProps,
  overrideTextStyle,
  overrideContainerStyle,
}) => {
  const theme = useTheme();
  const { container, textStyle } = useMemo(() => styles(theme), [theme]);

  return (
    <View style={[container, overrideContainerStyle]}>
      <IconBoxModel2 size={scale(72)} stroke={scale(1)} color={theme?.neutralColors?.neutral700} />
      <CustomText
        textFontStyle='h5'
        overrideStyle={[textStyle, overrideTextStyle]}
        text={overrideText}
        {...restTextProps}
      />
    </View>
  );
};

export default ListEmpty;
