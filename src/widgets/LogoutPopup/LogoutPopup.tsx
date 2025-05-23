import React from "react";
import { View, Text, Pressable } from "react-native";
import Modal from "react-native-modal";
import { CloseIcon } from "./icons";

type Props = {
  visible: boolean;
  onCancel: () => void;
  onLogout: () => void;
};

export const LogoutPopup: React.FC<Props> = ({
  visible = false,
  onCancel,
  onLogout,
}) => {
  return (
    <Modal
      isVisible={visible}
      backdropOpacity={0.4}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      className="items-end w-[100%] absolute bottom-0"
      style={{ margin: 0 }}
    >
      <View className="bg-white rounded-t-[20px] p-[20px]">
        <View className="flex-row items-center justify-between pb-[10px]">
          <Text className="font-[600] text-[24px] leading-[36px]">Выйти</Text>
          <Pressable onPress={onCancel}>
            <CloseIcon />
          </Pressable>
        </View>

        <Text className="font-[600] text-[14px] leading-[22px] color-[#818C99] pb-[10px]">
          Вы выйдете из своей учетной записи, но сможете войти обратно в любое
          время
        </Text>

        <Pressable
          className="py-[18px] rounded-[20px] bg-[#00C0C9] items-center justify-center mb-[5px]"
          onPress={onCancel}
        >
          <Text className="font-[600] text-[16px] leading-[24px] color-[#ffffff]">
            Отмена
          </Text>
        </Pressable>

        <Pressable
          className="rounded-[20px] border-[0.8px] border-[#F2F2F5] py-[18px] items-center justify-center"
          onPress={onLogout}
        >
          <Text className="font-[600] text-[16px] leading-[24px]">Выйти</Text>
        </Pressable>
      </View>
    </Modal>
  );
};
