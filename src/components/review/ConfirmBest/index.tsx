import React from 'react';
import * as S from './style';
import ModalContainer from '@/components/common/ModalContainer';
import Image from 'next/image';
import { StateButton } from '@/styles/common/StateButton';

interface ConfirmProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ConfirmBest({ setIsOpen }: ConfirmProps) {
  return (
    <ModalContainer setIsOpen={setIsOpen}>
      <S.Container>
        <S.TopBar>
          <S.Title>베스트 리뷰 선택</S.Title>
          <Image onClick={() => setIsOpen(false)} src={'/icons/close-icon.svg'} alt="닫기" width={24} height={24} />
        </S.TopBar>
        <S.Message>베스트 리뷰로 선택하겠습니까?</S.Message>
        <S.Buttons>
          <StateButton state={'green'}>네</StateButton>
          <StateButton state={'red'}>아니요</StateButton>
        </S.Buttons>
      </S.Container>
    </ModalContainer>
  );
}

export default ConfirmBest;
