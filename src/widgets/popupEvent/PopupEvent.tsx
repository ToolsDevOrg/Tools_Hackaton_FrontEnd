import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity
} from "react-native";
import Modal from "react-native-modal";
import Svg, { Circle, Path } from "react-native-svg";


const PeopleIcon = ({ width = 19, height = 14, color = '#00C0C9' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 19 14" fill="none">
      <Path
        d="M14.6416 7.86127C15.4548 7.94394 16.2607 8.12073 17.041 8.39447C17.716 8.63139 18.167 9.25968 18.167 9.96381V10.7148C18.167 11.6994 17.2785 12.4556 16.2861 12.3163L16.0586 12.2851C16.0128 12.2787 15.9667 12.2736 15.9209 12.2675C15.9828 12.0167 16.0166 11.7539 16.0166 11.4824V10.5497C16.0166 9.46637 15.4898 8.47455 14.6416 7.86127ZM13.583 1.49994C15.1507 1.49994 16.4217 2.74819 16.4219 4.28802C16.4219 5.82799 15.1508 7.07709 13.583 7.07709C13.1929 7.07704 12.8217 6.9982 12.4834 6.85834C13.3504 6.00388 13.8896 4.81727 13.8896 3.50385C13.8896 2.78991 13.7295 2.11315 13.4453 1.50677C13.491 1.50462 13.5368 1.49994 13.583 1.49994Z"
        fill={color}
      />
      <Path
        d="M3.67578 7.86127C2.86259 7.94394 2.05666 8.12073 1.27637 8.39447C0.601348 8.63139 0.150391 9.25968 0.150391 9.96381V10.7148C0.150391 11.6994 1.0389 12.4556 2.03125 12.3163L2.25879 12.2851C2.30459 12.2787 2.35065 12.2736 2.39648 12.2675C2.3346 12.0167 2.30078 11.7539 2.30078 11.4824V10.5497C2.30078 9.46637 2.82762 8.47455 3.67578 7.86127ZM4.73438 1.49994C3.16671 1.49994 1.89566 2.74819 1.89551 4.28802C1.89551 5.82799 3.16661 7.07709 4.73438 7.07709C5.12445 7.07704 5.49568 6.9982 5.83398 6.85834C4.967 6.00388 4.42783 4.81727 4.42773 3.50385C4.42773 2.78991 4.58789 2.11315 4.87207 1.50677C4.82639 1.50462 4.7806 1.49994 4.73438 1.49994Z"
        fill={color}
      />
      <Path
        opacity="0.3"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.9609 8.60115C7.68758 7.62733 10.6673 7.62733 13.394 8.60115C14.2173 8.89521 14.767 9.67514 14.767 10.5495V11.4824C14.767 12.7049 13.6842 13.644 12.474 13.4711L12.196 13.4314C10.1938 13.1454 8.16106 13.1454 6.15882 13.4314L5.88086 13.4711C4.67065 13.644 3.58789 12.7049 3.58789 11.4824V10.5495C3.58789 9.67514 4.13752 8.89521 4.9609 8.60115Z"
        fill={color}
      />
      <Path
        opacity="0.3"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.6393 3.50351C12.6393 1.59156 11.0894 0.041626 9.17746 0.041626C7.26551 0.041626 5.71558 1.59156 5.71558 3.50351C5.71558 5.41545 7.26551 6.96538 9.17746 6.96538C11.0894 6.96538 12.6393 5.41545 12.6393 3.50351Z"
        fill={color}
      />
    </Svg>
  );
};


const CustomIcon = () => (
  <Svg width={16} height={18} viewBox="0 0 16 18" fill="none">
    <Path
      opacity="0.3"
      d="M7.99976 0.458984C12.0205 0.459158 15.2908 3.68687 15.2908 7.68164C15.2906 10.1661 13.8419 12.6184 12.3064 14.4033C11.5294 15.3065 10.7047 16.069 9.97729 16.6113C9.61412 16.8821 9.26503 17.106 8.94995 17.2646C8.6547 17.4133 8.31733 17.5419 7.99976 17.542C7.68205 17.542 7.34396 17.4134 7.04858 17.2646C6.73355 17.106 6.38435 16.882 6.02124 16.6113C5.29381 16.069 4.46911 15.3065 3.69214 14.4033C2.15663 12.6184 0.707932 10.1661 0.707764 7.68164C0.707764 3.68676 3.97887 0.458984 7.99976 0.458984Z"
      fill="#00C0C9"
    />
    <Circle
      cx={2.5}
      cy={2.5}
      r={2.5}
      transform="matrix(-1 0 0 1 10.4995 4.8335)"
      fill="#00C0C9"
    />
  </Svg>
);

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

