import React from 'react';
import Image from 'next/image';

import * as S from './style';
import { useRouter } from 'next/router';

interface ModalProps {
  title: string;
  description: string;
  setIsGobackClicked?: (isOpen: boolean) => void;
  setIsRegistrationClicked?: (isOpen: boolean) => void;
}

function Modal({ title, description, setIsGobackClicked, setIsRegistrationClicked }: ModalProps) {
  const router = useRouter();

  const closeHandler = () => {
    if (title === '돌아가기' && setIsGobackClicked) setIsGobackClicked(false);
    else if (title === '등록' && setIsRegistrationClicked) {
      setIsRegistrationClicked(false);
    }
  };

  const mainHandler = () => {
    if (title === '돌아가기') router.push('/center');
  };

  return (
    <S.Overlay>
      <S.Modal>
        <S.ModalHeader>
          <h2>{title}</h2>
          <button onClick={closeHandler}>
            <Image src="/icons/close-icon.svg" alt="close-icon" width={24} height={24} />
          </button>
        </S.ModalHeader>

        <p>{description}</p>

        <S.ButtonGroup>
          <button onClick={closeHandler}>취소</button>
          <button type={title === '등록' ? 'submit' : 'button'} onClick={mainHandler}>
            {title}
          </button>
        </S.ButtonGroup>
      </S.Modal>
    </S.Overlay>
  );
}

export default Modal;
