import React from 'react';
import * as S from './style';
import * as T from '@/styles/common/table.style';
import { StateButton } from '@/styles/common/ServiceState';

const ReviewItem = () => {
  return (
    <T.Tr>
      <T.Td>1</T.Td>
      <T.Td>김아무개</T.Td>
      <T.Td>서울 종로구</T.Td>
      <S.ReviewContent>
        친절하게 정리해주셔서 너무 고맙습니다~~!!친절하게 정리해주셔서 너무 고맙습니다~~!!친절하게 정리해주셔서 너무
        고맙습니다~~!!
      </S.ReviewContent>
      <T.Td>2023-02-12</T.Td>
      <T.Td>
        <StateButton state={'blue'}>일반리뷰</StateButton>
      </T.Td>
      <T.Td>
        <StateButton state={'red'}>삭제</StateButton>
      </T.Td>
    </T.Tr>
  );
};

export default ReviewItem;
