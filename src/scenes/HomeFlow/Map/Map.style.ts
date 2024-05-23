import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { TextStyle } from '_styles/typography';
import { ThemeType } from '_types/ThemeType';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    mapStyle: {
      ...StyleSheet.absoluteFillObject,
    },
    autoCompleteContainer: {
      position: 'absolute',
      top: scale(10),
      left: scale(20),
      right: scale(20),
    },
    autoCompleteTextInputContainer: {
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    autoCompleteDescription: {
      ...TextStyle['bodyRegularBold'],
    },
    autoCompletePredefinedPlacesDescription: {
      ...TextStyle['bodyRegularBold'],
      color: theme?.primaryColors?.primary500,
    },
    addButtonContainer: {
      marginLeft: scale(10),
      width: scale(36),
      height: scale(36),
      backgroundColor: theme?.otherColors?.white,
      borderRadius: scale(18),
      justifyContent: 'center',
      alignItems: 'center',
    },
    saveButtonContainer: {
      position: 'absolute',
      bottom: verticalScale(20),
      right: 0,
      left: 0,
    },
  });

export default styles;
