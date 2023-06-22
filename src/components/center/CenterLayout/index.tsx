import React from 'react';
import { CenterData } from '@/types/api/center';

import * as G from '@/styles/common/table.style';
import * as S from './style';

interface CenterLayoutProps {
  data: CenterData[];
}

function CenterLayout({ data }: CenterLayoutProps) {
  return (
    <div>
      <S.Title>고객 센터</S.Title>

      <G.TableContainer>
        <G.Table>
          <G.Tr>
            <G.Th scope="col">순번</G.Th>
            <G.Th scope="col">제목</G.Th>
            <G.Th scope="col">유형</G.Th>
            <G.Th scope="col">action</G.Th>
          </G.Tr>

          <G.Tbody></G.Tbody>
        </G.Table>
      </G.TableContainer>
    </div>
  );
}

export default CenterLayout;
