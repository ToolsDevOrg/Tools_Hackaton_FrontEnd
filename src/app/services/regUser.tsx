import { http } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";
import * as api from "../../shared/api/config"

export type RegisterUserData = {
  email: string;
  password: string;
  phone: string;
  fio: string;
  role: "citizen" | "employee";
};

export const registerUser = async (userData: RegisterUserData) => {
  try {
    const { data } = await http.post(api.regUser, userData);
    return data;
  } catch (error: any) {
    throw new Error("Ошибка при регистрации", error);
  }
};

export const useRegisterUser = (userData: RegisterUserData) => {
  return useQuery({
    queryKey: ['registerUser'],
    queryFn: () => registerUser(userData),
    enabled: false,
    retry: false,
  });
};