import { useTypeNavigation } from '@/shared/hooks/useTypeNavigation';
import { Image, Pressable, Text, View } from 'react-native';
import { useTabStore } from '../Tabs/tabs.store';

export const QrItem: React.FC = () => {
  const navigation = useTypeNavigation();
  const { activeTab } = useTabStore();

  const isScreen = activeTab === 'car' ? 'current_pass' : 'qr_code';

  return (
    <Pressable
      onPress={() => navigation.navigate(isScreen)}
      className="rounded-[20px] bg-[#F4F4F7] py-[20px] px-[15px] w-full">
      <View className="flex-row items-center justify-between gap-[10px]">
        <View className='max-w-[235px]'>
          <Text className="font-[700] text-[16px] mb-[5px]">ЖК “Премьер”</Text>
          <Text className="text-[#717171] font-[700] max-w-[235px] text-[14px] leading-[120%]">
            Пермь, улица Николая Островского, 52
          </Text>
          <Text className="text-[#717171] font-[700] text-[12px]">08:00 - 22:00</Text>
        </View>
        <Image
          style={{ width: 75, height: 75 }}
          source={require('../../../../assets/QR_Code.png')}
        />
      </View>
      <View className="flex-row items-center mt-[8px] rounded-[15px] justify-center px-[10px] py-[10px] bg-[#00C1C9] max-w-[120px]">
        <Text className="font-[600] text-[10px] text-white">Подтвержден</Text>
      </View>
    </Pressable>
  );
};
