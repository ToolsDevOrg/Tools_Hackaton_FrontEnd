import { create } from 'zustand';
import { CartType } from './cars.data';

type CarState = {
  carData: CartType | null;
  setCarData: (data: CartType) => void;
};

export const useCarStore = create<CarState>((set) => ({
  carData: null,
  setCarData: (data: CartType) => set({ carData: data }),
}));
