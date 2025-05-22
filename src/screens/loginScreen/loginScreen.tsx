import { ScreenWrapper } from "@/shared/ui";
import { CustomInput } from "@/shared/ui/CustomInput/CustomInput";
import { View, Text, Pressable } from "react-native";
import { UjinLogo, LinesIcon, LoginIcon, PasswordIcon } from "./icons";
import { useState } from "react";
import { useTypeNavigation } from "@/shared/hooks/useTypeNavigation";

export const LoginScreen = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useTypeNavigation();

  const handleInputChange = (name: keyof typeof formData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    navigate.navigate("main");
  };

  return (
    <ScreenWrapper className=" bg-white">
      <View className="flex-col justify-between items-center h-[100%] w-[100%]">
        <View className=" w-[100%]">
          <View className=" items-center justify-between flex-row pb-[30px]">
            <UjinLogo />
            <Text className=" font-[800] text-[20px]">Easy Pass</Text>
          </View>

          <View className=" flex-col pb-[16px]">
            <Text className="font-[700] text-[24px] leading-[36px] relative">
              Логин <LinesIcon className="rotate-[-15deg]" />
            </Text>
            <Text className="font-[600] text-[14px] leading-[24px] color-[#717171]">
              Введите свои данные
            </Text>
          </View>

          <View className=" flex-col gap-[8px]">
            <CustomInput
              placeholder="Email"
              type="email-address"
              value={formData.email}
              onChange={(text) => handleInputChange("email", text)}
              children={<LoginIcon />}
            />
            <CustomInput
              placeholder="Пароль"
              type="password"
              value={formData.password}
              onChange={(text) => handleInputChange("password", text)}
              children={<PasswordIcon />}
            />

            <Text className="font-[600] text-[14px] leading-[24px] color-[#717171] underline ">
              Забыли пароль?
            </Text>
          </View>
        </View>

        <View className="flex-col w-[100%] gap-[16px]">
          <View className="flex-row items-start w-[100%]">
            <Text className="font-[600] text-[14px] leading-[24px] color-[#717171]">
              Нет аккаунта?
            </Text>

            <Text className="font-[600] text-[14px] leading-[24px] color-[#00C0C9] underline">
              Зарегистрироваться
            </Text>
          </View>
          <Pressable
            onPress={handleSubmit}
            className=" rounded-[30px] bg-[#7979791A] items-center justify-center py-[15px] active:bg-[#00C0C9] transition-[0.3s]"
          >
            <Text className="font-[600] text-[14px]">Войти</Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};
