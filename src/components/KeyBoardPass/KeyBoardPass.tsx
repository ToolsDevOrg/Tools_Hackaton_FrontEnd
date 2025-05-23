import { View, Text } from 'react-native';

type KeyBoardPassProps = {
  code: string | undefined; 
};

export const KeyBoardPass: React.FC<KeyBoardPassProps> = ({ code }) => {
  const digits = code.split('');

  return (
    <View className="flex-row w-full justify-between my-5 rounded-3xl">
      {digits.map((digit, index) => (
        <View
          key={index}
          className={[
            'w-[50] h-[55] mx-1 rounded-[20px]',
            'justify-center items-center',
            digit ? 'bg-[#00C0C9]' : 'border-[#00C0C9] border-2',
          ].join(' ')}>
          <Text className="text-2xl font-bold text-black">{digit}</Text>
        </View>
      ))}
    </View>
  );
};
