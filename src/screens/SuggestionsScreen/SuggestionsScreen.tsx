import { ScreenWrapper } from "@/shared/ui";
import { ScrollView, Text, View } from "react-native";
import { UjinLogo } from "../LoginScreen/icons";
import { SaleItem } from "@/shared/ui/SaleItem/SaleItem";
import { SpecialItem } from "@/shared/ui/SpecialItem/SpecialItem";

const sales = [
  {
    src: require("./img/monkey.png"),
    title: "Бесплатное кофе",
    place: "ЖК “Премьер”",
    subtitle: "При покупке от 500 ₽",
  },
  {
    src: require("./img/scooter.png"),
    title: "Промокод Whoosh",
    place: "ЖК “Премьер”",
    subtitle: "Всем жителям ЖК",
  },
];

const specials = [
  {
    title: "Заказать пропуск с Алисой",
    subtitle: "Требуется станция Мини 2 и более",
    btnText: "Попробовать",
    src: require("./img/alice.png"),
  },
  {
    title: "Оставьте заявку",
    subtitle: "Сотрудник УК решит вашу проблему ",
    btnText: "Отправить",
  },
  {
    title: "Подключите ИИ - Ассистента",
    subtitle: "Легкое решение ваших базовых задач",
    btnText: "Попробовать",
  },
];

export const SuggestionsScreen = () => {
  return (
    <ScreenWrapper>
      <View className="flex-row items-center justify-between w-[100%]">
        <View className="pb-[8px]">
          <Text className=" font-[700] text-[24px] leading-[36px]">
            Предложения
          </Text>
          <Text className=" font-[600] text-[14px] leading-[24px] color-[#717171]">
            Скидки и специальные условия
          </Text>
        </View>
        <UjinLogo />
      </View>
      <View className="py-[10px] gap-[10px] h-max">
        <Text className=" font-[700] text-[20px] leading-[30px]">Скидки</Text>
        <View className="flex-row gap-[10px]">
          {sales.map((item, index) => (
            <SaleItem
              key={index}
              src={item.src}
              title={item.title}
              place={item.place}
              subtitle={item.subtitle}
            />
          ))}
        </View>
      </View>
      <View className="pt-[10px] gap-[10px] w-[100%]">
        <Text className=" font-[700] text-[20px] leading-[30px]">
          Специальные условия
        </Text>
        <View className=" w-[100%] gap-[10px]">
          {specials.map((item, index) => (
            <SpecialItem
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              btnText={item.btnText}
              src={item.src}
            />
          ))}
        </View>
      </View>
    </ScreenWrapper>
  );
};
