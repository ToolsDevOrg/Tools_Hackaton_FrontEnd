import { useUserStore } from '@/app/stores/userStore';
import { KeyBoard } from '@/components/KeyBoard/KeyBoard';
import { useCarStore } from '@/components/PassComponents/Cars/cars.store';
import { http } from '@/shared/api';
import { useTypeNavigation } from '@/shared/hooks/useTypeNavigation';
import { ScreenWrapper } from '@/shared/ui';
import { useState } from 'react';
import { ActivityIndicator, Image, Pressable, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useEventStore } from './MapScreen/popup.store';

// {"active_from": "2025-05-23", "car_number": "FGHYTT", "latitude": 0, "location": "Зал правительства ПК", "longitude": 0, "organizer": 0, "participants": 0, "pass_type": "car", "policy_area": "Уличная", "start_date": "2025-05-23", "title": "Открытие молодежного штаба", "work_time_from": "04:12:51.777Z"}

export const CreatePass: React.FC = () => {
  const navigation = useTypeNavigation();
  const [plate, setPlate] = useState<string[]>(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const { carData, setCarData } = useCarStore();
  const { user } = useUserStore();
  const { event } = useEventStore();

  const isAllFilled = plate.every((char) => char.length > 0);

  if (!carData) {
    return (
      <ScreenWrapper>
        <Text>Данные автомобиля не загружены</Text>
      </ScreenWrapper>
    );
  }

  const createPassCar = async () => {
    navigation.navigate('current_pass');
    if (!isAllFilled || isLoading) return;

    setIsLoading(true);

    setCarData({
      title: carData.title,
      start_date: '2025-05-23',
      location: carData.location,
      image: carData.image,
      car_number: plate.join(''),
    });

    try {
      const payload = {
        title: carData.title,
        start_date: '2025-05-23',
        location: carData.location,
        policy_area: event?.policy_area || 'Уличная',
        organizer: event?.organizer || 'Иван Иваныч',
        latitude: event?.latitude || 0,
        longitude: event?.longitude || 0,
        participants: event?.participants || 0,
        active_from: '2025-05-23',
        work_time_from: '04:12:51.777Z',
        car_number: plate.join(''),
        pass_type: 'car',
      };

      console.log(payload);

      await http.post('/api/passes/create', payload);
    } finally {
      setTimeout(() => {
        navigation.navigate('current_pass');
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <ScreenWrapper>
      <KeyboardAwareScrollView enableOnAndroid>
        {/* Заголовок и кнопка назад */}
        <View className="flex-row mb-[15px] items-center justify-between w-full">
          <View className="flex-row items-center gap-[20px]">
            <Pressable className="w-[20px] h-[20px]" onPress={() => navigation.goBack()}>
              <Image
                style={{ width: 10, height: 16 }}
                source={require('../../assets/ArrowBack.png')}
              />
            </Pressable>
            <View>
              <Text className="text-black font-[700] text-[24px] mb-[5px]">Автомобиль</Text>
              <Text className="text-[14px] font-[600] text-[#717171]">Оформление пропуска</Text>
            </View>
          </View>
          <Image
            style={{ width: 75, height: 25 }}
            source={require('../../assets/Logo-Ujin-dark 1.png')}
          />
        </View>

        {/* Изображение автомобиля */}
        <Image style={{ width: '100%', height: 190 }} source={carData.image} />

        {/* Информация о пропуске */}
        <Text className="font-[700] text-[17px] leading-[22px] mt-[20px]">{carData.title}</Text>
        <Text className="font-[600] text-[15px] leading-[22px] text-[#707579]">
          {carData.location}
        </Text>
        <Text className="font-[600] text-[15px] leading-[22px] text-[#707579]">
          Время заезда: {carData.start_date}
        </Text>

        {/* Данные пользователя */}
        <View className="flex-col gap-[10px] mt-[20px] w-full">
          <View className="flex-row gap-[10px] items-center rounded-[20px] px-[16px] py-[14px] border border-[#F2F2F5] w-full">
            <Image
              style={{ width: 25, height: 25 }}
              source={require('../../assets/ProfileCreatePass.png')}
            />
            <Text className="font-[700] text-[15px]">{user?.fio}</Text>
          </View>
          <View className="flex-row gap-[10px] items-center rounded-[20px] px-[16px] py-[14px] border border-[#F2F2F5] w-full">
            <Image
              style={{ width: 25, height: 25 }}
              source={require('../../assets/TelephoneCreatePass.png')}
            />
            <Text className="font-[700] text-[15px]">{user?.phone}</Text>
          </View>
        </View>

        {/* Клавиатура для ввода номера */}
        <KeyBoard plate={plate} setPlate={setPlate} />

        {/* Кнопка создания пропуска */}
        <Pressable
          onPress={createPassCar}
          className={`rounded-[20px] py-[15px] flex-row items-center justify-center mt-[20px] ${
            isAllFilled ? 'bg-[#00C0C9]' : 'bg-[#F0F0F0]'
          }`}
          disabled={!isAllFilled || isLoading}>
          {isLoading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text
              className={`font-[600] text-[15px] ${isAllFilled ? 'text-white' : 'text-[#717171]'}`}>
              Создать пропуск
            </Text>
          )}
        </Pressable>
      </KeyboardAwareScrollView>
    </ScreenWrapper>
  );
};
