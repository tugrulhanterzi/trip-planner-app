import { StyleSheet } from 'react-native';

import { scale } from '_styles/scaling';
import { ThemeType } from '_types/ThemeType';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    containerStyle: {
      flexDirection: 'row',
      backgroundColor: theme?.neutralColors?.neutral900,
      borderRadius: scale(16),
      padding: scale(18),
      justifyContent: 'center',
      alignItems: 'center',
    },
    textStyle: {
      color: theme?.otherColors?.white,
    },
    disabledStyle: {
      backgroundColor: theme?.neutralColors?.neutral200,
    },
    loaderStyle: {
      marginEnd: scale(8),
    },
  });

export default styles;
