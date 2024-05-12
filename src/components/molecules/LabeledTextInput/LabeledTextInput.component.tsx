import React, { useMemo } from 'react';
import { View } from 'react-native';

import { useTheme } from '_styles/theming';

import CustomText from '../../atoms/CustomText/CustomText.component';
import CustomTextInput from '../../atoms/CustomTextInput/CustomTextInput.component';
import styles from './LabeledTextInput.style';
import { LabeledTextInputPropsTypes } from './LabeledTextInput.types';

const LabeledTextInput: React.FC<LabeledTextInputPropsTypes> = ({
  title = '',
  handleChange = () => {},
  inputValue,
  overrideInputStyle,
  overrideInputContainerStyle,
  overrideContainerStyle,
  overridePlaceholderTextColor,
  error,
  disabled = false,
  placeholder,
  keyboardType = 'default',
  hintText,
  maxLength,
  hasReturnKeyType = true,
  returnKeyType = 'default',
  onBlur = () => {},
  onFocus = () => {},
  autoCapitalize,
  onSubmitEditing = () => {},
  overrideTitleFontStyle = 'bodyMedium',
  overrideTitleStyle,
  overrideHintTextFontStyle = 'bodyMedium',
  refProp,
  leftChild,
  rightChild,
  overrideHintTextStyle,
  customTextInputProps,
}) => {
  const theme = useTheme();
  const {
    container,
    subContainer,
    errorHintTextStyle,
    titleStyle,
    hintTextStyle,
    inputContainerStyle,
  } = useMemo(() => styles(theme), [theme]);

  return (
    <View style={[container, overrideContainerStyle]}>
      {!!title && typeof title === 'string' && (
        <CustomText
          text={title}
          textFontStyle={overrideTitleFontStyle}
          overrideStyle={[titleStyle, overrideTitleStyle]}
        />
      )}
      <View style={subContainer}>
        <CustomTextInput
          refProp={refProp}
          handleChange={handleChange}
          placeholder={placeholder}
          keyboardType={keyboardType}
          inputValue={inputValue}
          overrideInputStyle={overrideInputStyle}
          overrideContainerStyle={[inputContainerStyle, overrideInputContainerStyle]}
          overridePlaceholderTextColor={overridePlaceholderTextColor}
          error={!!error}
          disabled={disabled}
          maxLength={maxLength}
          hasReturnKeyType={hasReturnKeyType}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          autoCapitalize={autoCapitalize}
          leftChild={leftChild}
          rightChild={rightChild}
          onBlur={onBlur}
          onFocus={onFocus}
          restTextInputProps={customTextInputProps}
        />
      </View>
      {((!!error && typeof error === 'string') || (!!hintText && typeof hintText === 'string')) && (
        <CustomText
          text={!!error && typeof error === 'string' ? error : hintText}
          textFontStyle={overrideHintTextFontStyle}
          overrideStyle={[error ? errorHintTextStyle : hintTextStyle, overrideHintTextStyle]}
        />
      )}
    </View>
  );
};

export default LabeledTextInput;
