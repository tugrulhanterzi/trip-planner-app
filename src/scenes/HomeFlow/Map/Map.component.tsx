import { Key, useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { LatLng, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import { IconPlus, IconTrash } from 'tabler-react-native/icons';

import { CustomButton } from '_atoms';
import { AppWrapper } from '_organisms';
import { scale } from '_styles/scaling';
import { useTheme } from '_styles/theming';
import { MAP_API_KEY } from '_utils/constants';

import styles from './Map.style';
import { useMap } from './hooks/useMap.hook';

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

  const RenderMap = () => (
    <MapView
      style={mapStyle}
      provider={PROVIDER_GOOGLE}
      showsUserLocation
      showsMyLocationButton
      mapPadding={{
        top: scale(50),
        right: scale(8),
        bottom: scale(50),
        left: scale(50),
      }}
      initialRegion={{
        latitude: currentLocation?.latitude,
        longitude: currentLocation?.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {currentLocation && <Marker coordinate={currentLocation} title='Mevcut Konum' />}
      {markers.map((marker: LatLng, index: Key | null | undefined) => (
        <Marker key={index} coordinate={marker} title={`Durak ${Number(index) + 1}`} />
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
          key={`autoComplete-${index}`}
          placeholder='Durak ara...'
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
            addMarker({
              latitude: details!.geometry.location.lat,
              longitude: details!.geometry.location.lng,
              title: data?.description,
            });
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
