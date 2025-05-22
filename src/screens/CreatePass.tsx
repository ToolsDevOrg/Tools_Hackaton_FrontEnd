import { KeyBoard } from '@/components/KeyBoard/KeyBoard';
import { useTypeNavigation } from '@/shared/hooks/useTypeNavigation';
import { ScreenWrapper } from '@/shared/ui';
import { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const CreatePass: React.FC = () => {
  const navigation = useTypeNavigation();
  const [plate, setPlate] = useState<string[]>(['', '', '', '', '', '']);

  const isAllFilled = plate.every((char) => char.length > 0);

  return (
    <ScreenWrapper>
      <KeyboardAwareScrollView enableOnAndroid>
        <View className="flex-row mb-[15px] items-center justify-between w-full">
          <View className="flex-row items-center gap-[20px]">
            <Pressable className='w-[20px] h-[20px]' onPress={() => navigation.goBack()}>
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

        <Image
          style={{ width: '100%', height: 190 }}
          source={require('../../assets/imageStructure.png')}
        />

        <Text className="font-[700] text-[17px] leading-[22px] mt-[20px]">ЖК “Премьер”</Text>
        <Text className="font-[600] text-[15px] leading-[22px] text-[#707579]">
          Пермь, улица Николая Островского, 52
        </Text>
        <Text className="font-[600] text-[15px] leading-[22px] text-[#707579]">
          Время заезда: 08:00 - 22:00
        </Text>

        <View className="flex-col gap-[10px] mt-[20px] w-full">
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

        <KeyBoard plate={plate} setPlate={setPlate} />

        <Pressable
          className={`rounded-[20px] py-[15px] flex-row items-center justify-center mt-[20px] ${
            isAllFilled ? 'bg-[#00C0C9]' : 'bg-[#F0F0F0]'
          }`}
          disabled={!isAllFilled}>
          <Text className={`font-[600] text-[15px] ${isAllFilled ? 'text-white' : 'text-[#717171]'} `}>Создать пропуск</Text>
        </Pressable>
        
      </KeyboardAwareScrollView>
    </ScreenWrapper>
  );
};
