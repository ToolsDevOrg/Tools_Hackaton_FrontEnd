import { useTypeNavigation } from '@/shared/hooks/useTypeNavigation';
import { ScreenWrapper, Typography } from '@/shared/ui';
import { Pressable } from 'react-native';

export const Menu1Screen: React.FC = () => {
  const navigation = useTypeNavigation();

  return (
    <ScreenWrapper>
      <Pressable onPress={() => navigation.navigate('test1')}>
        <Typography color='white' fontSize={20}>Menu1</Typography>
      </Pressable>
    </ScreenWrapper>
  );
};
