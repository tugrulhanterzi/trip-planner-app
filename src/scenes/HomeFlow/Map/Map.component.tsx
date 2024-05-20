import React, { Key, useMemo, useRef } from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { Callout, LatLng, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import { IconPlus, IconTrash } from 'tabler-react-native/icons';

import { CustomButton } from '_atoms';
import { AppWrapper } from '_organisms';
import { scale } from '_styles/scaling';
import { useTheme } from '_styles/theming';
import { MAP_API_KEY } from '_utils/constants';

import fakeDatas from '../../../../fakeDatas.json';
import styles from './Map.style';
import { useMap } from './hooks/useMap.hook';

const { width, height } = Dimensions.get('window');

const Map = () => {
  const theme = useTheme();
  const {
    markers,
    currentLocation,
    inputCount,
    setInputCount,
    deleteMarker,
    onSaveHandler,
    addMarker,
    setMarkers,
  } = useMap();

  const {
    mapStyle,
    autoCompleteContainer,
    autoCompleteTextInputContainer,
    autoCompleteDescription,
    autoCompletePredefinedPlacesDescription,
    addButtonContainer,
    saveButtonContainer,
  } = useMemo(() => styles(theme), [theme]);

  const inputRefs = useRef<any>([React.createRef()]);
  const mapRef = useRef<MapView>(null);
  const [zoom, setZoom] = React.useState(0);
  // Kullanıcının konumunu haritada göstermek için
  React.useEffect(() => {
    const isCurrentLocationExist = markers.some(
      (marker: LatLng) =>
        marker.latitude === currentLocation.latitude &&
        marker.longitude === currentLocation.longitude
    );

    if (!isCurrentLocationExist && currentLocation?.latitude && currentLocation?.longitude) {
      addMarker({
        latitude: currentLocation?.latitude,
        longitude: currentLocation?.longitude,
        title: 'Konumunuz',
      });
    }
  }, [currentLocation]);
  // Kullanıcının seçtiği adresleri inputlara yazdırmak için
  React.useEffect(() => {
    markers.forEach((marker: LatLng, index: number) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].current?.setAddressText(marker?.title);
      }
    });
  }, [markers]);
  // Haritayı markerlara göre zoomlamak için
  React.useEffect(() => {
    if (markers.length > 1) {
      mapRef.current?.fitToCoordinates(
        markers.map((marker: LatLng) => ({
          latitude: marker.latitude,
          longitude: marker.longitude,
        })),
        {
          edgePadding: {
            top: scale(50),
            right: scale(8),
            bottom: scale(50),
            left: scale(10),
          },
          animated: true,
        }
      );
    }
  }, [markers]);

  const RenderMap = () => (
    <MapView
      ref={mapRef}
      style={mapStyle}
      provider={PROVIDER_GOOGLE}
      showsUserLocation
      showsMyLocationButton
      mapPadding={{
        top: scale(50),
        right: scale(8),
        bottom: scale(50),
        left: scale(10),
      }}
      initialRegion={{
        latitude: currentLocation?.latitude,
        longitude: currentLocation?.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {fakeDatas.map((item: any, index: any) => (
        <Marker
          key={index}
          coordinate={{
            latitude: item.coordinates.latitude,
            longitude: item.coordinates.longitude,
          }}
          title={item.title}>
          <Callout
            onPress={() => {
              addMarker({
                latitude: item.coordinates.latitude,
                longitude: item.coordinates.longitude,
                title: item.name,
              });
              setInputCount(prev => [...prev, prev.length]);
              inputRefs.current.push(React.createRef());
            }}>
            <View
              style={{
                backgroundColor: 'red',
                borderRadius: 4,
                padding: 4,
                elevation: 4,
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
              }}>
              <Image source={{ uri: item?.photoURL }} style={{ width: 100, height: 100 }} />
              <Text>{item?.name}</Text>
            </View>
          </Callout>
        </Marker>
      ))}

      {markers.map((marker: LatLng, index: Key | null | undefined) => (
        <Marker
          key={index}
          coordinate={marker}
          title={marker.title ? marker.title : `Durak ${Number(index) + 1}`}
        />
      ))}
      {markers.length > 0 &&
        markers.map((marker: LatLng, index: number) => {
          if (index === markers.length - 1) {
            return null;
          }
          return (
            <MapViewDirections
              key={index}
              origin={markers[index]}
              destination={markers[index + 1]}
              apikey={MAP_API_KEY}
              strokeWidth={scale(5)}
              strokeColor={theme?.primaryColors?.primary500}
            />
          );
        })}
    </MapView>
  );

  return (
    <AppWrapper>
      {currentLocation && <RenderMap />}
      {inputCount?.map((item: any, index: any) => (
        <GooglePlacesAutocomplete
          textInputProps={{
            editable: index === 0 ? false : true,
          }}
          ref={inputRefs.current[index]}
          key={`autoComplete-${index}`}
          placeholder={`Durak ara...`}
          fetchDetails
          query={{
            key: MAP_API_KEY,
            language: 'tr',
            components: 'country:tr',
            types: ['address'],
          }}
          debounce={300}
          listViewDisplayed={'auto'}
          onFail={error => console.error(error)}
          onPress={(data, details = null) => {
            // Kullanıcı bir adres seçtiğinde bu fonksiyon çalışır
            // details.geometry.location.latitude ve details.geometry.location.longitude
            // ile seçilen adresin koordinatlarına erişebilirsiniz.

            if (index <= markers.length - 1) {
              setMarkers((prev: any) =>
                prev.map((marker: any, i: number) =>
                  i === index
                    ? {
                        ...marker,
                        title: data?.description,
                        latitude: details!.geometry.location.lat,
                        longitude: details!.geometry.location.lng,
                      }
                    : marker
                )
              );
            } else {
              addMarker({
                latitude: details!.geometry.location.lat,
                longitude: details!.geometry.location.lng,
                title: data?.description,
              });
            }
          }}
          renderRightButton={() => {
            const showTrash = markers.length > 1 && index !== 0;
            return (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                {showTrash && (
                  <TouchableOpacity
                    style={addButtonContainer}
                    onPress={() => {
                      const prev = inputCount;
                      prev.pop();
                      setInputCount([...prev]);

                      const findCurrentMarkerByIndex = markers.findIndex(
                        (marker: any, i: number) => i === index
                      );

                      inputRefs.current.splice(findCurrentMarkerByIndex, 1);

                      deleteMarker(findCurrentMarkerByIndex);
                      return;
                    }}>
                    <IconTrash
                      size={scale(20)}
                      color={theme?.neutralColors?.neutral900}
                      stroke={scale(1.5)}
                    />
                  </TouchableOpacity>
                )}
                <TouchableOpacity
                  style={addButtonContainer}
                  onPress={() => {
                    const prev = inputCount;
                    setInputCount([...prev, prev.length]);
                    inputRefs.current.push(React.createRef());
                  }}>
                  <IconPlus
                    size={scale(20)}
                    color={theme?.neutralColors?.neutral900}
                    stroke={scale(1.5)}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
          styles={{
            container: {
              ...autoCompleteContainer,
              ...(index === 0 ? { top: scale(10) } : { top: scale(10) + index * scale(50) }),
            },
            textInputContainer: autoCompleteTextInputContainer,
            description: autoCompleteDescription,
            predefinedPlacesDescription: autoCompletePredefinedPlacesDescription,
          }}
        />
      ))}
      <View style={saveButtonContainer}>
        <CustomButton title='Rotayı Kaydet' onPress={onSaveHandler} />
      </View>
    </AppWrapper>
  );
};

export default Map;
