import React from 'react';
import * as S from './style';

interface ModalContainerProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactElement;
}

function ModalContainer({ setIsOpen, children }: ModalContainerProps) {
  const modalClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setIsOpen(false);
  };

  return (
    <S.ModalBackground onClick={modalClose}>
      <S.ModalContainer>{children}</S.ModalContainer>
    </S.ModalBackground>
  );
}

export default ModalContainer;
