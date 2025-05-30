import { useRoleStore } from '@/app/stores/ruleStore';
import { Cars } from '@/components/PassComponents/Cars/Cars';
import { Events } from '@/components/PassComponents/Events/Events';
import { Tabs } from '@/components/PassComponents/Tabs/Tabs';
import { useTabStore } from '@/components/PassComponents/Tabs/tabs.store';
import { ScreenWrapper } from '@/shared/ui';
import { Image, Text, View } from 'react-native';

export const Menu2Screen: React.FC = () => {
  const { activeTab } = useTabStore();
  const {role} = useRoleStore()

  return (
    <ScreenWrapper>
      <View className="flex-row mb-[15px] items-center justify-between w-full">
        <View>
          <Text className="text-black font-[700] text-[24px] mb-[5px]">Пропуск</Text>
          <Text className="text-[14px] font-[600] text-[#717171]">Закажите доступ</Text>
        </View>
        <Image
          style={{ width: 75, height: 25 }}
          source={require('../../assets/Logo-Ujin-dark 1.png')}
        />
      </View>

      {role === 'resident' && <Tabs  />}

      
      <Text className='font-[700] text-[20px] mb-[15px]'>Ваши пропуска</Text>

      {role === 'resident' && activeTab === 'car' ? <Cars /> : <Events />}

      


    </ScreenWrapper>
  );
};
