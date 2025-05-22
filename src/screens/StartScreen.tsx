import { useTypeNavigation } from '@/shared/hooks/useTypeNavigation';
import { ScreenWrapper } from '@/shared/ui';
import { Pressable, Text } from 'react-native';

export const StartScreen: React.FC = () => {
  const navigation = useTypeNavigation();

  return (
    <ScreenWrapper center>
      <Text className="text-white text-3xl">StartScreen</Text>
      <Pressable onPress={() => navigation.reset({ index: 0, routes: [{ name: 'main' }] })}>
        <Text className='text-white'>На страницы приложения</Text>
      </Pressable>
    </ScreenWrapper>
  );
};
