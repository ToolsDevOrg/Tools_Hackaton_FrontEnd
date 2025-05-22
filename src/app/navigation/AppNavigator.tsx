import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TabNavigator } from './TabNavigator';
import { StartScreen } from '@/screens/StartScreen';

export const AppNavigator: React.FC = () => {
  const Stack = createStackNavigator();

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff',
    },
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // анимация перехода по страницам
            gestureEnabled: true, // Включаем жесты
            gestureDirection: 'horizontal', // Направление жестов
          }}>
          <Stack.Screen name="start" component={StartScreen} />
          <Stack.Screen name="main" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
