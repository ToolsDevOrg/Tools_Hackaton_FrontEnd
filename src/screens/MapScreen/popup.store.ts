import { EventType } from '@/widgets/popupEvent/type';
import { create } from 'zustand';

type EventState = {
  event: EventType | null;
  setEvent: (event: EventType) => void;
};

export const useEventStore = create<EventState>((set) => ({
  event: null,
  setEvent: (event) => set({ event }),
}));