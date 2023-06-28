import { create } from 'zustand';

type Store = {
  activePage: number;
  waitingPage: number;
  pendingPage: number;
  inactivePage: number;
};

type Actions = {
  setActivePage: (pageNumber: number) => void;
  setWaitingPage: (pageNumber: number) => void;
  setPendingPage: (pageNumber: number) => void;
  setInactivePage: (pageNumber: number) => void;
};

const useManagerPageStore = create<Store & Actions>((set) => ({
  activePage: 1,
  waitingPage: 1,
  pendingPage: 1,
  inactivePage: 1,

  setActivePage: (activePage) => set({ activePage }),
  setWaitingPage: (waitingPage) => set({ waitingPage }),
  setPendingPage: (pendingPage) => set({ pendingPage }),
  setInactivePage: (inactivePage) => set({ inactivePage }),
}));

export default useManagerPageStore;
