import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBar } from '@/widgets/tab_bar/TabBar';
import { Menu1Stack } from '../stack/Menu1Stack';
import { Menu2Stack } from '../stack/Menu2Stack';
import { Menu3Stack } from '../stack/Menu3Stack';

const Tab = createBottomTabNavigator();

export const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name="menu1" component={Menu1Stack} options={{ title: 'Меню 1' }} />
      <Tab.Screen name="menu2" component={Menu2Stack} options={{ title: 'Mеню 2' }} />
      <Tab.Screen name="menu3" component={Menu3Stack} options={{ title: 'Mеню 3' }} />
    </Tab.Navigator>
  );
};
