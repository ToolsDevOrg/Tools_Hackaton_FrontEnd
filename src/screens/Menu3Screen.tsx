import { useTypeNavigation } from '@/shared/hooks/useTypeNavigation';
import { ScreenWrapper } from '@/shared/ui';
import { Pressable, Text } from 'react-native';

export const Menu3Screen: React.FC = () => {
  const navigation = useTypeNavigation();

  return (
    <ScreenWrapper>
      <Pressable onPress={() => navigation.navigate('menu3', { screen: 'test3' })}>
        <Text className="text-white">Menu3</Text>
      </Pressable>
    </ScreenWrapper>
  );
};
