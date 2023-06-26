import { PageTitle } from '@/styles/common/PageTitle';
import * as S from '@/styles/pages/reviewCreate.style';
import React, { SetStateAction } from 'react';
import ImageUploader from './ImageUploader';
import { InputDataType, ImagesType } from '@/types/components/createReview';
import { CompletedServiceData } from '@/types/api/service';
import { useRouter } from 'next/router';
import { StateButton } from '@/styles/common/StateButton';
import { UserDataInputType } from '@/pages/review/create';

interface ReviewCreateProps {
  contentInput: InputDataType;
  userDataInput: UserDataInputType;
  user: CompletedServiceData | null;
  images: ImagesType;
  isAutoMode: boolean;
  setModalOpen: React.Dispatch<SetStateAction<boolean>>;
  onChangeInput: (e: React.ChangeEvent<HTMLFormElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function ReviewCreateLayout({
  contentInput,
  userDataInput,
  user,
  images,
  isAutoMode,
  setModalOpen,
  onSubmit,
  onChangeInput,
}: ReviewCreateProps) {
  const router = useRouter();
  return (
    <>
      <PageTitle>고객 후기 작성</PageTitle>
      <S.ReviewForm onSubmit={onSubmit} onChange={onChangeInput}>
        <S.Row>
          <S.Label htmlFor="title">제목</S.Label>
          <S.Input id="title" placeholder="제목" value={contentInput.title} autoComplete="off" />
        </S.Row>
        <S.Row>
          <S.Label htmlFor="name">이름</S.Label>
          <div className="cover" onClick={() => isAutoMode && setModalOpen(true)}>
            <S.Input
              id="name"
              placeholder="고객을 선택해주세요."
              value={isAutoMode ? user?.name : userDataInput.name}
              autoComplete="off"
            />
          </div>
          {!isAutoMode && (
            <StateButton state="blue" onClick={() => setModalOpen(true)}>
              고객 조회
            </StateButton>
          )}
        </S.Row>
        <S.Row>
          <S.Label htmlFor="address">주소</S.Label>
          <S.Input id="address" value={isAutoMode ? user?.address : userDataInput.address} autoComplete="off" />
        </S.Row>
        <S.Row>
          <S.Label htmlFor="serviceDate">예약 일자</S.Label>
          <S.Input
            id="serviceDate"
            type="date"
            value={isAutoMode ? user?.reservationDate.slice(0, 10) : userDataInput.serviceDate}
            autoComplete="off"
          />
        </S.Row>
        <S.Row>
          <S.Name>전후 사진</S.Name>
          <S.UploaderContainer>
            <S.SelectImage>
              <S.Name>서비스 전</S.Name>
              <ImageUploader type={'before'} registeredImages={user?.before} moreImages={images.before} />
            </S.SelectImage>
            <S.SelectImage>
              <S.Name>서비스 후</S.Name>
              <ImageUploader type={'after'} registeredImages={user?.after} moreImages={images.after} />
            </S.SelectImage>
          </S.UploaderContainer>
        </S.Row>
        <S.Row>
          <S.Label htmlFor="content">내용</S.Label>
          <textarea id="content" placeholder="input text" value={contentInput.content} />
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
