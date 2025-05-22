import { create } from "zustand";

type Role = "resident" | "employee";

interface RoleStore {
  role: Role;
  setRole: (role: Role) => void;
}

export const useRoleStore = create<RoleStore>((set) => ({
  role: "resident",
  setRole: (role) => set({ role }),
}));
