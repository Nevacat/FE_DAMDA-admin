import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import * as S from './style';

interface ModalProps {
  title: string;
  description: string;
  category?: string;
  text?: string;
  setIsGobackClicked?: (isOpen: boolean) => void;
  setIsRegistrationClicked?: (isOpen: boolean) => void;
}

function Modal({ title, description, category, text, setIsGobackClicked, setIsRegistrationClicked }: ModalProps) {
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

  let transformedCategory;
  if (title === 'FAQ') {
    switch (category) {
      case 'PRICE':
        transformedCategory = '가격';
        break;

      case 'SERVICE':
        transformedCategory = '서비스 관련';
        break;

      case 'ETC':
        transformedCategory = '기타';
        break;

      default:
        break;
    }

    return (
      <S.Overlay>
        <S.Modal>
          <S.ModalHeader>
            <h2>{title}</h2>
            <button onClick={closeHandler}>
              <Image src="/icons/close-icon.svg" alt="close-icon" width={24} height={24} />
            </button>
          </S.ModalHeader>

          <S.Info>
            <div>
              <dt>제목</dt>
              <dd>{description}</dd>
            </div>

            <div>
              <dt>유형</dt>
              <dd>{transformedCategory}</dd>
            </div>

            <div>
              <dt>내용</dt>
              <dd>{text}</dd>
            </div>
          </S.Info>

          <S.ButtonGroup>
            <button onClick={closeHandler}>취소</button>
            <button type="button" onClick={mainHandler}>
              수정
            </button>
          </S.ButtonGroup>
        </S.Modal>
      </S.Overlay>
    );
  }

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
