import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import * as S from './style';

function NewFaqLayout() {
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

          <div style={{ position: 'relative', display: 'inline-block' }}>
            <button type="button">유형을 선택해주세요.</button>
            <IoMdArrowDropdown />
          </div>
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
