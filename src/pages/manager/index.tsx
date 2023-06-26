import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllManagers, getManagers } from '@/api/manager';

import ManagerLayout from '@/components/manager/ManagerLayout';

import * as S from '@/styles/pages/manager.style';

function ManagerPage() {
  // const { data: activeManagers } = useQuery({
  //   queryKey: ['active'],
  //   queryFn: () => getManagers('ACTIVE'),
  // });
  // const { data: waitingManagers } = useQuery({
  //   queryKey: ['waiting'],
  //   queryFn: () => getManagers('WAITING'),
  // });
  // const { data: pendingManagers } = useQuery({
  //   queryKey: ['pending'],
  //   queryFn: () => getManagers('PENDING'),
  // });
  // const { data: inactiveManagers } = useQuery({
  //   queryKey: ['inactive'],
  //   queryFn: () => getManagers('INACTIVE'),
  // });

  const { data } = useQuery({
    queryKey: ['managers'],
    queryFn: getAllManagers,
  });

  const activeManagers = data?.filter((item: any) => item.currManagerStatus === 'ACTIVE');
  const waitingManagers = data?.filter((item: any) => item.currManagerStatus === 'WAITING');
  const pendingManagers = data?.filter((item: any) => item.currManagerStatus === 'PENDING');
  const inactiveManagers = data?.filter((item: any) => item.currManagerStatus === 'INACTIVE');

  // if (!activeManagers) return;

  return (
    <ManagerLayout
      activeManagers={activeManagers}
      waitingManagers={waitingManagers}
      pendingManagers={pendingManagers}
      inactiveManagers={inactiveManagers}
    />
  );
}

export default ManagerPage;
