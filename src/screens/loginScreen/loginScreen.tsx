import { ScreenWrapper } from "@/shared/ui";
import { CustomInput } from "@/shared/ui/CustomInput/CustomInput";
import { View, Text, Pressable } from "react-native";
import { UjinLogo, LinesIcon, LoginIcon, PasswordIcon } from "./icons";
import { useEffect, useState } from "react";
import { useTypeNavigation } from "@/shared/hooks/useTypeNavigation";
import { useLoginUser } from "@/app/services/loginUser";
import { http } from '@/shared/api';
import { useUserStore } from '@/app/stores/userStore';

export const LoginScreen = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { setUser } = useUserStore();
  const navigate = useTypeNavigation();
  const handleInputChange = (name: keyof typeof formData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const login = async () => {
    setIsLoading(true);
    setError('');
    try {
      const response = await http.post('/api/users/login', formData);
      setUser(response.data);
      navigate.reset({
        index: 0,
        routes: [{ name: 'main' }],
      });
    } catch (error) {
      console.error('Login error:', error);
      setError('Неверный email или пароль');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = () => {
    if (!formData.email || !formData.password) {
      setError('Пожалуйста, заполните все поля');
      return;
    }
    login();
  };

  const handleRegister = () => {
    navigate.reset({
      index: 0,
      routes: [{ name: 'register' }],
    });
  };

  return (
    <ScreenWrapper className="bg-white">
      <View className="flex-col justify-between items-center h-[100%] w-[100%]">
        <View className="w-[100%]">
          <View className="items-center justify-between flex-row pb-[30px]">
            <UjinLogo />
            <Text className="font-[800] text-[20px]">Easy Pass</Text>
          </View>

          <View className="flex-col pb-[16px]">
            <Text className="font-[700] text-[24px] leading-[36px] relative">
              Логин <LinesIcon className="rotate-[-15deg]" />
            </Text>
            <Text className="font-[600] text-[14px] leading-[24px] color-[#717171]">
              Введите свои данные
            </Text>
          </View>

          <View className="flex-col gap-[8px]">
            <CustomInput
              placeholder="Email"
              type="email-address"
              value={formData.email}
              onChange={(text) => handleInputChange('email', text)}
              children={<LoginIcon />}
            />
            <CustomInput
              placeholder="Пароль"
              type="password"
              value={formData.password}
              onChange={(text) => handleInputChange('password', text)}
              children={<PasswordIcon />}
            />

            {error ? (
              <Text className="text-red-500 text-sm">{error}</Text>
            ) : (
              <Text className="font-[600] text-[14px] leading-[24px] color-[#717171] underline">
                Забыли пароль?
              </Text>
            )}
          </View>
        </View>

        <View className="flex-col w-[100%] gap-[16px]">
          <View className="flex-row items-start w-[100%]">
            <Text className="font-[600] text-[14px] leading-[24px] color-[#717171]">
              Нет аккаунта?
            </Text>
            <Text
              onPress={handleRegister}
              className="font-[600] text-[14px] leading-[24px] color-[#00C0C9] underline">
              Зарегистрироваться
            </Text>
          </View>
          <Pressable
            onPress={handleSubmit}
            disabled={isLoading}
            className={`rounded-[30px] items-center justify-center py-[15px] ${
              isLoading ? 'bg-gray-300' : 'bg-[#7979791A] active:bg-[#00C0C9]'
            }`}>
            <Text className="font-[600] text-[14px]">{isLoading ? 'Вход...' : 'Войти'}</Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};
