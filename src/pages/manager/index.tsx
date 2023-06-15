import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getActiveManagers } from '@/api/manager';

import ManagerLayout from '@/components/manager/ManagerLayout';

import * as S from '@/styles/pages/manager.style';

function ManagerPage() {
  // const { activeManagers } = useQuery({
  //   queryKey: ['active'],
  //   queryFn: getActiveManagers,
  //   initialData: activeManagersResponse,
  // });

  // activeManagers={activeManagers}
  return <ManagerLayout />;
}

export default ManagerPage;

// export async function getStaticProps() {
//   const activeManagersResponse = await getActiveManagers();
//   return {
//     props: { activeManagersResponse },
//   };
// }
