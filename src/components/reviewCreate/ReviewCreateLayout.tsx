import { PageTitle } from '@/styles/common/PageTitle';
import * as S from '@/styles/pages/reviewCreate.style';
import React, { SetStateAction } from 'react';
import ImageUploader from './ImageUploader';
import { FormDataType, ImagesType } from '@/pages/review/create';
import { CompletedServiceData } from '@/types/api/service';
import { useRouter } from 'next/router';

interface ReviewCreateProps {
  formData: FormDataType;
  user: CompletedServiceData;
  images: ImagesType;
  setModalOpen: React.Dispatch<SetStateAction<boolean>>;
  onChangeInput: (e: React.ChangeEvent<HTMLFormElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function ReviewCreateLayout({ formData, user, images, setModalOpen, onSubmit, onChangeInput }: ReviewCreateProps) {
  const router = useRouter();
  return (
    <>
      <PageTitle>고객 후기 작성</PageTitle>
      <S.ReviewForm onSubmit={onSubmit} onChange={onChangeInput}>
        <S.Row>
          <S.Label htmlFor="title">제목</S.Label>
          <S.Input id="title" placeholder="제목" value={formData.title} />
        </S.Row>
        <S.Row>
          <S.Label htmlFor="name">이름</S.Label>
          <div className="cover" onClick={() => setModalOpen(true)}>
            <S.Input id="name" placeholder="고객을 선택해주세요." value={user.name} />
          </div>
        </S.Row>
        <S.Row>
          <S.Label htmlFor="address">주소</S.Label>
          <S.Input id="address" value={user.address} />
        </S.Row>
        <S.Row>
          <S.Label htmlFor="date">예약 일자</S.Label>
          <S.Input id="date" type="date" value={user.reservationDate} />
        </S.Row>
        <S.Row>
          <S.Name>전후 사진</S.Name>
          <S.UploaderContainer>
            <S.SelectImage>
              <S.Name>서비스 전</S.Name>
              <ImageUploader type={'before'} registeredImages={user.before} moreImages={images.before} />
            </S.SelectImage>
            <S.SelectImage>
              <S.Name>서비스 후</S.Name>
              <ImageUploader type={'after'} registeredImages={user.after} moreImages={images.after} />
            </S.SelectImage>
          </S.UploaderContainer>
        </S.Row>
        <S.Row>
          <S.Label htmlFor="content">내용</S.Label>
          <textarea id="content" placeholder="input text" value={formData.content} />
        </S.Row>
        <S.Buttons>
          <S.Button
            state="orange"
            type="button"
            onClick={() => {
              if (confirm('작성중인 내용이 사라집니다.')) router.back();
            }}
          >
            이전으로
          </S.Button>
          <S.Button state="blue" type="submit">
            등록하기
          </S.Button>
        </S.Buttons>
      </S.ReviewForm>
    </>
  );
}

export default ReviewCreateLayout;
