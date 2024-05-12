import Animated from "react-native-reanimated";
import type { StyleProp, ViewStyle } from "react-native/types";

type KeyboardAvoidingPropsTypes = {
  Offset?: number | undefined;
  children?: React.ReactNode | undefined;
  avoidOverComponent?: boolean | undefined;
  overrideStyle?: StyleProp<Animated.AnimateStyle<StyleProp<ViewStyle>>> | undefined;
  overrideContentStyle?: StyleProp<ViewStyle> | undefined;
};

export type { KeyboardAvoidingPropsTypes };
