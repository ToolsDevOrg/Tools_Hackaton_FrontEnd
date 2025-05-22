import { ReactNode } from "react";
import { TextInput, View } from "react-native";

interface InputProps {
  children?: ReactNode;
  placeholder?: string;
  type?: "text" | "number" | "FIO" | "email";
}

export const CustomInput = ({
  children,
  placeholder,
  type = "text",
}: InputProps) => {
  return (
    <View className="border-[#F2F2F] border-[0.8px] rounded-[20px] gap-[10px] p-[15px]">
      {children}

      {type === "FIO" ? (
        <>
          {["Фамилия", "Имя", "Отчество"].map((place, index) => (
            <TextInput key={index} placeholder={place} className="flex-1" />
          ))}
        </>
      ) : (
        <TextInput placeholder={placeholder} />
      )}
    </View>
  );
};
