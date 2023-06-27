import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getManagers } from '@/api/manager';
import useManagerPageStore from '@/store/manager';

import ManagerLayout from '@/components/manager/ManagerLayout';

import * as S from '@/styles/pages/manager.style';

function ManagerPage() {
  const { activePage, waitingPage, pendingPage, inactivePage } = useManagerPageStore((state) => state);

  const { data: activeManagers, refetch: activeRefetch } = useQuery({
    queryKey: ['active', activePage],
    queryFn: () => getManagers('ACTIVE', activePage - 1, 7),
  });

  const { data: waitingManagers, refetch: waitingRefetch } = useQuery({
    queryKey: ['waiting'],
    queryFn: () => getManagers('WAITING', waitingPage - 1, 10),
  });

  const { data: pendingManagers, refetch: pendingRefetch } = useQuery({
    queryKey: ['pending'],
    queryFn: () => getManagers('PENDING', pendingPage - 1, 10),
  });

  const { data: inactiveManagers, refetch: inactiveRefetch } = useQuery({
    queryKey: ['inactive'],
    queryFn: () => getManagers('INACTIVE', inactivePage - 1, 10),
  });

  // if (!activeManagers) return;

  return (
    <ManagerLayout
      activeManagers={activeManagers}
      waitingManagers={waitingManagers}
      pendingManagers={pendingManagers}
      inactiveManagers={inactiveManagers}
      activeRefetch={activeRefetch}
      waitingRefetch={waitingRefetch}
      pendingRefetch={pendingRefetch}
      inactiveRefetch={inactiveRefetch}
    />
  );
}

export default ManagerPage;
