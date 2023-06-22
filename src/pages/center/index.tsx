import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCenterData } from '@/api/center';

import CenterLayout from '@/components/center/CenterLayout';

import * as S from '@/styles/pages/center.style';

function CenterPage() {
  const { data: centerData } = useQuery({
    queryKey: ['faq'],
    queryFn: getCenterData,
  });

  if (!centerData || centerData.length < 1) return <>Not Found Center Data</>;

  return <CenterLayout data={centerData} />;
}

export default CenterPage;
