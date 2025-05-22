import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabBar } from "@/widgets/tab_bar/TabBar";
import { Menu1Stack } from "../stack/Menu1Stack";
import { Menu2Stack } from "../stack/Menu2Stack";
import { Menu3Stack } from "../stack/Menu3Stack";
import { Menu4Stack } from "../stack/Menu4Stack";

const Tab = createBottomTabNavigator();

export const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen
        name="Map"
        component={Menu1Stack}
        options={{ title: "Карта" }}
      />
      <Tab.Screen
        name="Pass"
        component={Menu2Stack}
        options={{ title: "Пропуск" }}
      />
      <Tab.Screen
        name="Suggestions"
        component={Menu3Stack}
        options={{ title: "Предложения" }}
      />
      <Tab.Screen
        name="Profile"
        component={Menu4Stack}
        options={{ title: "Профиль" }}
      />
    </Tab.Navigator>
  );
};
