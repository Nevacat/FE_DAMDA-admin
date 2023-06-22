import React, { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

import CategoryDropdown from '../CategoryDropdown';

import * as N from '@/components/center/NewFaqLayout/style';
import * as S from './style';

interface ModalProps {
  title: string;
  description: string;
  category?: string;
  text?: string;
  setIsGobackClicked?: (isOpen: boolean) => void;
  setIsRegistrationClicked?: (isOpen: boolean) => void;
  setIsFaqClicked?: (isOpen: boolean) => void;
}

function Modal({
  title,
  description,
  category,
  text,
  setIsGobackClicked,
  setIsRegistrationClicked,
  setIsFaqClicked,
}: ModalProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const [isInputEditing, setIsInputEditing] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(category);

  const selectHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedCategory(e.currentTarget.innerText);
    setIsDropdownOpen(false);
  };

  const closeHandler = () => {
    if (title === '돌아가기' && setIsGobackClicked) setIsGobackClicked(false);
    else if (title === '등록' && setIsRegistrationClicked) {
      setIsRegistrationClicked(false);
    } else if (title === 'FAQ' && setIsFaqClicked) {
      setIsFaqClicked(false);
    }
  };

  const mainHandler = () => {
    if (title === '돌아가기') router.push('/center');
    else if (title === 'FAQ') setIsInputEditing(true);
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

    const onSubmit = (data) => {
      console.log(data);
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

          {isInputEditing ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              <S.Info>
                <div>
                  <dt>제목</dt>
                  <dd>{isInputEditing ? <input type="text" value={description} autoFocus /> : description}</dd>
                </div>

                <div>
                  <dt>유형</dt>
                  <dd>
                    {isInputEditing ? (
                      <N.FormWrapper>
                        <CategoryDropdown
                          isDropdownOpen={isDropdownOpen}
                          setIsDropdownOpen={setIsDropdownOpen}
                          selectedCategory={selectedCategory}
                          selectHandler={selectHandler}
                        />
                      </N.FormWrapper>
                    ) : (
                      transformedCategory
                    )}
                  </dd>
                </div>

                <div>
                  <dt>내용</dt>
                  <dd>{isInputEditing ? <textarea value={text}></textarea> : text}</dd>
                </div>
              </S.Info>

              <S.ButtonGroup>
                <button onClick={closeHandler}>취소</button>
                <button type="button" onClick={mainHandler}>
                  {isInputEditing ? '적용' : '수정'}
                </button>
              </S.ButtonGroup>
            </form>
          ) : (
            <>
              <S.Info>
                <div>
                  <dt>제목</dt>
                  <dd>{isInputEditing ? <input type="text" value={description} autoFocus /> : description}</dd>
                </div>

                <div>
                  <dt>유형</dt>
                  <dd>{isInputEditing ? '' : transformedCategory}</dd>
                </div>

                <div>
                  <dt>내용</dt>
                  <dd>{isInputEditing ? <textarea value={text}></textarea> : text}</dd>
                </div>
              </S.Info>

              <S.ButtonGroup>
                <button onClick={closeHandler}>취소</button>
                <button type="button" onClick={mainHandler}>
                  {isInputEditing ? '적용' : '수정'}
                </button>
              </S.ButtonGroup>
            </>
          )}
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
