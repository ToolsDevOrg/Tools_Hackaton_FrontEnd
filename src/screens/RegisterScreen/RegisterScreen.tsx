import { ScreenWrapper } from '@/shared/ui';
import { CustomInput, InputProps } from '@/shared/ui/CustomInput/CustomInput';
import { View, Pressable, Text } from 'react-native';
import { InnIcon, PhoneIcon, ProfileIcon } from './icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useEffect, useState } from 'react';
import { useTypeNavigation } from '@/shared/hooks/useTypeNavigation';
import { LinesIcon, LoginIcon, PasswordIcon, UjinLogo } from '../LoginScreen/icons';
import { useRegisterUser } from '@/app/services/regUser';
import { useRoleStore } from '@/app/stores/ruleStore';
import { useUserStore } from '@/app/stores/userStore';

export const RegisterScreen = () => {
  const [formData, setFormData] = useState({
    fio: '',
    email: '',
    jkName: 'Москва, ул. Капитана Хакатонова, 2',
    phone: '',
    password: '',
  });
  const role = useRoleStore()
  const { data, isSuccess, isLoading, error, refetch } = useRegisterUser({...formData, role: role.role === "resident" ? "citizen": "employee"});
  
  const handleInputChange = (name: keyof typeof formData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const navigate = useTypeNavigation();
  
  useEffect(() => {
    if (isSuccess){
      navigate.reset({
        index: 0,
        routes: [{ name: 'main' }],
      });
    }
  }, [isSuccess])

  const handleSubmit = async() => {
    await refetch()
  };

  const handleLogin = () => {
    navigate.reset({
      index: 0,
      routes: [{ name: 'login' }],
    });
  };

  const inputs: InputProps[] = [
    {
      placeholder: 'ФИО',
      children: <ProfileIcon />,
      value: formData.fio,
      onChange: (text) => handleInputChange('fio', text),
    },
    {
      placeholder: 'Email',
      type: 'email-address',
      children: <LoginIcon />,
      value: formData.email,
      onChange: (text) => handleInputChange('email', text),
    },
    {
      placeholder: 'Название ЖК',
      children: <InnIcon />,
      editable: false,
      value: formData.jkName,
      onChange: (text) => handleInputChange('jkName', text),
    },
    {
      placeholder: 'Телефон',
      type: 'phone-pad',
      children: <PhoneIcon />,
      value: formData.phone,
      onChange: (text) => handleInputChange('phone', text),
    },
    {
      placeholder: 'Пароль',
      type: 'password',
      children: <PasswordIcon />,
      value: formData.password,
      onChange: (text) => handleInputChange('password', text),
    },
  ];

  return (
    <ScreenWrapper className=" bg-white">
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        extraScrollHeight={10}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ width: '100%' }}>
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
            <Text>{`${data} ${error}`}</Text>
            {isLoading && <Text>{`Loading`}</Text>}
            <View className=" flex-col gap-[8px]">
              {inputs.map((item, index) => (
                <CustomInput
                  key={index}
                  placeholder={item.placeholder}
                  type={item.type}
                  children={item.children}
                  value={item.value}
                  onChange={item.onChange}
                  editable={item.editable}
                />
              ))}
            </View>
          </View>

          <View className="flex-col w-[100%] gap-[16px]">
            <View className="flex-row items-start w-[100%]">
              <Text className="font-[600] text-[14px] leading-[24px] color-[#717171]">
                Есть аккаунт?
              </Text>

              <Text
                onPress={handleLogin}
                className="font-[600] text-[14px] leading-[24px] color-[#00C0C9] underline">
                Войти
              </Text>
            </View>
            <Pressable
              onPress={handleSubmit}
              className=" rounded-[30px] bg-[#7979791A] items-center justify-center py-[15px] active:bg-[#00C0C9] transition-[0.3s]">
              <Text className="font-[600] text-[14px]">Зарегистрироваться</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenWrapper>
  );
};
