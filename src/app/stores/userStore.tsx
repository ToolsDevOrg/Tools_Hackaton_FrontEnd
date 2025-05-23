import { create } from "zustand";

type UserRole = "citizen" | "employee";

export interface User {
  id: string;
  email: string;
  phone: string;
  fio: string;
  jk_name: string;
  role: UserRole;
}

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
  updateUser: (partialUser: Partial<User>) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
  updateUser: (partialUser) => 
    set((state) => ({
      user: state.user ? { ...state.user, ...partialUser } : null
    })),
}));