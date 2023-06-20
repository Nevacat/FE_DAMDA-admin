import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getManagers } from '@/api/manager';

import ManagerLayout from '@/components/manager/ManagerLayout';

import * as S from '@/styles/pages/manager.style';

interface ManagerPageProps {
  activeManagersResponse: ManagerType[];
}

function ManagerPage(props: ManagerPageProps) {
  const { data: activeManagers } = useQuery({
    queryKey: ['active'],
    queryFn: () => getManagers('active'),
    initialData: props.activeManagersResponse,
  });

  return <ManagerLayout activeManagers={activeManagers} />;
}

export default ManagerPage;

export async function getStaticProps() {
  const activeManagersResponse = await getManagers('active');

  return {
    props: { activeManagersResponse },
  };
}
