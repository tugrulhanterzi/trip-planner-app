import React, { useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { IconChevronRight } from 'tabler-react-native/icons';

import { scale } from '_styles/scaling';
import { useTheme } from '_styles/theming';
import { getAutomationTestingProp } from '_utils/helpers';

import CustomText from '../../atoms/CustomText/CustomText.component';
import Divider from '../../atoms/Divider/Divider.component';
import { styles } from './MenuItemCard.styles';
import { MenuItemCardProps } from './MenuItemCard.types';

const MenuItemCard: React.FC<MenuItemCardProps> = ({
  title,
  icon,
  iconColor,
  onItemPress,
  containerStyle,
  testId = '',
}) => {
  const theme = useTheme();
  const { container, contentContainer, titleContainer, titleTextStyle, dividerStyle } = useMemo(
    () => styles(theme),
    [theme]
  );

  return (
    <TouchableOpacity
      {...getAutomationTestingProp(testId)}
      style={[container, containerStyle]}
      activeOpacity={0.8}
      onPress={onItemPress}>
      <View style={contentContainer}>
        <View style={titleContainer}>
          {icon({ size: scale(24), stroke: scale(1.5), color: iconColor })}
          <CustomText text={title} textFontStyle='bodyMedium' overrideStyle={titleTextStyle} />
        </View>
        <IconChevronRight
          size={scale(24)}
          color={theme?.neutralColors?.neutral500}
          stroke={scale(2)}
        />
      </View>
      <Divider overrideStyle={dividerStyle} />
    </TouchableOpacity>
  );
};

export default MenuItemCard;
