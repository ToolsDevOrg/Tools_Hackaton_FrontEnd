import { Pressable, Text, View } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { getTabIcon } from './getTabIcon';

export const TabBar: React.FC<BottomTabBarProps> = ({ state, navigation, descriptors }) => {

  return (
    <View className="flex-row items-center justify-around py-[15px] bg-gray">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isActive = state.index === index;

        return (
          <Pressable
            style={{ gap: 5 }}
            className="items-center"
            onPress={() => navigation.navigate(route.name)}
            key={route.name}>
            {getTabIcon(route.name, isActive)}
            <Text className={`${isActive ? 'text-green' : 'text-white'}`}>{options.title}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};
