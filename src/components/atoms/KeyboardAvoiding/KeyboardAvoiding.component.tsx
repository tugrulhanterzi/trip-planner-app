import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

import styles from "./KeyboardAvoiding.style";
import { KeyboardAvoidingPropsTypes } from "./KeyboardAvoiding.types";

const { flex, contentContainerStyle } = styles();

const KeyboardAvoiding: React.FC<KeyboardAvoidingPropsTypes> = ({
  Offset = 80,
  overrideStyle = {},
  children,
  avoidOverComponent = true,
  overrideContentStyle = {},
}) => {
  const animatedStyle = useAnimatedStyle(
    () => ({
      flex: 1,
    }),
    []
  );

  const behavior = Platform.OS === "ios" ? "padding" : undefined;

  return (
    <Animated.View style={[animatedStyle, overrideStyle]}>
      {avoidOverComponent ? (
        <KeyboardAvoidingView
          style={flex}
          keyboardVerticalOffset={Offset}
          behavior={behavior}
        >
          <ScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            bounces={false}
            style={flex}
            contentContainerStyle={[
              contentContainerStyle,
              overrideContentStyle,
            ]}
          >
            {children}
          </ScrollView>
        </KeyboardAvoidingView>
      ) : (
        children
      )}
    </Animated.View>
  );
};

export default KeyboardAvoiding;
