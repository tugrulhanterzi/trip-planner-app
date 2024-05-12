import React, { ReactNode, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import { Image, View } from 'react-native';

// import iconsObject from '_assets/icons/iconsObject';
import { verticalScale } from '_styles/scaling';
import { useTheme } from '_styles/theming';
import { BottomAlertTypes } from '_types/index';

import CustomText from '../CustomText/CustomText.component';
import BottomModalManagerComponent from './BottomModalManager.component';
import CustomBottomSheet from './CustomBottomSheet.component';
import styles, { getStyleByStatus } from './CustomBottomSheet.style';
import { AlertBottomSheetTypes } from './CustomBottomSheet.types';

let bottomSheetInterval: any;

export const openAlertBottomSheetModal = (children: AlertBottomSheetTypes) => {
  (BottomModalManagerComponent.getCurrent() as any)?.current?.showAlert(children);
};

export const closeAlertBottomSheetModal = () => {
  (BottomModalManagerComponent.getCurrent() as any)?.current?.closeAlert();
};

export const openTimedAlertBottomSheetModal = (
  children: AlertBottomSheetTypes,
  onCloseCallback = () => {},
  interval = 3000
) => {
  clearTimeout(bottomSheetInterval);
  (BottomModalManagerComponent.getCurrent() as any)?.current?.showAlert(children);
  bottomSheetInterval = setTimeout(() => {
    (BottomModalManagerComponent.getCurrent() as any)?.current?.closeAlert();
    onCloseCallback();
  }, interval);
};

const AlertBottomSheet: React.FC<AlertBottomSheetTypes> = () => {
  const theme = useTheme();
  const ref = React.useRef();
  const bottomSheetRef = React.useRef(null);

  const [children, setChildren] = useState<ReactNode | null>(null);

  const {
    alertTitleStyle,
    contentContainer,
    alertModalIconStyle,
    handleIndicatorStyle,
    alertModalContainerStyle,
  } = useMemo(() => styles(theme), [theme]);

  // const getIconByType = (type: BottomAlertTypes) => {
  //   switch (type) {
  //     case BottomAlertTypes.Error:
  //       return iconsObject?.errorCircle;
  //     case BottomAlertTypes.Success:
  //       return iconsObject?.successCircle;
  //     case BottomAlertTypes.Warning:
  //       return iconsObject?.warningCircle;
  //     case BottomAlertTypes.Info:
  //     default:
  //       return iconsObject?.infoCircle;
  //   }
  // };

  useEffect(() => {
    BottomModalManagerComponent.register(ref);
    return () => {
      BottomModalManagerComponent.unregister(ref);
    };
  }, [ref]);

  useImperativeHandle(
    ref,
    () =>
      ({
        showAlert: (_content: AlertBottomSheetTypes) => {
          setChildren(renderContent(_content));
          (bottomSheetRef?.current as any)?.expand();
        },
        closeAlert: () => {
          (bottomSheetRef?.current as any)?.close();
          setChildren(null);
        },
      }) as any
  );

  const renderContent = (_content: AlertBottomSheetTypes) => (
    <View style={alertModalContainerStyle}>
      {/* {_content.type && (
        <Image
          style={[getStyleByStatus({ theme, type: _content.type })?.iconStyle, alertModalIconStyle]}
          source={getIconByType(_content.type)}
        />
      )} */}
      {_content.type && (
        <CustomText
          text={_content.title}
          textFontStyle='h6'
          overrideStyle={[
            alertTitleStyle,
            getStyleByStatus({ theme, type: _content.type })?.textStyle,
          ]}
        />
      )}
      {_content.desc && (
        <CustomText
          overrideStyle={alertTitleStyle}
          text={
            _content.type === BottomAlertTypes.Error
              ? _content.desc.replace(/Error: /g, '')
              : _content.desc
          }
        />
      )}
    </View>
  );

  return (
    <CustomBottomSheet
      snapPoints={['25%']}
      refProp={bottomSheetRef}
      modalProps={{
        handleIndicatorStyle,
        containerStyle: contentContainer,
        bottomInset: verticalScale(70),
      }}>
      {children}
    </CustomBottomSheet>
  );
};

export default AlertBottomSheet;
