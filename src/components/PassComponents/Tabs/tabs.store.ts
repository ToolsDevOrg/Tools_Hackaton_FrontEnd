import { create } from 'zustand';

type TabState = {
  activeTab: 'car' | 'event';
  setActiveTab: (tab: 'car' | 'event') => void;
};

export const useTabStore = create<TabState>((set) => ({
  activeTab: 'car',
  setActiveTab: (tab) => set({ activeTab: tab }),
}));