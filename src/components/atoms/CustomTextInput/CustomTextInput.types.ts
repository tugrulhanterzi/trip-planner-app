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

type CustomTextInputPropsTypes = {
  restTextInputProps?: TextInputProps;
  handleChange: (text: string) => void;
  inputValue?: string;
  overrideInputStyle?: StyleProp<TextStyle>;
  overrideContainerStyle?: StyleProp<ViewStyle>;
  error?: boolean;
  disabled?: boolean;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  returnKeyType?: ReturnKeyTypeOptions;
  hasReturnKeyType?: boolean;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  onBlur?: Function;
  onFocus?: Function;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => void;
  refProp?: any;
  overridePlaceholderTextColor?: string;
  defaultValue?: string;
  maxLength?: number;
  leftChild?: React.ReactElement;
  rightChild?: React.ReactElement;
};

export type { CustomTextInputPropsTypes };
