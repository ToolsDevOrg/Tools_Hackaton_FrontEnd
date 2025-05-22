import { Menu1Screen } from "@/screens/Menu1Screen";
import { Test1 } from "@/screens/Test1";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const Menu1Stack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="menu1_main" component={Menu1Screen} />
      <Stack.Screen name="test1" component={Test1} />
    </Stack.Navigator>
  );
};