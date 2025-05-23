import { EventDetailScreen } from "@/screens/EventDetailScreen";
import { MapScreen } from "@/screens/MapScreen/MapScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const Menu1Stack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="menu1_main" component={MapScreen} />
      <Stack.Screen name="event_detail" component={EventDetailScreen} />
    </Stack.Navigator>
  );
};