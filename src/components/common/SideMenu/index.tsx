import React, { useState } from 'react';
import Link from 'next/link';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import * as S from './style';

function SideMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <S.SideBar>
      <S.Nav>
        <Link href={'/'}>예약 관리</Link>
        <Link href={'/user'}>고객 관리</Link>
        <Link href={'/manager'}>매니저 관리</Link>
        <Link href={'/form'}>폼 관리</Link>
        <S.Folder>
          <div className="category" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            게시물 관리
            {isMenuOpen ? <BiChevronUp /> : <BiChevronDown />}
          </div>
          {isMenuOpen && (
            <div className="sub_menu">
              <Link href={'/review'}>고객 후기</Link>
              <Link href={'/center'}>고객 센터</Link>
            </div>
          )}
        </S.Folder>
      </S.Nav>
    </S.SideBar>
  );
}

export default SideMenu;
