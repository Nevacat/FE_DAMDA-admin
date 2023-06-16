import { PageTitle } from '@/styles/common/PageTitle';
import * as S from '@/styles/pages/reviewCreate.style';
import React, { SetStateAction } from 'react';
import { StateButton } from '@/styles/common/StateButton';
import ImageUploader from './ImageUploader';
import { ImagesType } from '@/pages/review/create';

interface ReviewCreateProps {
  images: ImagesType;
  setImages: React.Dispatch<SetStateAction<ImagesType>>;
  setModalOpen: React.Dispatch<SetStateAction<boolean>>;
  selectImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function ReviewCreateLayout({ images, setImages, setModalOpen, selectImage }: ReviewCreateProps) {
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
          <div className="cover" onClick={() => setModalOpen(true)}>
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
          <S.UploaderContainer>
            <S.SelectImage>
              <S.Name>서비스 전</S.Name>
              <ImageUploader type={'before'} images={images.before} />
              <S.Label htmlFor="before">사진 업로드</S.Label>
              <input id="before" type="file" accept="image/*" onChange={selectImage} />
            </S.SelectImage>
            <S.SelectImage>
              <S.Name>서비스 후</S.Name>
              <ImageUploader type={'after'} images={images.after} />
              <S.Label htmlFor="after">사진 업로드</S.Label>
              <input id="after" type="file" accept="image/*" onChange={selectImage} />
            </S.SelectImage>
          </S.UploaderContainer>
        </S.Row>
        <S.Row>
          <S.Label htmlFor="content">내용</S.Label>
          <textarea id="content" placeholder="input text" />
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
