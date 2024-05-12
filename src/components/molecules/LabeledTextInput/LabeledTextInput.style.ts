import { StyleSheet } from 'react-native';

import { verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/ThemeType';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    titleStyle: {
      color: theme?.neutralColors?.neutral600,
      marginBottom: verticalScale(8),
    },
    errorHintTextStyle: {
      color: theme?.otherColors?.danger,
      marginTop: verticalScale(8),
    },
    hintTextStyle: {
      color: theme?.neutralColors?.neutral600,
      marginTop: verticalScale(8),
    },
    subContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    inputContainerStyle: {
      flex: 1,
    },
  });

export default styles;
