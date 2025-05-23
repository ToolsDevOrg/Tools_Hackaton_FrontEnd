import { useTypeNavigation } from '@/shared/hooks/useTypeNavigation';
import { Image, Pressable, Text, View } from 'react-native';
import { CartType } from '../Cars/cars.data';
import { useCarStore } from '../Cars/cars.store';

export const StructureItem: React.FC<CartType> = ({ image, title, start_date, location }) => {
  const navigation = useTypeNavigation();
  const { setCarData } = useCarStore();

  const onClick = () => {
    navigation.navigate('create_pass');
    setCarData({ image, title, start_date, location });
  };

  return (
    <Pressable onPress={onClick} className="rounded-[20px] border border-[#F2F2F5]">
      <Image className="rounded-t-[20px]" style={{ width: '100%', height: 125 }} source={image} />
      <View className="p-[20px] pt-[15px]">
        <Text className="font-[700] text-[17px] mb-[5px]">{title}</Text>
        <Text className="font-[600] text-[15px] text-[#707579]">{location}</Text>
        <Text className="font-[600] text-[15px] text-[#707579]">{start_date}</Text>
      </View>
    </Pressable>
  );
};
