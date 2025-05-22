import EventCard from '@/shared/ui/EventCard/EventCard';
import Input from '@/shared/ui/input/Input';
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Pressable,
  FlatList,
} from 'react-native';
import Modal from 'react-native-modal';
import Svg, { Path } from "react-native-svg";
import data from './mock/events_schedule.json';

const SearchIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
    <Path
      d="M15.4749 15.6005L19.3339 19.3338M9.3339 4.66718C11.543 4.66718 13.3339 6.45804 13.3339 8.66717M18.0895 9.37829C18.0895 14.1893 14.1894 18.0894 9.37835 18.0894C4.56733 18.0894 0.667236 14.1893 0.667236 9.37829C0.667236 4.56727 4.56733 0.667175 9.37835 0.667175C14.1894 0.667175 18.0895 4.56727 18.0895 9.37829Z"
      stroke="#00C0C9"
      strokeWidth={1.2}
      strokeLinecap="round"
    />
  </Svg>
);

export default SearchIcon;


export const Popup = () => {
  const [visible, setVisible] = useState(true);
  const [fullHeight, setFullHeight] = useState(false);
  
  const check = true;

  const openPopup = () => {
    if (visible){
      setVisible(false);
    } else {
      setVisible(true)
    }
    
  };

  return (
    <>
      <TouchableOpacity style={styles.openButton} onPress={openPopup}>
        <Text style={styles.openButtonText}>Открыть окно</Text>
      </TouchableOpacity>
      <Modal
        isVisible={visible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropOpacity={0}
        coverScreen={false}
        style={[styles.modal, styles.fullHeigth]}
        swipeDirection={fullHeight ? undefined : "down"}
        hasBackdrop={fullHeight}
        onSwipeComplete={fullHeight ? undefined : () => setVisible(false)}
      >
        <View
          style={[styles.modalContent, fullHeight && styles.fullHeightModalContent]}
        >
          <Pressable style={styles.press} onPress={fullHeight ? () => setFullHeight(false): () => setFullHeight(true)}>
            <View style={styles.hr} />
          </Pressable>
          <View style={styles.wrapperContent}>
            <Input  icon={<SearchIcon />} placeholder="Начните поиск" />
            <ScrollView
              horizontal={true} 
              showsHorizontalScrollIndicator={false} 
              contentContainerStyle={styles.buttons}
            >
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>{check ? "Спорт объекты": "ЖК"}</Text>
              </Pressable>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Мероприятия</Text>
              </Pressable>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Тренировки</Text>
              </Pressable>
            </ScrollView>
          </View>
          {fullHeight && <View style={{ flex: 1 }}>
          <FlatList
            data={data}
            keyExtractor={(item) => String(item.number)}
            renderItem={({ item }) => (
              <EventCard variant="resident"
                typeText={item.policy_area}
                title={item.title}
                img='./image.png'
                location={item.location}
                date={item.date}/>
                )}
          />
          </View>}
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  openButton: {
    marginTop: 40,
    alignSelf: 'center',
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  press: {
    width: "100%",
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  buttons: {
    flexDirection: "row",
    gap: 10,
  },
  button: {
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 0.8,
    borderColor: "#F2F2F5",
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#3E3E3E',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22,
    letterSpacing: -0.4,
  },
  openButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  card: {
    alignSelf: 'flex-start',
    width: "100%",
    height: "auto",
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    width: "100%",
    position: 'absolute',
    bottom: 0,
    
  },
  fullHeightModalContent: {
    flex: 1,
    height: '90%',
    maxHeight: '100%',
  },
  modalContent: {
    gap: 6,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 16,
    zIndex: 3,
    height: '22.8%',
    maxHeight: '22.8%',
  },
  fullHeigth: {
    height: "auto",
    maxHeight: "auto",
  },
  wrapperContent: {
    gap: 6,
  },
  hr: {
    height: 4,
    width: 36,
    borderRadius: 6,
    backgroundColor: '#1A1A1A',
    alignSelf: 'center',
  },
});