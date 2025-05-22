import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { getTabIcon } from "./getTabIcon";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Pressable, Text, View } from "react-native";

export const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  navigation,
  descriptors,
}) => {
  const pb = useSafeAreaInsets().bottom;
  return (
    <View
      className={`${"flex-row items-center justify-between bg-white px-[9px] pt-[8px]"} `}
      style={{paddingBottom: pb ? pb: 5}}
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
              className={`${"font-[600] text-[10px] leading-[14px]"} ${
                isActive ? "color-[#00C0C9]" : "color-[#959595]"
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
