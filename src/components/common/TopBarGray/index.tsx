import React from 'react';
import * as S from './style';
import Image from 'next/image';

interface TopBarProp {
  title: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * 모달 상단에 공통으로 적용되는 회색 TopBar영역입니다
 */

function TopBarGray({ title, setIsOpen }: TopBarProp) {
  return (
    <S.TopBar>
      <S.Title>{title}</S.Title>
      <Image onClick={() => setIsOpen(false)} src={'/icons/close-icon.svg'} alt="닫기" width={24} height={24} />
    </S.TopBar>
  );
}

export default TopBarGray;
