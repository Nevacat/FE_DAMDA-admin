import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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

      <S.AddButton href="/center/newFaq">
        <Image src="/icons/faq-add-button.svg" alt="faq-add-button" width={24} height={24} />
      </S.AddButton>

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
