import { Menu3Screen } from "@/screens/Menu3Screen";
import { SuggestionsScreen } from "@/screens/SuggestionsScreen/SuggestionsScreen";
import { Test3Screen } from "@/screens/Test3Screen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const Menu3Stack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="suggestions" component={SuggestionsScreen} />
      <Stack.Screen name="menu3_main" component={Menu3Screen} />
      <Stack.Screen name="test3" component={Test3Screen} />
    </Stack.Navigator>
  );
};