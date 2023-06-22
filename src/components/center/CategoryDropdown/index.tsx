import React from 'react';

import { IoMdArrowDropdown } from 'react-icons/io';
import * as S from './style';

interface CategoryDropdownProps {
  size?: string;
  isDropdownOpen: boolean;
  setIsDropdownOpen: (isOpen: boolean) => void;
  selectedCategory: string | undefined;
  selectHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function CategoryDropdown({
  size,
  isDropdownOpen,
  setIsDropdownOpen,
  selectedCategory,
  selectHandler,
}: CategoryDropdownProps) {
  let transformedCategory;
  switch (selectedCategory) {
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
    <S.StyleWrapper isOpen={isDropdownOpen} size={size}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <button type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          {transformedCategory || selectedCategory}
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
