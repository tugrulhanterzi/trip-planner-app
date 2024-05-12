import { StyleSheet } from 'react-native';

import { scale } from '_styles/scaling';
import { ThemeType } from '_types/ThemeType';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      alignItems: 'flex-end',
    },
    actionItem: {
      backgroundColor: `${theme?.otherColors?.danger}30`,
      alignItems: 'center',
      justifyContent: 'center',
      width: scale(50),
      height: scale(50),
      borderRadius: scale(25),
    },
  });

export default styles;
