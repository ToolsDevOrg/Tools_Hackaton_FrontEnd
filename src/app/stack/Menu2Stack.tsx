import { CreatePass } from "@/screens/CreatePass";
import { CurrentPass } from "@/screens/CurrentPass";
import { Menu2Screen } from "@/screens/Menu2Screen";
import { QrCodeScreen } from "@/screens/QrCodeScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const Menu2Stack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="menu2_main" component={Menu2Screen} />
      <Stack.Screen name="qr_code" component={QrCodeScreen} />
      <Stack.Screen name="create_pass" component={CreatePass} />
      <Stack.Screen name="current_pass" component={CurrentPass} />
    </Stack.Navigator>
  );
};