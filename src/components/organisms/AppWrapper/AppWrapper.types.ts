import { StyleProp, ViewStyle } from 'react-native';

type AppWrapperProps = {
  children?: React.ReactNode;
  overrideMainContainerStyle?: StyleProp<ViewStyle>;
  overrideContainerStyle?: StyleProp<ViewStyle>;
  overrideStyle?: StyleProp<ViewStyle>;
  removeSafeAreaView?: boolean;
};

export type { AppWrapperProps };
