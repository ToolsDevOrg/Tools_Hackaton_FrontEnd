import { View } from 'react-native';
import { QrItem } from '../QrItem/QrItem';

export const Events: React.FC = () => {
  return (
    <View className="flex-col gap-[15px]">
      <QrItem />
      <QrItem />
      <QrItem />
    </View>
  );
};
