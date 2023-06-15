import React from 'react';
import * as S from './style';
import { ReactJsPaginationProps } from 'react-js-pagination';

interface PaginationProps {
  children: React.ClassicComponentClass<ReactJsPaginationProps>;
}

function PaginationContainer({ children }: PaginationProps) {
  /**
   * children으로 react-js-pagination의 Pagination 컴포넌트 사용하시면 됩니다
   * 페이지네이션 사용 시 기본 설정 아래처럼 맞춰주세요
   * 추가 설정은 자유롭게 하셔도 괜찮습니다
   * 
      <Pagination
        hideFirstLastPages={true}
        linkClassPrev="prev"
        linkClassNext="next"
      />
   */
  return (
    <S.PaginationContainer>
      <>{children}</>
    </S.PaginationContainer>
  );
}

export default PaginationContainer;
