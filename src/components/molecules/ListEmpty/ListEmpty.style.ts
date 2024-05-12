import { StyleSheet } from 'react-native';

import { height, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/ThemeType';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      paddingTop: verticalScale(height * 0.2),
      alignItems: 'center',
      justifyContent: 'center',
    },
    textStyle: {
      color: theme?.neutralColors?.neutral700,
      textAlign: 'center',
    },
  });

export default styles;
