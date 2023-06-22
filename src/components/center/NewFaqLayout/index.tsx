import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import * as S from './style';

function NewFaqLayout() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
      <S.Title>FAQ 작성</S.Title>

      <S.FormContainer>
        <S.FormWrapper>
          <strong className="title">제목</strong>
          <input type="text" placeholder="제목을 입력해주세요." />
        </S.FormWrapper>

        <S.FormWrapper>
          <strong className="category">유형</strong>

          <S.StyleWrapper isOpen={isDropdownOpen}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <button type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                유형을 선택해주세요.
              </button>
              <IoMdArrowDropdown />
            </div>

            {isDropdownOpen && (
              <S.Options>
                <button type="button">가격</button>
                <button type="button">서비스 관련</button>
                <button type="button">기타</button>
              </S.Options>
            )}
          </S.StyleWrapper>
        </S.FormWrapper>

        <S.FormWrapper>
          <strong className="contents">내용</strong>
          <textarea name="" id="" placeholder="내용을 입력해주세요."></textarea>
        </S.FormWrapper>
      </S.FormContainer>
    </div>
  );
}

export default NewFaqLayout;
