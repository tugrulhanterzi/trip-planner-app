import { StyleProp, TextStyle, ViewStyle } from "react-native";

import { CustomTextPropsTypes } from "../../atoms/CustomText/CustomText.types";

type ListEmptyPropsTypes = {
  overrideText?: string;
  restTextProps?: CustomTextPropsTypes;
  overrideTextStyle?: StyleProp<TextStyle>;
  overrideContainerStyle?: StyleProp<ViewStyle>;
};

export type { ListEmptyPropsTypes };
