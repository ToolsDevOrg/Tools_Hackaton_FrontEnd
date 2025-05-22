import { Pressable, Text, View } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { getTabIcon } from "./getTabIcon";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  navigation,
  descriptors,
}) => {
  const pb = useSafeAreaInsets().bottom;

  return (
    <View
      style={{ paddingBottom: pb }}
      className="flex-row items-center justify-between bg-white px-[9px] pt-[8px]"
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isActive = state.index === index;

        return (
          <Pressable
            className="items-center gap-[5px] min-w-[78px] transition-[0.3s]"
            onPress={() => navigation.navigate(route.name)}
            key={route.name}
          >
            {getTabIcon(route.name, isActive)}
            <Text
              className={`${"transition-[0.3s] font-semibold leading-[14px] text-[10px]"}${
                isActive ? "text-ujin" : "text-tabbarGrey"
              }`}
            >
              {options.title}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};
