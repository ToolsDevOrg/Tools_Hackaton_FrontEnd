import { Text, View } from 'react-native';
import { QrItem } from '../QrItem/QrItem';
import { StructureItem } from '../StructureItem/StructureItem';

export const Cars: React.FC = () => {
  return (
    <View>

      <View className="flex-col gap-[15px]">
        <QrItem />
      </View>

      <Text className="font-[700] text-[20px] my-[15px] mt-[20px]">Заказать пропуск</Text>
      <View className='flex-col gap-[15px]'>
        <StructureItem />
        <StructureItem />
        <StructureItem />
        <StructureItem />
      </View>
    </View>
  );
};
