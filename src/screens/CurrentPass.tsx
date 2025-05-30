import { KeyBoardPass } from '@/components/KeyBoardPass/KeyBoardPass';
import { useCarStore } from '@/components/PassComponents/Cars/cars.store';
import { useTypeNavigation } from '@/shared/hooks/useTypeNavigation';
import { ScreenWrapper } from '@/shared/ui';
import { Image, Pressable, Text, View } from 'react-native';

export const CurrentPass: React.FC = () => {
  const navigation = useTypeNavigation();
  const { carData } = useCarStore();

  return (
    <ScreenWrapper>
      <View className="flex-row mb-[15px] items-center justify-between w-full">
        <View>
          <Text className="text-black font-[700] text-[24px] mb-[5px]">Ваш пропуск</Text>
          <Text className="text-[14px] font-[600] text-[#717171]">Автомобиль</Text>
        </View>
        <Image
          style={{ width: 75, height: 25 }}
          source={require('../../assets/Logo-Ujin-dark 1.png')}
        />
      </View>

      <View className="flex-col w-full justify-center items-center">
        <Image
          style={{ width: 300, height: 300 }}
          source={require('../../assets/Qr_code_big.png')}
        />
      </View>

      <View>
        <Text className="font-[700] text-[17px] mb-[5px]">{carData?.title}</Text>
        <Text className="font-[600] text-[15px] text-[#4C4C4C] mb-[5px]">
          {carData?.location}
        </Text>
        <Text className="font-[600] text-[15px] mb-[10px] text-[#707579]">
          Время заезда: {carData?.start_date}
        </Text>
      </View>

      <KeyBoardPass code={carData?.car_number} />

      <Pressable
        onPress={() => navigation.navigate('Pass', { screen: 'menu2_main' })}
        className="bg-[#00C1C9] w-full py-[15px] mt-[10px] flex-row justify-center items-center rounded-[20px]">
        <Text className="font-[600] text-[15px] text-white">Закрыть</Text>
      </Pressable>

      <Text className="text-[12px] mt-[13px] font-[600] text-[#717171]">
        Ваши пропуски находятся в разделе <Text className="text-[#00C1C9]">Пропуск</Text>
      </Text>
    </ScreenWrapper>
  );
};
