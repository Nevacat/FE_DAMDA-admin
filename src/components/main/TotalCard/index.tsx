import { Statistical } from '@/types/api/main';
import React from 'react';
import * as S from './style';

interface TotalCardProps {
  Total: number;
  CardName: string;
  setSelectedStatus: React.Dispatch<React.SetStateAction<string>>;
  selectedStatus: string; // 상태 필터의 선택 여부를 나타내는 상태 변수
}

function TotalCard({ Total, CardName, setSelectedStatus, selectedStatus }: TotalCardProps) {
  const formattedTotal = String(Total).padStart(2, '0'); // Total 값에 padStart 적용

  const onSelectedStatus = () => {
    // 같은 필터를 한 번 더 클릭하면 필터 해제
    const newStatus = selectedStatus === CardName ? '' : CardName;
    setSelectedStatus(newStatus);
  };

  return (
    <S.TotalCardWrap onClick={onSelectedStatus} className={selectedStatus === CardName ? 'active' : ''}>
      <S.TotalCardTitle>{CardName}</S.TotalCardTitle>
      <S.Total>{formattedTotal}</S.Total>
    </S.TotalCardWrap>
  );
}

export default TotalCard;
