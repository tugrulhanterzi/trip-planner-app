import { ReactNode, RefObject } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { SharedValue } from 'react-native-reanimated';

import { BottomSheetBackdropProps, BottomSheetProps } from '@gorhom/bottom-sheet';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

import MainTypes, { BottomAlertTypes } from '_types/index';

type CustomBottomSheetPropsTypes = MainTypes & {
  refProp?: RefObject<BottomSheetMethods>;
  children?: ReactNode;
  modalProps?: Partial<BottomSheetProps> & React.RefAttributes<BottomSheetMethods>;
  index?: number;
  overrideStyle?: StyleProp<ViewStyle>;
  overrideModalStyle?: StyleProp<ViewStyle>;
  overrideHandleStyle?: StyleProp<ViewStyle>;
  snapPoints: Array<string | number> | SharedValue<Array<string | number>>;
  enableOverDrag?: boolean;
  enablePanDownToClose?: boolean;
  enableHandlePanningGesture?: boolean;
  enableContentPanningGesture?: boolean;
  backdropComponent?: React.FC<BottomSheetBackdropProps>;
};

type AlertBottomSheetTypes = MainTypes & {
  title?: string;
  desc?: string;
  type?: BottomAlertTypes;
};

export type { CustomBottomSheetPropsTypes, AlertBottomSheetTypes };
