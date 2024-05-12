import React, { useMemo } from 'react';
import { View } from 'react-native';

import { IconMapPinFilled } from 'tabler-react-native/icons';

import { Divider } from '_atoms';
import { scale } from '_styles/scaling';
import { useTheme } from '_styles/theming';

import CustomText from '../../atoms/CustomText/CustomText.component';
import { styles } from './RouteCard.styles';
import { RouteCardProps } from './RouteCard.types';

const RouteCard: React.FC<RouteCardProps> = ({ createdAt, directions, containerStyle }) => {
  const theme = useTheme();

  const { container, innerRow, routeText, dividerStyle } = useMemo(() => styles(theme), [theme]);

  return (
    <View style={[container, containerStyle]}>
      <View style={innerRow}>
        <IconMapPinFilled
          size={scale(16)}
          color={theme?.neutralColors?.neutral900}
          stroke={scale(1.2)}
        />
        <CustomText text={createdAt} textFontStyle='bodyMediumSemibold' />
      </View>
      {directions &&
        directions.map((direction, index) => (
          <CustomText
            key={`direction-${index}`}
            text={direction?.name}
            textFontStyle='bodyRegular'
            overrideStyle={routeText}
          />
        ))}
      <Divider overrideStyle={dividerStyle} />
    </View>
  );
};

export default RouteCard;
