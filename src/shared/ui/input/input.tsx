import { ReactElement, ReactHTMLElement, ReactNode } from "react";
import { TextInput, View } from "react-native";

export interface InputProps {
  children?: ReactNode;
  placeholder?: string;
  type?: "default" | "email-address" | "phone-pad" | "password";
  value?: string;
  onChange?: (text: string) => void;
}

export const CustomInput = ({
  children,
  placeholder,
  type = "default",
  value,
  onChange,
}: InputProps) => {
  return (
    <View className="border-[#F2F2F2] border-[0.8px] rounded-[20px] gap-[10px] p-[15px] flex-row">
      {children}

      <TextInput
        placeholder={placeholder}
        keyboardType={type === "password" ? "default" : type}
        secureTextEntry={type === "password"}
        className=" h-[100%] w-[100%]"
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};
