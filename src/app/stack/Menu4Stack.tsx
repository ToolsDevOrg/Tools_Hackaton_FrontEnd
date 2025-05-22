import { ProfileScreen } from "@/screens/ProfileScreen/ProfileScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const Menu4Stack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="suggestions" component={ProfileScreen} />
    </Stack.Navigator>
  );
};
