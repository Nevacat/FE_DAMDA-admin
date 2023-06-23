import { create } from 'zustand';

interface Store {
  activeManagers: ManagerType[];
  waitingManagers: ManagerType[];
  pendingManagers: ManagerType[];
  inactiveManagers: ManagerType[];
  isLocationOpen: boolean;
}

interface Actions {
  setActiveManagers: (managers: ManagerType[]) => void;
  setWaitingManagers: (managers: ManagerType[]) => void;
  setPendingManagers: (managers: ManagerType[]) => void;
  setInActiveManagers: (managers: ManagerType[]) => void;
  setIsLocationOpen: (isOpen: boolean) => void;
}

const useManagerStore = create<Store & Actions>((set) => ({
  activeManagers: [],
  waitingManagers: [],
  pendingManagers: [],
  inactiveManagers: [],
  isLocationOpen: false,

  setActiveManagers: (managers) => {
    set({ activeManagers: managers });
  },
  setWaitingManagers: (managers) => {
    set({ waitingManagers: managers });
  },
  setPendingManagers: (managers) => {
    set({ pendingManagers: managers });
  },
  setInActiveManagers: (managers) => {
    set({ inactiveManagers: managers });
  },
  setIsLocationOpen: (isOpen) => {
    set({ isLocationOpen: isOpen });
  },
}));

export default useManagerStore;
