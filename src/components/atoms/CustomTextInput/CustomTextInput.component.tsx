import React, { useMemo, useState } from 'react';
import { TextInput, View } from 'react-native';

import { useTheme } from '_styles/theming';

import styles from './CustomTextInput.style';
import { CustomTextInputPropsTypes } from './CustomTextInput.types';

const CustomTextInput: React.FC<CustomTextInputPropsTypes> = ({
  restTextInputProps = {},
  handleChange = () => {},
  inputValue,
  overrideInputStyle,
  overrideContainerStyle,
  error = false,
  disabled = false,
  placeholder,
  keyboardType = 'default',
  returnKeyType = 'done',
  hasReturnKeyType = false,
  onBlur = () => {},
  onFocus = () => {},
  autoCapitalize = 'words',
  onSubmitEditing = () => {},
  refProp,
  overridePlaceholderTextColor,
  defaultValue = '',
  maxLength,
  leftChild,
  rightChild,
}) => {
  const theme = useTheme();
  const onChange = (val: string) => {
    handleChange(val);
  };

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const { inputContainer, focusedInput, inputStyle, errorStyle, disabledInput, disabledStyle } =
    useMemo(() => styles(theme), [theme]);

  return (
    <View
      style={[
        inputContainer,
        disabled ? disabledStyle : error ? errorStyle : isFocused && focusedInput,
        overrideContainerStyle,
      ]}>
      {leftChild as React.ReactNode}
      <TextInput
        defaultValue={defaultValue}
        ref={refProp}
        onFocus={() => {
          setIsFocused(true);
          onFocus();
        }}
        onBlur={e => {
          setIsFocused(false);
          onBlur(e);
        }}
        clearButtonMode='always'
        clearTextOnFocus
        allowFontScaling={false}
        onChangeText={onChange}
        value={inputValue}
        style={[disabled ? disabledInput : inputStyle, overrideInputStyle]}
        placeholder={placeholder}
        placeholderTextColor={overridePlaceholderTextColor ?? theme?.neutralColors?.neutral300}
        keyboardType={keyboardType}
        editable={!disabled}
        returnKeyType={hasReturnKeyType ? returnKeyType : undefined}
        onSubmitEditing={onSubmitEditing}
        maxLength={maxLength}
        autoCapitalize={autoCapitalize}
        autoCorrect={false}
        {...restTextInputProps}
      />
      {rightChild as React.ReactNode}
    </View>
  );
};

export default CustomTextInput;
