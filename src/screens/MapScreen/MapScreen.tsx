import { ScreenWrapper } from '@/shared/ui';
import { Popup } from '@/widgets/popup/Popup';
import { Text, View, StyleSheet, Platform, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import data from "./rewies.json"
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';
import { PopupEvent } from '@/widgets/popupEvent/PopupEvent';


export const MapScreen: React.FC = () => {
  const [viewPopupSearch, setViewPopupSearch] = useState(true)
  const [viewPopupEvent, setViewPopupEvent] = useState(false)
  const [event, setEvent] = useState<any>(null)
  
  const handleMarkerPress = (item: any) => {
    setViewPopupEvent(true)
    setEvent(item)
  }

  return (
    <>
      <ScrollView
        className={`flex-1`}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
        showsVerticalScrollIndicator={false}>
        <View style={styles.menuContainer}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Карта</Text>
            <Text style={styles.cardSubtitle}>Выберите объект</Text>
          </View>
          <Image
            source={require('./logoUjin.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <MapView
        mapType="standard"
        style={styles.map}
        initialRegion={{
          latitude: 58.0105,
          longitude: 56.2502,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      > 
        {data.map((item) => {
          return <Marker
              key={item.number}
              coordinate={{ latitude: item.latitude, longitude: item.longitude }}
              onPress={() => handleMarkerPress(item)}
            />
        })}
      </MapView>
      </ScrollView>
      <Popup view={viewPopupSearch}/>
      <PopupEvent event={event} handleClose={() => setViewPopupEvent(false)} view={viewPopupEvent}/>
    </>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    width: "100%",
    height: 76,
    position: "absolute",
    top: 64,
    zIndex: 20,
    paddingVertical: 8,
    paddingHorizontal: 18,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.54)',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5.7,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  customMarker: {
    backgroundColor: '#FF5252',
    padding: 10,
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 2,
  },
  markerText: {
    color: 'white',
    fontWeight: 'bold',
  },
  card: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardTitle: {
    color: '#000000', 
    fontFamily: 'Mont-Bold',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 36,
    letterSpacing: 0.4,
  },
  cardSubtitle: {
    color: '#717171',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: -0.08,
    fontWeight: '500',
  },
  image: {
    width: 50,
    height: 50,
  },
  map: {
    flex: 1,
    width: '100%',
  }
});