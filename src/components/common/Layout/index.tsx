import SideMenu from '../SideMenu';
import * as S from './style';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthValidate } from '@/hook/useAuthValidate';

function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const validateMutate = useAuthValidate();

  useEffect(() => {
    // 페이지 전환 시 로그인 여부 인증
    // validateMutate();
  }, []);

  return (
    <S.Layout>
      {router.pathname !== '/login' && <SideMenu router={router} />}
      <S.Main>{children}</S.Main>
    </S.Layout>
  );
}

export default Layout;
