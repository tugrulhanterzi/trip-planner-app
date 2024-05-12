import React, { useMemo, useRef } from 'react';
import { Animated, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { IconArchive, IconTrash } from 'tabler-react-native/icons';

import { scale } from '_styles/scaling';
import { useTheme } from '_styles/theming';

import styles from './SwipeableRow.style';
import { SwipeableRowProps } from './SwipeableRow.types';

const SwipeableRow: React.FC<SwipeableRowProps> = ({
  children,
  onDelete,
  onArchive,
  overrideContainerStyle,
}) => {
  const theme = useTheme();
  const swipeableRef = useRef<Swipeable | null>(null);

  const { container, actionItem } = useMemo(() => styles(theme), [theme]);

  const renderRightAction = (progress: Animated.AnimatedInterpolation<number>) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [scale(60), 0],
    });

    const backgroundColor =
      onDelete !== undefined
        ? `${theme?.otherColors?.danger}30`
        : `${theme?.otherColors?.warning}30`;

    return (
      <Animated.View
        style={{
          flex: 1,
          marginLeft: scale(8),
          transform: [{ translateX: trans }],
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {onDelete && (
          <RectButton
            style={[actionItem, { backgroundColor }]}
            onPress={() => {
              onDelete?.();
              if (swipeableRef.current) {
                swipeableRef.current.close();
              }
            }}>
            <IconTrash size={scale(24)} stroke={scale(2)} color={theme?.otherColors?.danger} />
          </RectButton>
        )}
        {onArchive && (
          <RectButton
            style={[actionItem, { backgroundColor }]}
            onPress={() => {
              onArchive?.();
              if (swipeableRef.current) {
                swipeableRef.current.close();
              }
            }}>
            <IconArchive size={scale(24)} stroke={scale(2)} color={theme?.otherColors?.warning} />
          </RectButton>
        )}
      </Animated.View>
    );
  };

  const renderRightActions = (
    progress: Animated.AnimatedInterpolation<number>,
    _dragAnimatedValue: Animated.AnimatedInterpolation<number>
  ) => <View style={container}>{renderRightAction(progress)}</View>;

  return (
    <Swipeable
      ref={swipeableRef}
      containerStyle={overrideContainerStyle}
      friction={2}
      enableTrackpadTwoFingerGesture
      rightThreshold={40}
      overshootRight={false} // Disable overshooting to prevent immediate deletion
      overshootFriction={8} // Adjust overshoot friction for a smooth scroll
      renderRightActions={renderRightActions}>
      {children}
    </Swipeable>
  );
};

export default SwipeableRow;
