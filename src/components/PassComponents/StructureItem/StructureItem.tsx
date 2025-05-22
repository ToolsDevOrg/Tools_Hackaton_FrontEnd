import { useTypeNavigation } from '@/shared/hooks/useTypeNavigation';
import { Image, Pressable, Text, View } from 'react-native';

export const StructureItem: React.FC = () => {
  const navigation = useTypeNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('create_pass')} className="rounded-[20px] border border-[#F2F2F5]">
      <Image
        className="rounded-t-[20px]"
        style={{ width: '100%', height: 125 }}
        source={require('../../../../assets/imageStructure.png')}
      />
      <View className="p-[20px] pt-[15px]">
        <Text className="font-[700] text-[17px] mb-[5px]">ЖК “Премьер”</Text>
        <Text className="font-[600] text-[15px] text-[#707579]">
          Пермь, улица Николая Островского, 52
        </Text>
        <Text className="font-[600] text-[15px] text-[#707579]">08:00 - 22:00</Text>
      </View>
    </Pressable>
  );
};
