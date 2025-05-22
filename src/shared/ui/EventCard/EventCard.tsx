import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Svg, { G, Path, ClipPath, Rect, Defs, Circle } from 'react-native-svg';

const LogoIcon = () => (
  <Svg width={92} height={33} viewBox="0 0 92 33" fill="none">
    <Defs>
      <ClipPath id="clip0">
        <Rect width={92} height={32.5833} fill="white" />
      </ClipPath>
    </Defs>
    <G opacity={0.2} clipPath="url(#clip0)">
      <Path d="M56.2774 6.84058H51.9933V21.597H48.1792C45.6329 21.597 43.9011 19.8617 43.9011 17.3139V10.1358C43.9011 8.31603 42.4266 6.8407 40.6079 6.8407H39.6169V17.3139C39.6169 22.0455 43.4504 25.8813 48.1792 25.8813L56.2774 25.8811V6.84058Z" fill="#212121" />
      <Path d="M74.8433 25.8816H79.1276V11.1251L82.9418 11.1252C85.4878 11.1252 87.2198 12.8605 87.2198 15.4082V22.5864C87.2198 24.4062 88.6944 25.8815 90.5133 25.8815H91.5042V15.4082C91.5042 10.6766 87.6702 6.84094 82.9418 6.84094L74.8433 6.84107V25.8816Z" fill="#212121" />
      <Path d="M71.5324 4.71186C71.5324 4.14926 71.4213 3.59217 71.206 3.07239C70.9907 2.55262 70.675 2.08035 70.2777 1.68252C69.8796 1.2847 69.4075 0.969138 68.8874 0.753846C68.368 0.538546 67.8109 0.427734 67.248 0.427734V4.71186H71.5324Z" fill="#212121" />
      <Path d="M63.8992 28.0008C63.8992 28.5634 63.7886 29.1205 63.5733 29.6403C63.358 30.1601 63.0424 30.6323 62.6446 31.0302C62.2468 31.4279 61.7746 31.7435 61.2548 31.9588C60.735 32.1741 60.1779 32.2849 59.6153 32.2849L59.5823 6.82874H63.8664L63.8992 28.0008Z" fill="#212121" />
      <Path d="M67.2214 6.84058H71.5058V25.8811H67.2214V6.84058Z" fill="#212121" />
      <Path d="M0 4.93302C0 2.43498 2.02507 0.409912 4.52311 0.409912H31.9444V32.3544H4.52311C2.02507 32.3544 0 30.3293 0 27.8313V4.93302Z" fill="#00C0C9" />
      <Path d="M26.3847 4.74451H21.0297V22.6466L16.2621 22.6466C13.0794 22.6466 10.9146 20.4703 10.9146 17.275V8.87724C10.9146 6.59488 9.07164 4.74465 6.79822 4.74465H5.55957V17.275C5.55957 23.2091 10.3513 28.0196 16.2621 28.0196L26.3847 28.0195V4.74451Z" fill="white" />
    </G>
  </Svg>
);

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

interface IEventCard {
  variant: "resident" | "employee";
  typeText: string;
  title: string;
  location: string;
  date: string;
  img: string 
  onOpenPress?: () => void;
  onRegisterPress?: () => void;
}

export default function EventCard({
  variant,
  typeText,
  title,
  location,
  date,
  img,
  onOpenPress,
  onRegisterPress
}: IEventCard) {
  return (
    <View style={styles.card}>
      <View style={styles.top}>
        <Text style={styles.type} numberOfLines={1} ellipsizeMode="tail">{typeText}</Text>
          <Image
            source={require('./image.png')}
            style={styles.image}
            resizeMode="cover"
          />
      </View>

      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.location}>
          <CustomIcon />
          <Text style={styles.locationText}>{location}</Text>
        </View>
        <Text style={styles.date}>{date}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.openButton} onPress={onOpenPress}>
            <Text style={styles.openText}>Открыть</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerButton} onPress={onRegisterPress}>
            <Text style={styles.registerText}>Зарегистрироваться</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    width: "100%",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 32,
    },
    shadowOpacity: 0.04,
    shadowRadius: 64,
    overflow: "hidden",
    elevation: 6,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  info: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    gap: 6,
  },
  logoImg: {
    position: "absolute",
    top: 40,
    left: 23,
  },
  top: {
    height: 106,
    width: "100%",
    backgroundColor: "#F4F4F7",
    borderTopLeftRadius: 20,  
    borderTopRightRadius: 20,
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
    top: 16,
    right: 16,
    textAlign: 'center',
    fontSize: 10.473,
    fontWeight: '500',
    lineHeight: 15.71,
    maxWidth: 250,
    letterSpacing: -0.299,
    overflow: "hidden"
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 22,
    letterSpacing: -0.4,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  locationText: {
    fontSize: 15,
    color: '#707579',
    lineHeight: 20,
    letterSpacing: -0.4,
  },
  date: {
    fontSize: 14,
    color: '#888',
  },
  buttonContainer: {
    gap: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  openButton: {
    flex: 1,
    maxWidth: 131,
    backgroundColor: '#F1F1F1',
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  openText: {
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: -0.4,
    color: '#000000',
  },
  registerButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#00C0C9',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  registerText: {
    fontSize: 14,
    color: '#fff',
  },
});