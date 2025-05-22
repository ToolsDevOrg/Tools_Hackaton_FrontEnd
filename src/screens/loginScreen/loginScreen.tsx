import { ScreenWrapper } from "@/shared/ui";
import { CustomInput } from "@/shared/ui/input/input";
import { View, Text, Pressable } from "react-native";
import { UjinLogo, LinesIcon, LoginIcon, PasswordIcon } from "./icons";

export const LoginScreen = () => {
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
              type="email"
              children={<LoginIcon />}
            />
            <CustomInput placeholder="Пароль" children={<PasswordIcon />} />

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
          <Pressable className="border-[1.24px] border-[#C9C9C9] rounded-[30px] bg-[#7979791A] items-center justify-center py-[15px]">
            <Text className="font-[600] text-[14px]">Войти</Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};
