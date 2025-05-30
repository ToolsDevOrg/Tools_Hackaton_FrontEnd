import EventCard from "@/shared/ui/EventCard/EventCard";
import Input from "@/shared/ui/input/input";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import Modal from "react-native-modal";
import Svg, { Path } from "react-native-svg";
import data from "./mock/events_schedule.json";
import data2 from './mock/jr.json'
import { useRoleStore } from "@/app/stores/ruleStore";

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

export const Popup = ({view}: {view: boolean}) => {
  const [fullHeight, setFullHeight] = useState(false);
  
  const {role} = useRoleStore()
  
  return (
    <>
      <Modal
        isVisible={view}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropOpacity={0}
        coverScreen={false}
        style={[styles.modal, styles.fullHeigth]}
        swipeDirection={fullHeight ? undefined : "down"}
        hasBackdrop={fullHeight}
      >
        <View
          style={[
            styles.modalContent,
            fullHeight && styles.fullHeightModalContent,
          ]}
        >
          <Pressable
            style={styles.press}
            onPress={
              fullHeight
                ? () => setFullHeight(false)
                : () => setFullHeight(true)
            }
          >
            <View style={styles.hr} />
          </Pressable>
          <View style={styles.wrapperContent}>
            <Input icon={<SearchIcon />} placeholder="Начните поиск" />
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.buttons}
            >
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>
                  {role === 'resident' ? "Спорт объекты" : "ЖК"}
                </Text>
              </Pressable>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Мероприятия</Text>
              </Pressable>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Тренировки</Text>
              </Pressable>
            </ScrollView>
          </View>
          {fullHeight && (
            <ScrollView>
              
              {role === 'resident' ? data.map((item) => (
                <EventCard
                  key={String(item.number)}
                  variant="resident"
                  typeText={item.policy_area}
                  title={item.title}
                  img="./image.png"
                  location={item.location}
                  date={item.date}
                />
              )) : data2.map((item) => (
                <EventCard
                  key={String(item.number)}
                  variant="employee"
                  typeText={item.policy_area}
                  title={item.title}
                  img="./image.png"
                  location={item.location}
                  date={item.date}
                />
              ))}
            </ScrollView>
          )}
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  openButton: {
    marginTop: 40,
    alignSelf: "center",
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  press: {
    width: "100%",
    paddingHorizontal: 5,
    paddingVertical: 20,
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
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#3E3E3E",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 22,
    letterSpacing: -0.4,
  },
  openButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  card: {
    alignSelf: "flex-start",
    width: "100%",
    height: "auto",
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  fullHeightModalContent: {
    flex: 1,
    height: "80%",
    maxHeight: "80%",
  },
  modalContent: {
    gap: 6,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 16,
    zIndex: 3,
    height: "22.8%",
    maxHeight: "22.8%",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -1 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 7, 
    elevation: 3,
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
    backgroundColor: "#1A1A1A",
    alignSelf: "center",
  },
});
