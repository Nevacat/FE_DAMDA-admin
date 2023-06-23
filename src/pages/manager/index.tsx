import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getManagers } from '@/api/manager';

import ManagerLayout from '@/components/manager/ManagerLayout';

import * as S from '@/styles/pages/manager.style';

function ManagerPage() {
  const { data: activeManagers } = useQuery({
    queryKey: ['active'],
    queryFn: () => getManagers('ACTIVE'),
  });

  // if (!activeManagers) return;

  return <ManagerLayout activeManagers={activeManagers} />;
}

export default ManagerPage;
