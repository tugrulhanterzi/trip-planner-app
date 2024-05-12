import { StyleSheet } from 'react-native';

import { verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/ThemeType';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    containerStyle: { backgroundColor: theme?.neutralColors?.neutral50, height: verticalScale(1) },
  });

export default styles;
