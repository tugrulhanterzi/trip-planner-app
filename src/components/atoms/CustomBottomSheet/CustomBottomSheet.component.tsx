import React, { useCallback, useMemo } from 'react';
import { View } from 'react-native';

import BottomSheetModal, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import { Portal } from '@gorhom/portal';

import { useTheme } from '_styles/theming';
import { getAutomationTestingProp } from '_utils/helpers';

import styles from './CustomBottomSheet.style';
import { CustomBottomSheetPropsTypes } from './CustomBottomSheet.types';

const CustomBottomSheet: React.FC<CustomBottomSheetPropsTypes> = ({
  refProp,
  children,
  modalProps,
  testId = '',
  index = -1,
  overrideStyle,
  backdropComponent,
  overrideModalStyle,
  overrideHandleStyle,
  snapPoints = ['50%'],
  enableOverDrag = true,
  enablePanDownToClose = true,
  enableHandlePanningGesture = true,
  enableContentPanningGesture = true,
}) => {
  const theme = useTheme();

  const { childrenStyle, modalStyle, handleStyle } = useMemo(() => styles(theme), [theme]);

  const renderBackdrop = useCallback(
    (props_: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop {...props_} pressBehavior='close' opacity={0.3} disappearsOnIndex={-1} />
    ),
    []
  );

  return (
    <Portal>
      <BottomSheetModal
        {...getAutomationTestingProp(testId)}
        index={index}
        ref={refProp as any}
        snapPoints={snapPoints}
        enableOverDrag={enableOverDrag}
        enablePanDownToClose={enablePanDownToClose}
        backgroundStyle={[modalStyle, overrideModalStyle]}
        enableHandlePanningGesture={enableHandlePanningGesture}
        enableContentPanningGesture={enableContentPanningGesture}
        handleIndicatorStyle={[handleStyle, overrideHandleStyle]}
        backdropComponent={backdropComponent || renderBackdrop}
        {...modalProps}>
        <View style={[childrenStyle, overrideStyle]}>{children}</View>
      </BottomSheetModal>
    </Portal>
  );
};

export default CustomBottomSheet;
