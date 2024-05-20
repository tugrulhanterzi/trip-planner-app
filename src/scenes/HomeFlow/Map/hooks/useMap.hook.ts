import { useCallback, useEffect, useState } from 'react';
import { Alert, Linking } from 'react-native';

import * as Location from 'expo-location';
import moment from 'moment';

import { StorageKeys, getStorageItem, setStorageItem } from '_utils/storageHandler';

const useMap = () => {
  const [currentLocation, setCurrentLocation] = useState<any>(null);
  const [markers, setMarkers] = useState<any>([]);
  const [inputCount, setInputCount] = useState<number[]>([0]);

  const getPermission = useCallback(async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Uygulama konum erişimi gerektirir',
          'Uygulamanın konumunuza erişmesine izin verin',
          [
            {
              text: 'Ayarlar',
              onPress: () => Linking.openSettings(),
            },
            {
              text: 'İptal',
              onPress: () => {},
            },
          ]
        );
        return;
      }

      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
      });
      const newData = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
      setCurrentLocation(newData);
    } catch (error) {
      console.log('getPermissionError', error);
      Alert.alert('Hata', 'Konum erişimi sırasında bir hata oluştu');
    }
  }, []);

  useEffect(() => {
    getPermission();
  }, []);

  const addMarker = async ({
    latitude,
    longitude,
    title,
  }: {
    latitude: number;
    longitude: number;
    title: string;
  }) => {
    try {
      const newData = {
        title,
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
      setMarkers([
        ...markers,
        {
          ...newData,
        },
      ]);
    } catch (error) {
      console.log('addMarkerError', error);
      Alert.alert('Hata', 'Marker eklenirken bir hata oluştu');
    }
  };

  const onSaveHandler = async () => {
    try {
      const savedRouteItems = await getStorageItem(StorageKeys.RouteItems);
      const parsedRouteItems = savedRouteItems ? JSON.parse(savedRouteItems) : [];
      const newItem = markers.map((marker: any) => ({
        name: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude,
      }));

      const newRouteItem = {
        id: String(parsedRouteItems.length + 1),
        createdAt: moment().format('DD.MM.YYYY HH:mm'),
        directions: newItem,
      };
      const updatedRouteItems = parsedRouteItems
        ? [...parsedRouteItems, newRouteItem]
        : [newRouteItem];
      await setStorageItem(StorageKeys.RouteItems, JSON.stringify(updatedRouteItems));
      Alert.alert('Başarılı', 'Rota başarıyla kaydedildi');
    } catch (error) {
      console.log('save error', error);
      Alert.alert('Hata', 'Kayıt sırasında bir hata oluştu');
    }
  };

  const deleteMarker = (index: number) => {
    const newMarkers = markers.filter((_: any, i: number) => i !== index);
    setMarkers(newMarkers);
  };

  return {
    addMarker,
    markers,
    currentLocation,
    inputCount,
    setInputCount,
    onSaveHandler,
    deleteMarker,
    setMarkers,
  };
};

export { useMap };
