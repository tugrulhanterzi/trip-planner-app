import { StyleSheet } from 'react-native';

import { verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/ThemeType';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: verticalScale(12),
    },
  });

export default styles;
