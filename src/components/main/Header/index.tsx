import React from 'react';
import * as S from './style';
import DateFilter from './DateFilter';

interface HeaderProps {
  date: { startDate: Date | null; endDate: Date | null };
  setDate: (dates: { startDate: Date | null; endDate: Date | null }) => void;
}

function Header({ date, setDate }: HeaderProps) {
  return (
    <S.HeaderContainer>
      <S.HeaderTitle>예약관리</S.HeaderTitle>
      <S.HeaderMenus>
        <DateFilter date={date} setDate={setDate} />
        <S.ExcelDownload />
      </S.HeaderMenus>
    </S.HeaderContainer>
  );
}

export default Header;
