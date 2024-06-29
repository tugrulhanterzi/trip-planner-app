import { useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';

import { FlashList } from '@shopify/flash-list';
import { getDocument } from 'src/helpers/documentServices';

import { ListEmpty, RouteCard } from '_molecules';
import { AppWrapper } from '_organisms';
import { useTheme } from '_styles/theming';
import { StorageKeys, getStorageItem } from '_utils/storageHandler';

import styles from './MyRoutes.style';
import { useMyRoutes } from './hooks/useMyRoutes.hook';

const MyRoutes = () => {
  const [firebaseRoutes, setFirebaseRoutes] = useState<any[] | undefined | 'IDLE'>('IDLE');
  useEffect(() => {
    const fetchRoutes = async () => {
      const storedUser = await getStorageItem(StorageKeys.User);
      const firebaseUser: { id: string; routes?: any[] } = await getDocument('users', storedUser);

      setFirebaseRoutes(firebaseUser?.routes);
    };
    fetchRoutes();
  }, []);

  const theme = useTheme();
  const { routes, isRoutesLoading } = useMyRoutes();
  const { container } = useMemo(() => styles(theme), [theme]);

  const datas = firebaseRoutes ? firebaseRoutes : routes;

  if (firebaseRoutes === 'IDLE') {
    return (
      <AppWrapper overrideStyle={container}>
        <View style={container}>
          <ListEmpty overrideText='Rotalar yükleniyor...' />
        </View>
      </AppWrapper>
    );
  }

  return (
    <AppWrapper overrideStyle={container}>
      <View style={container}>
        {routes.length > 0 && !isRoutesLoading && (
          <FlashList
            data={datas}
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
