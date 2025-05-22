import { useRef } from 'react';
import { Text, TextInput, View } from 'react-native';

type KeyBoardProps = {
  plate: string[];
  setPlate: (plate: string[]) => void;
}

export const KeyBoard: React.FC<KeyBoardProps> = ({  plate, setPlate}) => {
  const inputs = useRef<Array<TextInput | null>>(Array(6).fill(null));

  const handleInputChange = (text: string, index: number) => {
    const newText = text.slice(0, 1).toUpperCase();
    const newPlate = [...plate];
    newPlate[index] = newText;
    setPlate(newPlate);

    if (newText && index < 5) {
      const nextInput = inputs.current[index + 1];
      nextInput?.focus();
    }

    if (!newText && index > 0) {
      const prevInput = inputs.current[index - 1];
      prevInput?.focus();
    }
  };

  return (
    <>
      <View className="flex-row justify-between my-5 rounded-3xl">
        {plate.map((char, index) => (
          <TextInput
            className={[
              'w-[50] h-[55] border mx-1 rounded-[20px] text-2xl font-bold text-center',
              char ? 'border-[#00C0C9] border-2' : 'border-[#DFDFDF] border',
            ].join(' ')}
            key={index}
            ref={(ref) => {
              inputs.current[index] = ref;
            }}
            onChangeText={(text) => handleInputChange(text, index)}
            value={char}
            maxLength={1}
            autoCapitalize="characters"
            keyboardType="default"
            textAlign="center"
            selectTextOnFocus
          />
        ))}
      </View>
      <Text className='text-[#717171] text-[12px] font-[600]'>Введите государственный номер вашего автомобиля</Text>
    </>
  );
};
