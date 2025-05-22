import { Pressable, Text, View } from 'react-native';
import { useTabStore } from './tabs.store';


export const Tabs: React.FC = () => {
  const { activeTab, setActiveTab } = useTabStore();

  return (
    <View className="mb-[15px] flex-row w-full justify-between items-center gap-[10px]">
      <Pressable
        className={`w-[50%] rounded-[20px] px-[15px] py-[12px] ${
          activeTab === 'car' ? 'bg-[#00C1C9]' : 'bg-[#fff] border border-[#F2F2F5]'
        }`}
        onPress={() => setActiveTab('car')}>
        <Text className={`text-center ${activeTab === 'car' ? 'text-white' : 'text-black'}`}>
          Автомобиль
        </Text>
      </Pressable>

      <Pressable
        className={`w-[50%] rounded-[20px] px-[15px] py-[12px] ${
          activeTab === 'event' ? 'bg-[#00C1C9]' : 'bg-[#fff] border border-[#F2F2F5]'
        }`}
        onPress={() => setActiveTab('event')}>
        <Text className={`text-center ${activeTab === 'event' ? 'text-white' : 'text-black'}`}>
          Мероприятия
        </Text>
      </Pressable>
    </View>
  );
};
