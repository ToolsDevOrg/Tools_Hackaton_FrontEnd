import { ReactElement, ReactHTMLElement, ReactNode } from "react";
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
    <View className="border-[#F2F2F2] border-[0.8px] rounded-[20px] gap-[10px] p-[15px] flex-row">
      {children}

      {type === "FIO" ? (
        <>
          {["Фамилия", "Имя", "Отчество"].map((place, index) => (
            <TextInput key={index} placeholder={place} className="flex-1" />
          ))}
        </>
      ) : (
        <TextInput placeholder={placeholder} className=" h-[100%] w-[100%]" />
      )}
    </View>
  );
};
