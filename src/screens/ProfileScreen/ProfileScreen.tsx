import { ScreenWrapper } from "@/shared/ui";
import { Image, Pressable, Text, View } from "react-native";
import { UjinLogo } from "../LoginScreen/icons";
import { InfoIcon, JK, Phone, Logo, Logo2 } from "./icons";
import { useState } from "react";
import { LogoutPopup } from "@/widgets/LogoutPopup/LogoutPopup";
import { useRoleStore } from "@/app/stores/ruleStore";
import { useUserStore } from "@/app/stores/userStore";

export const ProfileScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { role } = useRoleStore();
  const handleLogout = () => {};
  const {user} = useUserStore()
  
  return (
    <>
      <LogoutPopup
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onLogout={handleLogout}
      />
      <ScreenWrapper>
        <View className="flex-row items-center justify-between w-[100%] py-[8px] mb-[10px]">
          <View>
            <Text className=" font-[700] text-[24px] leading-[36px]">
              Профиль
            </Text>
            <Text className=" font-[600] text-[14px] leading-[24px] color-[#717171]">
              Ваши личные данные
            </Text>
          </View>
          <UjinLogo />
        </View>
        <View className="rounded-[20px] border-[#F2F2F5] border-[0.8px] bg-white w-[100%] p-[20px] gap-[12px] mb-[10px]">
          <View className="flex-row items-center justify-between">
            <View className="gap-[8px] max-w-[124px]">
              <Text className="font-[700] text-[20px] leading-[30px]">
                {user?.fio}
              </Text>
              <View className="flex-row items-center gap-[8px]">
                <JK />
                <Text className="font-[600] text-[14px] leading-[24px] color-[#717171]">
                  ЖК “Премьер”
                </Text>
              </View>
              <View className="flex-row items-center gap-[8px]">
                <Phone />
                <Text className="font-[600] text-[14px] leading-[24px] color-[#717171]">
                  {user?.phone}
                </Text>
              </View>
            </View>
            <Image
              className="w-[122px] h-[122px] rounded-[20px]"
              source={require("./img/leha.jpg")}
            />
          </View>
          <Pressable className="flex-row items-center w-[100%] justify-center rounded-[20px] bg-[#00C0C9] py-[10px] gap-[8px]">
            <Text className="font-[600] text-[14px] leading-[24px] color-[#ffffff]">
              Поддержка
            </Text>
            <InfoIcon />
          </Pressable>
        </View>
        {role === "resident" && (
          <View className="rounded-[20px] border-[#F2F2F5] border-[0.8px] bg-white p-[20px] overflow-hidden w-[100%] mb-[10px]">
            <Text className="font-700 text-[18px] leading-[26px]">Мой дом</Text>
            <Text className="font-600 text-[13px] leading-[21px] color-[#717171]">
              Информация о вашей квартире
            </Text>
            <View className="absolute top-0 right-0">
              <Logo2 />
            </View>
          </View>
        )}

        <View className="rounded-[20px] border-[#F2F2F5] border-[0.8px] bg-white p-[20px] overflow-hidden w-[100%] mb-[10px]">
          <Text className="font-700 text-[18px] leading-[26px]">Настройки</Text>
          <Text className="font-600 text-[13px] leading-[21px] color-[#717171]">
            Управление аккаунтом
          </Text>
          <View className="absolute top-0 right-0">
            <Logo2 />
          </View>
        </View>
        <View className="rounded-[20px] border-[#F2F2F5] border-[0.8px] bg-white p-[20px] overflow-hidden w-[100%] mb-[10px] items-start">
          <Text className="font-700 text-[18px] leading-[26px]">
            Нашли ошибку или улучшение?
          </Text>
          <Text className="font-600 text-[13px] leading-[21px] color-[#717171] pb-[8px]">
            Мы вознаграждаем лучшие предложения или найденные ошибки
          </Text>
          <Pressable className="bg-[#00C0C9] py-[10px] px-[18px] rounded-[20px]">
            <Text className="font-600 text-[13px] leading-[21px] color-[#ffffff]">
              Попробовать
            </Text>
          </Pressable>
          <View className="absolute bottom-0 right-0">
            <Logo />
          </View>
        </View>
        <Pressable
          onPress={() => setIsModalVisible(true)}
          className=" items-center w-[100%] justify-center rounded-[30px] bg-[#F1F1F1] py-[15px] gap-[8px]"
        >
          <Text className="font-[600] text-[16px]">Выйти</Text>
        </Pressable>
      </ScreenWrapper>
    </>
  );
};
