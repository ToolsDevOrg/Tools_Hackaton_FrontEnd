import { ScreenWrapper } from "@/shared/ui";
import { CustomInput } from "@/shared/ui/input/input";
import { LinesIcon, UjinLogo } from "@/widgets/tab_bar/icons";
import { Button, View, Text, TouchableOpacity } from "react-native";

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
            <CustomInput placeholder="Email" type="email" />
            <CustomInput placeholder="Пароль" />
            <TouchableOpacity>
              <Text className="font-[600] text-[14px] leading-[24px] color-[#717171] underline underline-offset-[3px]">Забыли пароль?</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View>
            <Text>Нет аккаунта?</Text>
            <TouchableOpacity>
              <Text>Зарегистрироваться</Text>
            </TouchableOpacity>
          </View>
          <Button title="Войти" onPress={() => {}} />
        </View>
      </View>
    </ScreenWrapper>
  );
};
