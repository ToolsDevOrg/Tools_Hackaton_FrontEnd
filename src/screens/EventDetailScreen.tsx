import { useTypeNavigation } from '@/shared/hooks/useTypeNavigation';
import { ScreenWrapper } from '@/shared/ui';
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { useEventStore } from './MapScreen/popup.store';
import { CustomIcon, PeopleIcon } from '@/widgets/popupEvent/PopupEvent';
import { http } from '@/shared/api';
import { useState } from 'react';

function formatDateToISO(inputDate: any) {
  const parts = inputDate.trim().split(/\s+/);
  
  if (parts.length === 3) {
    const [dayPart, monthName, year] = parts;
    
    const day = dayPart.includes('-') ? dayPart.split('-')[1] : dayPart;
    
    const months = {
      'января': '01',
      'февраля': '02',
      'марта': '03',
      'апреля': '04',
      'мая': '05',
      'июня': '06',
      'июля': '07',
      'августа': '08',
      'сентября': '09',
      'октября': '10',
      'ноября': '11',
      'декабря': '12'
    };
    
    const month = months[monthName.toLowerCase()];
    
    const formattedDay = day.padStart(2, '0');
    
    return `${year}-${month}-${formattedDay}`;
  } else if (parts.length === 2 && parts[0].includes('-')) {
    const [dayRange, rest] = parts;
    const [startDay, endDay] = dayRange.split('-');
    const [month, year] = rest.split('.');
    
    return `${year}-${month.padStart(2, '0')}-${endDay.padStart(2, '0')}`;
  }
  
  throw new Error(`Неизвестный формат даты: ${inputDate}`);
}


