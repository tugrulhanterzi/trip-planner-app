import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/ThemeType';

export const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    contentContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: theme?.otherColors?.white,
      paddingVertical: verticalScale(4),
    },
    titleContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: scale(8),
    },
    titleTextStyle: {
      color: theme?.neutralColors?.neutral900,
    },
    dividerStyle: {
      marginVertical: verticalScale(8),
    },
  });
