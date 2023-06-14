import useAuthStore from '@/store/auth';
import SideMenu from '../SideMenu';
import * as S from './style';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user } = useAuthStore((state) => state);

  useEffect(() => {
    // if (!user.isLogin) router.push('/login');
  }, []);

  return (
    <S.Layout>
      {router.pathname !== '/login' && <SideMenu />}
      <S.Main>{children}</S.Main>
    </S.Layout>
  );
}

export default Layout;
