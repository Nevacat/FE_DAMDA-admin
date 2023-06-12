import SideMenu from '../SideMenu';
import * as S from './style';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <S.Layout>
      <SideMenu />
      <S.Main>{children}</S.Main>
    </S.Layout>
  );
}

export default Layout;
