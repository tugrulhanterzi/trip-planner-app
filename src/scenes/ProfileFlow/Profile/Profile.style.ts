import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/ThemeType';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 0,
    },
    innerHeaderContainer: {
      paddingHorizontal: scale(16),
      paddingVertical: verticalScale(48),
      backgroundColor: theme?.neutralColors?.neutral100,
    },
    innerHeaderTextStyle: {
      color: theme?.neutralColors?.neutral900,
    },
    contentContainer: {
      flex: 1,
      padding: scale(16),
    },
    menuItemHeaderTextStyle: {
      marginBottom: verticalScale(12),
    },
    menuItemListHeaderStyle: {
      color: theme?.neutralColors?.neutral900,
    },
  });

export default styles;
