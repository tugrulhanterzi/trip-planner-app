import { StyleSheet } from 'react-native';

import { scale } from '_styles/scaling';
import { ThemeType } from '_types/ThemeType';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    imageStyle: {
      width: scale(24),
      height: scale(24),
      tintColor: theme?.neutralColors?.neutral50,
    },
  });

export default styles;
