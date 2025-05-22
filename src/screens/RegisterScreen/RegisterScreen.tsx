import { ScreenWrapper } from "@/shared/ui";
import { CustomInput, InputProps } from "@/shared/ui/input/input";
import { View, Pressable, Text } from "react-native";
import {
  UjinLogo,
  LinesIcon,
  LoginIcon,
  PasswordIcon,
} from "../LoginScreen/icons";
import { InnIcon, PhoneIcon, ProfileIcon } from "./icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useState } from "react";

export const RegisterScreen = () => {
  const [formData, setFormData] = useState({
    fio: "",
    email: "",
    jkName: "",
    phone: "",
    password: "",
  });

  const handleInputChange = (name: keyof typeof formData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {};

  const inputs: InputProps[] = [
    {
      placeholder: "ФИО",
      children: <ProfileIcon />,
      value: formData.fio,
      onChange: (text) => handleInputChange("fio", text),
    },
    {
      placeholder: "Email",
      type: "email-address",
      children: <LoginIcon />,
      value: formData.email,
      onChange: (text) => handleInputChange("email", text),
    },
    {
      placeholder: "Название ЖК",
      children: <InnIcon />,
      value: formData.jkName,
      onChange: (text) => handleInputChange("jkName", text),
    },
    {
      placeholder: "Телефон",
      type: "phone-pad",
      children: <PhoneIcon />,
      value: formData.phone,
      onChange: (text) => handleInputChange("phone", text),
    },
    {
      placeholder: "Пароль",
      type: "password",
      children: <PasswordIcon />,
      value: formData.password,
      onChange: (text) => handleInputChange("password", text),
    },
  ];

  return (
    <ScreenWrapper className=" bg-white">
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        extraScrollHeight={10}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ width: "100%" }}
      >
        <View className="flex-col justify-between items-center h-[100%] w-[100%]">
          <View className=" w-[100%]">
            <View className=" items-center justify-between flex-row pb-[30px]">
              <UjinLogo />
              <Text className=" font-[800] text-[20px]">Easy Pass</Text>
            </View>

            <View className=" flex-col pb-[16px]">
              <Text className="font-[700] text-[24px] leading-[36px] relative">
                Регистрация <LinesIcon className="rotate-[-15deg]" />
              </Text>
              <Text className="font-[600] text-[14px] leading-[24px] color-[#717171]">
                Введите свои данные
              </Text>
            </View>

            <View className=" flex-col gap-[8px]">
              {inputs.map((item, index) => (
                <CustomInput
                  key={index}
                  placeholder={item.placeholder}
                  type={item.type}
                  children={item.children}
                  value={item.value}
                  onChange={item.onChange}
                />
              ))}
            </View>
          </View>

          <View className="flex-col w-[100%] gap-[16px]">
            <View className="flex-row items-start w-[100%]">
              <Text className="font-[600] text-[14px] leading-[24px] color-[#717171]">
                Есть аккаунт?
              </Text>

              <Text className="font-[600] text-[14px] leading-[24px] color-[#00C0C9] underline">
                Войти
              </Text>
            </View>
            <Pressable
              onPress={handleSubmit}
              className=" rounded-[30px] bg-[#7979791A] items-center justify-center py-[15px] active:bg-[#00C0C9] transition-[0.3s]"
            >
              <Text className="font-[600] text-[14px]">Зарегистрироваться</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenWrapper>
  );
};
