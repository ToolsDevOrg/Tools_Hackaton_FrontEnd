import { http } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";
import * as api from "../../shared/api/config"

export const loginUser = async (email: string, password: string) => {
  try {
    const { data } = await http.post(api.loginUser, {email: email, password: password});
    return data;
  } catch (error) {
    throw new Error("Ошибка при логине");
  }
};

export const useLoginUser = (email: string, password: string) => {
  return useQuery({
    queryKey: ['loginUser'],
    queryFn: () => loginUser(email, password),
    enabled: false,
    retry: false,
  });
};