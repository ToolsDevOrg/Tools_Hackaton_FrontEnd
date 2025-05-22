import { Menu1Screen } from "@/screens/Menu1Screen";
import { Menu2Screen } from "@/screens/Menu2Screen";
import { Test2 } from "@/screens/Test2";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const Menu2Stack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="menu2_main" component={Menu2Screen} />
      <Stack.Screen name="test2" component={Test2} />
    </Stack.Navigator>
  );
};