import { useState } from "react";
import { View, Text } from "react-native";

export const KeyBoardPass: React.FC = () => {
  const [randomNumbers] = useState<string[]>(['0', '1', '2', '3', '4', '5']);

  return (
    <View className="flex-row w-full justify-between my-5 rounded-3xl">
      {randomNumbers.map((number, index) => (
        <View
          key={index}
          className={[
            'w-[50] h-[55] border mx-1 rounded-[20px]',
            'justify-center items-center',
            'border-[#00C0C9] border-2' // Все View будут с синей рамкой
          ].join(' ')}
        >
          <Text className="text-2xl font-bold">{number}</Text>
        </View>
      ))}
    </View>
  );
};