export const EventDetailScreen: React.FC = () => {
  const navigation = useTypeNavigation();
  const { event } = useEventStore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  
  const handleSubmit = () => {
    if (!event) return;
    
    setIsLoading(true);
    setError(null);
    
    http.post('/api/passes/create', {
      "title": event.title,
      "start_date": formatDateToISO(event.date),
      "location": event.location,
      "policy_area": event.policy_area,
      "organizer": event.organizer,
      "latitude": event.latitude,
      "longitude": event.longitude,
      "participants": event.participants,
      "active_from": formatDateToISO(event.date),
      "car_number": null,
      "work_time_from": "04:11:12.224Z",
      "pass_type": "event"
    })
    .then((data) => {
      console.log(data);
      navigation.navigate('Pass', { screen: 'qr_code' });
    })
    .catch((error) => {
      console.log(error);
      setError(error);
      navigation.navigate('Pass', { screen: 'qr_code' });
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <ScreenWrapper>
      <View className="flex-row items-center gap-[20px] mb-[15px]">
        <Pressable className="w-[20px] h-[20px]" onPress={() => navigation.goBack()}>
          <Image style={{ width: 10, height: 16 }} source={require('../../assets/ArrowBack.png')} />
        </Pressable>
        <View>
          <Text className="text-black font-[700] text-[24px] mb-[5px]">Регистрация</Text>
          <Text className="text-[14px] font-[600] text-[#717171]">Оформление пропуска</Text>
        </View>
      </View>

      <View style={[styles.modalContent]}>
        <View style={styles.top}>
          <Image
            source={require('../widgets/popupEvent/image2.png')}
            resizeMode="cover"
            style={styles.image}
          />
          <Text style={styles.type} numberOfLines={1} ellipsizeMode="tail">
            {event?.policy_area}
          </Text>
          <Image
            source={require('../widgets/popupEvent/logoLight.png')}
            resizeMode="cover"
            style={styles.imageLogo}
          />
        </View>
        <View style={styles.wrapperContent}>
          <View style={styles.info}>
            <Text style={styles.title}>{event?.title}</Text>
            <Text style={styles.date}>{event?.date}</Text>
            <View style={styles.location}>
              <CustomIcon />
              <Text style={styles.locationText}>{event?.location}</Text>
            </View>
            <View style={styles.location}>
              <PeopleIcon />
              <Text style={styles.locationText}>{event?.participants} Человек</Text>
            </View>
            <Text style={styles.textEvent} numberOfLines={1} ellipsizeMode="tail">
              {event?.organizer}
            </Text>
          </View>
        </View>
      </View>

      <View className="flex-col gap-[10px] w-full">
        <View className="flex-row gap-[10px] items-center rounded-[20px] px-[16px] py-[14px] border border-[#F2F2F5] w-full">
          <Image
            style={{ width: 25, height: 25 }}
            source={require('../../assets/ProfileCreatePass.png')}
          />
          <Text className="font-[700] text-[15px]">Феоктистов Алексей Александрович</Text>
        </View>
        <View className="flex-row gap-[10px] items-center rounded-[20px] px-[16px] py-[14px] border border-[#F2F2F5] w-full">
          <Image
            style={{ width: 25, height: 25 }}
            source={require('../../assets/TelephoneCreatePass.png')}
          />
          <Text className="font-[700] text-[15px]">+7 922 365 54 06</Text>
        </View>
      </View>

      <View className="flex-row gap-[10px] mt-[10px] w-full">
        <View className="flex-1 items-start rounded-[20px] border border-[#F2F2F5] overflow-hidden">
          <View className="flex-row items-center justify-center gap-[10px] p-[16px]">
            <Image style={{ width: 25, height: 25 }} source={require('../../assets/Time.png')} />
            <Text className="font-[700] text-[15px]">18:00</Text>
          </View>
        </View>
        <View className="flex-1 items-start rounded-[20px] border border-[#F2F2F5] overflow-hidden">
          <View className="flex-row items-center justify-center gap-[10px] p-[16px]">
            <Image style={{ width: 25, height: 25 }} source={require('../../assets/Date.png')} />
            <Text className="font-[700] text-[15px]">22.05.2025</Text>
          </View>
        </View>
      </View>

      {error && (
        <Text className="text-red-500 text-center mt-2">{`${Object.keys(error).map((item) => {
          return error[item]
        })}`}</Text>
      )}

      <TouchableOpacity
        onPress={handleSubmit}
        disabled={isLoading}
        className={`rounded-[20px] w-full bg-[#00C0C9] py-[15px] flex-row items-center justify-center mt-[20px]
            ${isLoading ? 'opacity-70' : ''}`}>
        {isLoading ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text className="text-white">Создать пропуск</Text>
        )}
      </TouchableOpacity>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  openButton: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#00C0C9',
    borderRadius: 20,
    textAlign: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  registerText: {
    fontSize: 14,
    color: '#00000',
    textAlign: 'center',
  },
  registerButton: {
    flex: 1,
    maxWidth: 163,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1F1F1',
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
    position: 'absolute',
    top: 40,
    right: 16,
    textAlign: 'center',
    fontSize: 10.473,
    fontWeight: '500',
    lineHeight: 15.71,
    maxWidth: 150,
    letterSpacing: -0.299,
    overflow: 'hidden',
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
    textAlign: 'center',
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
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 22,
    letterSpacing: -0.4,
  },
  info: {
    paddingVertical: 20,
    gap: 6,
  },
  top: {
    height: 136,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  imageLogo: {
    position: 'absolute',
    top: 40,
    left: 23,
  },
  press: {
    width: '100%',
    paddingHorizontal: 5,
    paddingVertical: 20,
  },
  buttons: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 0.8,
    borderColor: '#F2F2F5',
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
    width: '100%',
    height: 'auto',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  modalContent: {
    overflow: 'hidden',
    width: '100%',
    gap: 6,
    backgroundColor: '#fff',
    zIndex: 3,
    height: '50%',
    maxHeight: '50%',
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
    height: 'auto',
    maxHeight: 'auto',
  },
  wrapperContent: {
    gap: 6,
  },
  hr: {
    height: 4,
    width: 36,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
  },
});
