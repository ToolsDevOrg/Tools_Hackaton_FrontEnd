import { Image, ImageSourcePropType, Text, View } from "react-native";

interface SaleItemProps {
  src?: ImageSourcePropType;
  title?: string;
  place?: string;
  subtitle?: string;
}

export const SaleItem = ({ src, title, place, subtitle }: SaleItemProps) => {
  return (
    <View
      style={{ boxShadow: "0px 32px 64px 0px #0000000A" }}
      className=" w-[250px] h-[269px] rounded-[20px] overflow-hidden bg-[#FFFFFF]"
    >
      <Image source={src} className="w-[100%] h-[161px]" />
      <View className=" py-[16px] px-[20px]">
        <Text className=" font-[700] text-[17px] leading-[22px]">{title}</Text>
        <Text className=" font-[600] text-[15px] leading-[20px] color-[#717171]">
          {place}
        </Text>
        <Text className=" font-[600] text-[15px] leading-[20px] color-[#717171]">
          {subtitle}
        </Text>
      </View>
    </View>
  );
};
