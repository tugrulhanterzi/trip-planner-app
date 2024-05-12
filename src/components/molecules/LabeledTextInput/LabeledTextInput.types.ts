import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  ReturnKeyTypeOptions,
  StyleProp,
  TextInputProps,
  TextInputSubmitEditingEventData,
  TextStyle,
  ViewStyle,
} from "react-native";

import { TextStyleTypes } from "_styles/typography";

type LabeledTextInputPropsTypes = {
  title?: string;
  handleChange: (text: string) => void;
  inputValue?: string;
  overrideInputStyle?: StyleProp<TextStyle>;
  overrideInputContainerStyle?: StyleProp<ViewStyle>;
  overrideContainerStyle?: StyleProp<ViewStyle>;
  overridePlaceholderTextColor?: string;
  error?: string | boolean;
  disabled?: boolean;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  hintText?: string;
  maxLength?: number;
  hasReturnKeyType?: boolean;
  returnKeyType?: ReturnKeyTypeOptions;
  onBlur?: Function;
  onFocus?: Function;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => void;
  overrideTitleFontStyle?: TextStyleTypes;
  overrideTitleStyle?: StyleProp<TextStyle>;
  overrideHintTextFontStyle?: TextStyleTypes;
  refProp?: any;
  leftChild?: React.ReactElement;
  rightChild?: React.ReactElement;
  overrideHintTextStyle?: StyleProp<TextStyle>;
  customTextInputProps?: TextInputProps;
};

export type { LabeledTextInputPropsTypes };
