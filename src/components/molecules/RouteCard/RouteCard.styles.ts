import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/ThemeType';

export const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    innerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: scale(8),
    },
    routeText: {
      marginTop: verticalScale(8),
      color: theme?.neutralColors?.neutral400,
    },
    dividerStyle: {
      marginVertical: verticalScale(8),
    },
  });
