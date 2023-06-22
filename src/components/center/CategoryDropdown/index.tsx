import React from 'react';

import { IoMdArrowDropdown } from 'react-icons/io';
import * as S from './style';

interface CategoryDropdownProps {
  isDropdownOpen: boolean;
  setIsDropdownOpen: (isOpen: boolean) => void;
  selectedCategory: string | undefined;
  selectHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function CategoryDropdown({
  isDropdownOpen,
  setIsDropdownOpen,
  selectedCategory,
  selectHandler,
}: CategoryDropdownProps) {
  return (
    <S.StyleWrapper isOpen={isDropdownOpen}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <button type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          {selectedCategory || '유형을 선택해주세요.'}
        </button>
        <IoMdArrowDropdown />
      </div>

      {isDropdownOpen && (
        <S.Options>
          <button type="button" onClick={selectHandler}>
            가격
          </button>
          <button type="button" onClick={selectHandler}>
            서비스 관련
          </button>
          <button type="button" onClick={selectHandler}>
            기타
          </button>
        </S.Options>
      )}
    </S.StyleWrapper>
  );
}

export default CategoryDropdown;
