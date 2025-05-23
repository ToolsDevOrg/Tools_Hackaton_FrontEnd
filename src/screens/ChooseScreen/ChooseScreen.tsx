import { ScreenWrapper } from "@/shared/ui";
import { Pressable, Text, View } from "react-native";
import { UjinLogo } from "../LoginScreen/icons";
import { useState } from "react";
import { useRoleStore } from "@/app/stores/ruleStore";
import { useTypeNavigation } from "@/shared/hooks/useTypeNavigation";

export const ChooseScreen = () => {
  const [selectedRole, setSelectedRole] = useState<"resident" | "employee">(
    "resident"
  );

  const navigate = useTypeNavigation();

  const setRole = useRoleStore((state) => state.setRole);

  const handleContinue = () => {
    setRole(selectedRole);
    navigate.navigate("start");
  };

  return (
    <ScreenWrapper>
      <View className="justify-center w-[100%] h-[100%]">
        <View className=" gap-[20px]">
          <UjinLogo width="144" height="51" />
          <Text className="font-[800] text-[20px]">Easy Pass</Text>
        </View>
        <View className=" absolute bottom-0 w-[100%]">
          <View className=" flex-row gap-[4px] pb-[8px]">
            <Pressable
              className={`border-[0.8px] ${
                selectedRole === "resident"
                  ? " border-transparent"
                  : "border-[#F2F2F5]"
              } rounded-[20px] py-[12px] px-[27.5px] ${
                selectedRole === "resident" ? "bg-[#00C0C9]" : "bg-[#ffffff]"
              }`}
              onPress={() => setSelectedRole("resident")}
            >
              <Text
                className={` font-[600] text-[15px] leading-[23px] ${
                  selectedRole === "resident" && "color-[#ffffff]"
                }`}
              >
                Житель
              </Text>
            </Pressable>
            <Pressable
              className={`border-[0.8px] ${
                selectedRole === "employee"
                  ? " border-transparent"
                  : "border-[#F2F2F5]"
              } rounded-[20px] py-[12px] px-[27.5px] ${
                selectedRole === "employee" ? "bg-[#00C0C9]" : "bg-[#ffffff]"
              } `}
              onPress={() => setSelectedRole("employee")}
            >
              <Text
                className={` font-[600] text-[15px] leading-[23px] ${
                  selectedRole === "employee" && "color-[#ffffff]"
                }`}
              >
                Сотрудник
              </Text>
            </Pressable>
          </View>
          <Text className=" pb-[23px] font-[600] text-[15px] leading-[23px] color-[#717171]">
            Выберите вашу роль
          </Text>
          <Pressable
            onPress={handleContinue}
            className="w-[100%] rounded-[30px] bg-[#7979791A] items-center justify-center py-[15px] active:bg-[#00C0C9] transition-[0.3s]"
          >
            <Text className="font-[600] text-[14px]">Далее</Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};
