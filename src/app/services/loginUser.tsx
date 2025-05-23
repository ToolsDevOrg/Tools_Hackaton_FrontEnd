import { http } from "@/shared/api";
import { useMutation } from "@tanstack/react-query";
import * as api from "../../shared/api/config"

export const loginUser = async ({ email, password }: { email: string; password: string }) => {
  try {
    const { data } = await http.post(api.loginUser, { email, password });
    return data;
  } catch (error) {
    throw new Error("Ошибка при логине");
  }
};

export const useLoginUser = () => {
  return useMutation({
    mutationKey: ['loginUser'], // Изменили ключ для ясности
    mutationFn:({ email, password }: { email: string; password: string }) =>  loginUser({ email, password }), // Просто передаём функцию
  });
};