import React from 'react';
import Image from 'next/image';

import * as S from './style';

interface ModalProps {
  title: string;
  description: string;
}

function Modal({ title, description }: ModalProps) {
  return (
    <S.Overlay>
      <S.Modal>
        <S.ModalHeader>
          <h2>{title}</h2>
          <Image src="/icons/close-icon.svg" alt="close-icon" width={24} height={24} />
        </S.ModalHeader>

        <p>{description}</p>

        <S.ButtonGroup>
          <button>취소</button>
          <button>{title}</button>
        </S.ButtonGroup>
      </S.Modal>
    </S.Overlay>
  );
}

export default Modal;
