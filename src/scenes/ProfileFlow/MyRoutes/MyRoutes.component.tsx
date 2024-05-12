import { useMemo } from 'react';
import { View } from 'react-native';

import { FlashList } from '@shopify/flash-list';

import { ListEmpty, RouteCard } from '_molecules';
import { AppWrapper } from '_organisms';
import { useTheme } from '_styles/theming';

import styles from './MyRoutes.style';
import { useMyRoutes } from './hooks/useMyRoutes.hook';

const MyRoutes = () => {
  const theme = useTheme();
  const { routes, isRoutesLoading } = useMyRoutes();

  const { container } = useMemo(() => styles(theme), [theme]);

  return (
    <AppWrapper overrideStyle={container}>
      <View style={container}>
        {routes.length > 0 && !isRoutesLoading && (
          <FlashList
            data={routes}
            showsVerticalScrollIndicator={false}
            estimatedItemSize={300}
            keyExtractor={(item: any) => String(item?.id)}
            renderItem={({ item }: { item: any }) => {
              return (
                <RouteCard
                  key={String(item?.id)}
                  createdAt={item?.createdAt}
                  directions={item?.directions}
                />
              );
            }}
            ListEmptyComponent={
              <ListEmpty overrideText='Henüz rota oluşturmadınız. Rota oluşturmak için haritaya gidin.' />
            }
          />
        )}
      </View>
    </AppWrapper>
  );
};

export default MyRoutes;
