import { StyleSheet } from 'react-native';

import { ThemeType } from '_types/ThemeType';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    textStyle: {
      color: theme?.primaryColors?.primary900,
    },
  });

export default styles;
