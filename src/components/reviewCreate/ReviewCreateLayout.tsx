import { PageTitle } from '@/styles/common/PageTitle';
import * as S from '@/styles/pages/reviewCreate.style';
import React from 'react';
import { StateButton } from '@/styles/common/StateButton';
import ImageUploader from './ImageUploader';

function ReviewCreateLayout() {
  return (
    <>
      <PageTitle>고객 후기 작성</PageTitle>
      <S.ReviewForm>
        <S.Row>
          <S.Label htmlFor="title">제목</S.Label>
          <S.Input id="title" placeholder="제목" />
        </S.Row>
        <S.Row>
          <S.Label htmlFor="name">이름</S.Label>
          <div className="cover">
            <S.Input id="name" placeholder="고객을 선택해주세요." />
          </div>
        </S.Row>
        <S.Row>
          <S.Label htmlFor="address">주소</S.Label>
          <S.Input id="address" />
        </S.Row>
        <S.Row>
          <S.Label htmlFor="date">예약 일자</S.Label>
          <S.Input id="date" type="date" />
        </S.Row>
        <S.Row>
          <S.Name>전후 사진</S.Name>
          <ImageUploader />
        </S.Row>
        <S.Row>
          <S.Label htmlFor="content">내용</S.Label>
          <textarea placeholder="input text" />
        </S.Row>
        <S.Buttons>
          <StateButton state="orange">이전으로</StateButton>
          <StateButton state="blue">등록하기</StateButton>
        </S.Buttons>
      </S.ReviewForm>
    </>
  );
}

export default ReviewCreateLayout;
