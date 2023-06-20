import { create } from 'zustand';

interface Store {
  activeManagers: ManagerType[];
  waitingManagers: ManagerType[];
  pendingManagers: ManagerType[];
  inactiveManagers: ManagerType[];
}

interface Actions {
  setActiveManagers: (managers: ManagerType[]) => void;
  setWaitingManagers: (managers: ManagerType[]) => void;
  setPendingManagers: (managers: ManagerType[]) => void;
  setInActiveManagers: (managers: ManagerType[]) => void;
}

const useManagerStore = create<Store & Actions>((set) => ({
  activeManagers: [],
  waitingManagers: [],
  pendingManagers: [],
  inactiveManagers: [],

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
}));

export default useManagerStore;
