import { useTypeNavigation } from '@/shared/hooks/useTypeNavigation';
import { ScreenWrapper } from '@/shared/ui';
import { Pressable, Text } from 'react-native';

export const Menu1Screen: React.FC = () => {
  const navigation = useTypeNavigation();

  return (
    <ScreenWrapper>
      <Pressable onPress={() => navigation.navigate('test1')}>
        <Text className="text-white">Menu1</Text>
      </Pressable>
    </ScreenWrapper>
  );
};
