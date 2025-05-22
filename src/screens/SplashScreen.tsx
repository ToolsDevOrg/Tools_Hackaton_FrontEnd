import * as SplashScreen from 'expo-splash-screen';
import { Image } from 'react-native';
import { ScreenWrapper } from '@/shared/ui';

// Предотвращаем автоматическое скрытие Splash Screen
SplashScreen.preventAutoHideAsync();

export default function CustomSplashScreen() {
  return (
    <ScreenWrapper center>
      <Image
        source={require('../../assets/splash.png')}
      />
    </ScreenWrapper>
  );
}