import { Statistical } from '@/types/api/main';
import React from 'react';
import * as S from './style';

interface TotalCardProps {
  Total: number;
  CardName: string;
}

function TotalCard({ Total, CardName }: TotalCardProps) {
  const formattedTotal = String(Total).padStart(2, '0'); // Total 값에 padStart 적용
  return (
    <S.TotalCardWrap>
      <S.TotalCardTitle>{CardName}</S.TotalCardTitle>
      <S.Total>{formattedTotal}</S.Total>
    </S.TotalCardWrap>
  );
}

export default TotalCard;
