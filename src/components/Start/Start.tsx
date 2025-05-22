import { Image, Pressable, Text, View } from 'react-native';
import { ArrowSVGStart } from './ArrowStartIcon';
import { useTypeNavigation } from '@/shared/hooks/useTypeNavigation';
import { useRoleStore } from '@/app/stores/ruleStore';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Start: React.FC = () => {
  const navigation = useTypeNavigation();
  const { bottom } = useSafeAreaInsets();

  const { role } = useRoleStore();

  const roleName = role === 'employee' ? 'Сотрудник' : 'Житель';

  return (
    <>
      <Pressable
        onPress={() => navigation.goBack()}
        className="absolute top-[40px] left-[15px] w-[20px] h-[20px]">
        <Image
          style={{ width: 10, height: 16 }}
          source={require('../../../assets/ArrowBack.png')}
        />
      </Pressable>
      <View className="relative flex-col justify-center items-center">
        <View className="absolute -top-[150px] bg-[#00C1C9] rounded-[20px] py-[12px] px-[40px]">
          <Text className="text-[15px] font-[600] text-white">{roleName}</Text>
        </View>

        <View className="flex-row items-center gap-[20px] mb-[20px]">
          <Image
            style={{ width: 65, height: 25 }}
            source={require('../../../assets/Logo-Ujin-dark 1.png')}
            resizeMode="contain"
          />
          <Image
            style={{ width: 100, height: 15 }}
            source={require('../../../assets/Easy-Pass.png')}
            resizeMode="contain"
          />
        </View>
        <Text className="font-[700] text-[24px]">Добро пожаловать!</Text>
        <Text className="mt-[8px] text-[#717171]">Войдите в систему</Text>
        <View className="flex-row mt-[20px] bg-[#F2F2F2] rounded-[30px] justify-between p-[6px]">
          <Pressable
            onPress={() => navigation.reset({ index: 0, routes: [{ name: 'login' }] })}
            className="w-[130px] h-[40px] rounded-[40px] flex-row justify-center items-center bg-[#fff] gap-[5px]">
            <Text>Войти</Text>
            <ArrowSVGStart />
          </Pressable>
          <Pressable
            onPress={() => navigation.reset({ index: 0, routes: [{ name: 'register' }] })}
            className="w-[130px] h-[40px] flex-row justify-center items-center">
            <Text>Регистрация</Text>
          </Pressable>
        </View>

        <Image
          className="-left-[30px] -bottom-[25px] absolute"
          style={{ width: 40, height: 40 }}
          source={require('../../../assets/ImageStart.png')}
          resizeMode="contain"
        />
      </View>
      <Text
        style={{ paddingBottom: bottom + 10 }}
        className="absolute bottom-0 text-[14px] text-[#656972] text-center">
        Нажимая “Регистрация” вы принимате условия <Text className='font-[600] underline'>Пользовательского соглашения</Text> и{' '}
        <Text className='font-[600] underline'>Политики кофиденциальности,</Text> а также разрешаете обработку своих данных
      </Text>
    </>
  );
};
