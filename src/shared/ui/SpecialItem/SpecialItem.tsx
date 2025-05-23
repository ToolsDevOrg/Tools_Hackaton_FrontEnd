import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
} from "react-native";
import { Logo } from "./icons";

interface SpecialItemProps {
  title?: string;
  subtitle?: string;
  btnText?: string;
  secBtnText?: string;
  src?: ImageSourcePropType;
}

export const SpecialItem = ({
  title,
  subtitle,
  btnText,
  secBtnText,
  src,
}: SpecialItemProps) => {
  return (
    <View className=" p-[16px] rounded-[20px] bg-[#F4F4F7] flex-row justify-between items-center max-w-[100%] overflow-hidden">
      <View className=" flex-col items-start">
        <Text className=" font-[700] text-[17px] leading-[22px] pb-[2px] max-w-[85%]">
          {title}
        </Text>
        <Text className=" font-[600] text-[15px] leading-[20px] color-[#717171] pb-[8px] max-w-[85%]">
          {subtitle}
        </Text>
        <View className="flex-row gap-[8px]">
          {secBtnText && (
            <Pressable className=" py-[10px] px-[18px] rounded-[30px] bg-[#FFFFFF]">
              <Text className=" font-[600] text-[14px] leading-[21px]">
                {secBtnText}
              </Text>
            </Pressable>
          )}
          <Pressable className=" py-[10px] px-[18px] rounded-[30px] bg-[#00C0C9]">
            <Text className=" color-[#ffffff] font-[600] text-[14px] leading-[21px]">
              {btnText}
            </Text>
          </Pressable>
        </View>
      </View>
      {src ? (
        <Image
          className=" h-[81px] w-[100px] absolute right-0 z-[-1]"
          source={src}
        />
      ) : (
        <View className=" absolute top-0 right-0 z-[-1]">
          <Logo />
        </View>
      )}
    </View>
  );
};
