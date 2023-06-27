import React, { useState } from 'react';
import Link from 'next/link';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import * as S from './style';
import Image from 'next/image';
import { NextRouter, useRouter } from 'next/router';

function SideMenu({ router }: { router: NextRouter }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = router.pathname;

  return (
    <S.SideBar>
      <S.Logo href={'/'}>
        <Image src="/icons/Yolda_logo.svg" alt="열다" width={53} height={25} />
      </S.Logo>
      <S.Nav>
        <Link href={'/'} className={pathname === '/' ? 'active' : ''}>
          {pathname === '/' ? (
            <Image src="/icons/menu-reserve-w.svg" alt="예약관리" width={24} height={24} />
          ) : (
            <Image src="/icons/menu-reserve.svg" alt="예약관리" width={24} height={24} />
          )}
          예약 관리
        </Link>
        <Link href={'/user'} className={pathname === '/user' ? 'active' : ''}>
          {pathname === '/user' ? (
            <Image src="/icons/menu-user-w.svg" alt="고객관리" width={24} height={24} />
          ) : (
            <Image src="/icons/menu-user.svg" alt="고객관리" width={24} height={24} />
          )}
          고객 관리
        </Link>
        <Link href={'/manager'} className={pathname === '/manager' ? 'active' : ''}>
          {pathname === '/manager' ? (
            <Image src="/icons/menu-manager-w.svg" alt="매니저관리" width={24} height={24} />
          ) : (
            <Image src="/icons/menu-manager.svg" alt="매니저관리" width={24} height={24} />
          )}
          매니저 관리
        </Link>
        <Link href={'/form'} className={pathname === '/form' ? 'active' : ''}>
          {pathname === '/form' ? (
            <Image src="/icons/menu-form-w.svg" alt="폼 관리" width={24} height={24} />
          ) : (
            <Image src="/icons/menu-form.svg" alt="폼 관리" width={24} height={24} />
          )}
          고객 예약 폼
        </Link>
        <S.Folder>
          <div
            className={`category ${
              pathname === '/review' ||
              pathname === '/review/create' ||
              pathname === '/center' ||
              pathname === '/center/newFaq'
                ? 'active'
                : ''
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {pathname === '/review' ||
            pathname === '/review/create' ||
            pathname === '/center' ||
            pathname === '/center/newFaq' ? (
              <Image src="/icons/menu-posts-w.svg" alt="게시물 관리" width={24} height={24} />
            ) : (
              <Image src="/icons/menu-posts.svg" alt="게시물 관리" width={24} height={24} />
            )}
            게시물 관리
            {isMenuOpen ? <BiChevronUp /> : <BiChevronDown />}
          </div>
          {isMenuOpen && (
            <div className="sub_menu">
              <Link
                href={'/review'}
                className={pathname === '/review/create' || pathname === '/review' ? 'active' : ''}
              >
                <Image src="/icons/menu-review.svg" alt="고객 후기" width={24} height={24} />
                고객 후기
              </Link>
              <Link
                href={'/center'}
                className={pathname === '/center' || pathname === '/center/newFaq' ? 'active' : ''}
              >
                <Image src="/icons/menu-center.svg" alt="고객센터" width={24} height={24} />
                고객 센터
              </Link>
            </div>
          )}
        </S.Folder>
      </S.Nav>
    </S.SideBar>
  );
}

export default SideMenu;
