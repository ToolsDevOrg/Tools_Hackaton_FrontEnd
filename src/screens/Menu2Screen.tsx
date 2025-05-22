import { useTypeNavigation } from '@/shared/hooks/useTypeNavigation';
import { ScreenWrapper } from '@/shared/ui';
import { Pressable, Text } from 'react-native';

export const Menu2Screen: React.FC = () => {
  const navigation = useTypeNavigation();
  
  return (
    <ScreenWrapper>
      <Pressable onPress={() => navigation.navigate('test2')}>
        <Text className="text-white">Menu2</Text>
      </Pressable>
    </ScreenWrapper>
  );
};
