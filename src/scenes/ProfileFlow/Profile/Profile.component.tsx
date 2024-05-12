import { useMemo } from 'react';
import { FlatList, View } from 'react-native';

import { CustomText } from '_atoms';
import { MenuItemCard } from '_molecules';
import { AppWrapper } from '_organisms';
import useAuthStore from '_store/authStore';
import { useTheme } from '_styles/theming';

import styles from './Profile.style';
import { MenuItemPropType } from './Profile.types';
import { useProfile } from './hooks/useProfile.hook';

const Profile = () => {
  const theme = useTheme();

  const { currentUser } = useAuthStore();

  const { menuItemsSection } = useProfile();

  const {
    container,
    innerHeaderContainer,
    innerHeaderTextStyle,
    contentContainer,
    menuItemHeaderTextStyle,
    menuItemListHeaderStyle,
  } = useMemo(() => styles(theme), [theme]);

  return (
    <AppWrapper overrideStyle={container}>
      <View style={innerHeaderContainer}>
        <CustomText
          text={currentUser?.name}
          textFontStyle='h4'
          overrideStyle={innerHeaderTextStyle}
        />
      </View>
      <View style={contentContainer}>
        <FlatList
          data={menuItemsSection}
          scrollEnabled={false}
          keyExtractor={(item: any) => item?.title}
          ListHeaderComponentStyle={menuItemHeaderTextStyle}
          ListHeaderComponent={() => (
            <CustomText
              text='Genel'
              textFontStyle='bodyMediumSemibold'
              overrideStyle={menuItemListHeaderStyle}
            />
          )}
          renderItem={({ item, index }: { item: MenuItemPropType; index: number }) => (
            <MenuItemCard
              key={`menuItemSection-${item.title}-${index}`}
              testId={`menuItemSection-${item.title}-${index}`}
              title={item.title}
              icon={item.icon}
              iconColor={item?.iconColor}
              onItemPress={item.onPress}
            />
          )}
        />
      </View>
    </AppWrapper>
  );
};

export default Profile;
