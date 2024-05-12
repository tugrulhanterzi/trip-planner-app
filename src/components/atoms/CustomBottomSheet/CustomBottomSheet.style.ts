import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/ThemeType';
import { BottomAlertTypes } from '_types/index';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    childrenStyle: {
      marginHorizontal: scale(25),
    },
    modalStyle: {
      backgroundColor: theme?.otherColors?.white,
      paddingTop: verticalScale(16),
    },
    handleStyle: {
      backgroundColor: theme?.neutralColors?.neutral500,
    },
    contentContainer: {
      marginHorizontal: scale(15),
      borderBottomLeftRadius: scale(13),
      borderBottomRightRadius: scale(13),
    },
    handleIndicatorStyle: { display: 'none' },
    alertModalContainerStyle: {
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
    alertTitleStyle: {
      marginBottom: verticalScale(15),
      textAlign: 'center',
    },
    alertModalIconStyle: {
      width: scale(40),
      height: scale(40),
      marginBottom: verticalScale(15),
    },
  });

const getStyleByStatus = ({ theme, type }: { theme: ThemeType; type: BottomAlertTypes }) => {
  switch (type) {
    case BottomAlertTypes.Error:
      return StyleSheet.create({
        iconStyle: {
          tintColor: theme?.otherColors?.danger,
        },
        textStyle: {
          color: theme?.otherColors?.danger,
        },
      });
    case BottomAlertTypes.Success:
      return StyleSheet.create({
        iconStyle: {
          tintColor: theme?.otherColors?.success,
        },
        textStyle: {
          color: theme?.otherColors?.success,
        },
      });

    case BottomAlertTypes.Warning:
      return StyleSheet.create({
        iconStyle: {
          tintColor: theme?.otherColors?.warning,
        },
        textStyle: {
          color: theme?.otherColors?.warning,
        },
      });
    case BottomAlertTypes.Info:
    default:
      return StyleSheet.create({
        iconStyle: {
          tintColor: theme?.neutralColors?.neutral500,
        },
        textStyle: {
          color: theme?.neutralColors?.neutral500,
        },
      });
  }
};

export default styles;
export { getStyleByStatus };
