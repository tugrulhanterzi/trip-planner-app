import { StyleSheet } from "react-native";

import { verticalScale } from "_styles/scaling";

const style = () =>
  StyleSheet.create({
    flex: {
      flex: 1,
    },
    contentContainerStyle: {
      flexGrow: 1,
      paddingBottom: verticalScale(30),
    },
  });

export default style;
