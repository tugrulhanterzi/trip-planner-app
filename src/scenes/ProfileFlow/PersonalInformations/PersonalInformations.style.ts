import { StyleSheet } from 'react-native';

import { verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/ThemeType';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      paddingTop: verticalScale(24),
    },
    contentContainer: {
      flex: 1,
      width: '100%',
    },
  });

export default styles;
