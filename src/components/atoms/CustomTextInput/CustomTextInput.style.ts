import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { TextStyle } from '_styles/typography';
import { ThemeType } from '_types/ThemeType';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    inputContainer: {
      padding: scale(12),
      height: 'auto',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: scale(12),
      borderWidth: scale(1),
      borderColor: theme?.otherColors?.divider,
    },
    focusedInput: {
      backgroundColor: theme?.neutralColors?.neutral50,
      borderColor: theme?.neutralColors?.neutral50,
    },
    errorStyle: {
      backgroundColor: theme?.otherColors?.danger,
      borderColor: theme?.otherColors?.danger,
    },
    inputStyle: {
      ...TextStyle?.bodyLargeRegular,
      color: theme?.neutralColors?.neutral900,
      flex: 1,
      textAlign: 'left',
    },
    disabledStyle: {
      backgroundColor: theme?.neutralColors?.neutral50,
      borderColor: theme?.neutralColors?.neutral50,
    },
    disabledInput: {
      ...TextStyle.bodyLargeRegular,
      flex: 1,
      color: theme?.neutralColors?.neutral400,
      textAlign: 'left',
    },
  });

export default styles;
