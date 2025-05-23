import { useTypeNavigation } from '@/shared/hooks/useTypeNavigation';
import { ScreenWrapper } from '@/shared/ui';
import { Image, Pressable, Text, View } from 'react-native';

export const QrCodeScreen: React.FC = () => {
  const navigation = useTypeNavigation();

  return (
    <ScreenWrapper>
      <View className="flex-row mb-[15px] items-center justify-between w-full">
        <View>
          <Text className="text-black font-[700] text-[24px] mb-[5px]">Ваш пропуск</Text>
          <Text className="text-[14px] font-[600] text-[#717171]">
            Спортивная студенческая ночь
          </Text>
        </View>
        <Image
          style={{ width: 75, height: 25 }}
          source={require('../../assets/Logo-Ujin-dark 1.png')}
        />
      </View>

      <View className="flex-col w-full justify-center items-center">
        <View className="flex-row justify-center">
          <View className="bg-[#00C0C9] py-[8px] px-[13px] rounded-[15px]">
            <Text className="text-white text-[10px] font-[600]">Уличные</Text>
          </View>
        </View>

        <Image
          style={{ width: 300, height: 300 }}
          source={require('../../assets/Qr_code_big.png')}
        />
      </View>

      <View>
        <Text className="font-[700] text-[17px] mb-[5px]">Феоктистов Алексей Александрович</Text>
        <Text className="font-[600] text-[15px] text-[#4C4C4C] mb-[5px]">
          Физкультура, спорт и ЗОЖ
        </Text>
        <Text className="font-[600] text-[15px] mb-[10px] text-[#707579]">25 Января 2025</Text>
        <View className="flex-row gap-[5px] mb-[5px]">
          <Image style={{ width: 16, height: 18 }} source={require('../../assets/Location.png')} />
          <Text className="text-[#707579] font-[600] text-[14px]">Каток на эспланаде</Text>
        </View>
        <View className="flex-row gap-[5px] mb-[5px]">
          <Image style={{ width: 20, height: 15 }} source={require('../../assets/Users.png')} />
          <Text className="text-[#707579] font-[600] text-[14px]">600 Человек</Text>
        </View>
        <Text className="font-[600] text-[12px] text-[#707579]">25 Января 2025</Text>
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
