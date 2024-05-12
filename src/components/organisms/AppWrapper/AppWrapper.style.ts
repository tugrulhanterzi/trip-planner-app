import { Platform, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/ThemeType';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    mainContainerStyle: {
      flex: 1,
      backgroundColor: theme?.otherColors?.white,
    },
    containerStyle: {
      flex: 1,
      paddingBottom: verticalScale(20),
    },
    body: {
      flex: 1,
      paddingHorizontal: scale(20),
      ...Platform.select({
        ios: {
          paddingTop: 0,
        },
        android: {
          paddingTop: getStatusBarHeight() + verticalScale(10),
        },
        default: {
          paddingTop: 0,
        },
      }),
    },
  });

export default styles;
