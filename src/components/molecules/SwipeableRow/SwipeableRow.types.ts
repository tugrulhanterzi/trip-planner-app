import { StyleProp, ViewStyle } from "react-native";

type SwipeableRowProps = {
  children?: React.ReactNode;
  overrideContainerStyle?: StyleProp<ViewStyle>;
  overrideStyle?: StyleProp<ViewStyle>;
  onDelete?: () => void;
  onArchive?: Function;
};

export type { SwipeableRowProps };