export const PopupEvent = ({view,event, handleClose}: {view: boolean, handleClose: () => void, event: any}) => {
  const handlePressReg = () => {

  }

  return (
    <>
      {event && <Modal
        isVisible={view}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropOpacity={0}
        coverScreen={false}
        style={[styles.modal]}
        swipeDirection="down"
        hasBackdrop={true}
      >
        <View
          style={[
            styles.modalContent,
          ]}
        > 
          <View style={styles.top}>
            <Image
              source={require('./image2.png')}
              resizeMode="cover"
              style={styles.image}
            />
            <Text style={styles.type} numberOfLines={1} ellipsizeMode="tail">{event.policy_area}</Text>
            <Image
              source={require('./logoLight.png')}
              resizeMode="cover"
              style={styles.imageLogo}
            />
            <Pressable
              style={styles.press}
              onPress={handleClose}
            >
              <View style={styles.hr} />
            </Pressable>
          </View>
          <View style={styles.wrapperContent}>
          <View style={styles.info}>
                  <Text style={styles.title}>{event.title}</Text>
                  <Text style={styles.date}>{event.date}</Text>
                  <View style={styles.location}>
                    <CustomIcon />
                    <Text style={styles.locationText}>{event.location}</Text>
                  </View>
                  <View style={styles.location}>
                    <PeopleIcon />
                    <Text style={styles.locationText}>{event.participants} Человек</Text>
                  </View>
                  <Text style={styles.textEvent} numberOfLines={1} ellipsizeMode="tail">{event.organizer}</Text>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.openButton} onPress={handlePressReg}>
                      <Text style={styles.openText}>Зарегистрироваться</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.registerButton} onPress={() => {}}>
                      <Text style={styles.registerText}>Маршрут</Text>
                    </TouchableOpacity>
                  </View>
                </View>
          </View>
        </View>
      </Modal>}
    </>
  );
};

const styles = StyleSheet.create({
  openButton: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#00C0C9',
    borderRadius: 20,
    textAlign: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  registerText: {
    fontSize: 14,
    color: '#00000',
    textAlign: "center",
  },
  registerButton: {
    flex: 1,
    maxWidth: 163,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#F1F1F1",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  type: {
    zIndex: 2,
    alignSelf: 'flex-end',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 13.5,
    paddingVertical: 7.5,
    borderRadius: 12,
    marginBottom: 8,
    color: '#000',
    position: "absolute",
    top: 40,
    right: 16,
    textAlign: 'center',
    fontSize: 10.473,
    fontWeight: '500',
    lineHeight: 15.71,
    maxWidth: 150,
    letterSpacing: -0.299,
    overflow: "hidden"
  },
  buttonContainer: {
    gap: 6,
    marginTop: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  openText: {
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: -0.4,
    color: '#FFFFFF',
    textAlign: "center"
  },
  date: {
    fontSize: 14,
    color: '#888',
  },
  locationText: {
    fontSize: 15,
    color: '#707579',
    lineHeight: 20,
    letterSpacing: -0.4,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 22,
    letterSpacing: -0.4,
  },
  info: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    gap: 6,
  },
  top: {
    height: 136,
  },
  image: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
  },
  imageLogo: {
    position: "absolute",
    top: 40,
    left: 23,
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
  modalContent: {
    overflow: "hidden",
    gap: 6,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 3,
    height: "50%",
    maxHeight: "50%",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -1 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 7, 
    elevation: 3,
  },
  textEvent: {
    overflow: 'hidden',
    color: '#707579',
    fontFamily: 'Mont',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
    letterSpacing: -0.4,
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
    backgroundColor: "#FFFFFF",
    alignSelf: "center",
  },
});
