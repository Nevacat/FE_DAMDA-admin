import React, { useContext } from 'react';
import * as S from '../ConfirmBest/style';
import ModalContainer from '@/components/common/ModalContainer';
import Image from 'next/image';
import { StateButton } from '@/styles/common/StateButton';
import { ReviewContext } from '@/pages/review';
import { deleteReview } from '@/api/review';
import TopBarGray from '@/components/common/TopBarGray';

interface ConfirmProps {
  reviewId: number;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ConfirmDelete({ reviewId, setIsOpen }: ConfirmProps) {
  const context = useContext(ReviewContext);
  if (!context) return;
  const { reviewMutate } = context;

  const onConfirm = async () => {
    try {
      await deleteReview(reviewId);
      reviewMutate(0);
      setIsOpen(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ModalContainer setIsOpen={setIsOpen}>
      <S.Container>
        <TopBarGray title="리뷰 삭제" setIsOpen={setIsOpen} />
        <S.Message>해당 리뷰를 삭제하시겠습니까?</S.Message>
        <S.Buttons>
          <StateButton state={'green'} onClick={onConfirm}>
            네
          </StateButton>
          <StateButton state={'red'} onClick={() => setIsOpen(false)}>
            아니요
          </StateButton>
        </S.Buttons>
      </S.Container>
    </ModalContainer>
  );
}

export default ConfirmDelete;
