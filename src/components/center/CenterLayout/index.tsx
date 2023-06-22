import React from 'react';
import Image from 'next/image';
import { CenterData, FAQResponse } from '@/types/api/center';
import { UseMutateFunction } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import FAQItem from '../FAQItem';

import * as G from '@/styles/common/table.style';
import * as S from './style';

interface CenterLayoutProps {
  faqResponse: CenterData[];
  mutate: UseMutateFunction<boolean, AxiosError, number>;
}

function CenterLayout({ faqResponse, mutate }: CenterLayoutProps) {
  return (
    <div>
      <S.Title>고객 센터</S.Title>

      <S.AddButton href="/center/newFaq">
        <Image src="/icons/faq-add-button.svg" alt="faq-add-button" width={24} height={24} />
      </S.AddButton>

      <G.TableContainer>
        <G.Table>
          <thead>
            <G.Tr>
              <G.Th scope="col">순번</G.Th>
              <G.Th scope="col">제목</G.Th>
              <G.Th scope="col">유형</G.Th>
              <G.Th scope="col">action</G.Th>
            </G.Tr>
          </thead>

          <G.Tbody>
            {faqResponse?.map((item: FAQResponse) => (
              <FAQItem key={item.qnaId} {...item} mutate={mutate} />
            ))}
          </G.Tbody>
        </G.Table>
      </G.TableContainer>
    </div>
  );
}

export default CenterLayout;
