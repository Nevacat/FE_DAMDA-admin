import React, { useState } from 'react';
import Image from 'next/image';
import { CenterData, FAQResponse } from '@/types/api/center';
import { StateButton } from '@/styles/common/StateButton';
import { UseMutateFunction } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import Modal from '../Modal';

import * as G from '@/styles/common/table.style';
import * as S from './style';

interface CenterLayoutProps {
  faqResponse: CenterData[];
  mutate: UseMutateFunction<boolean, AxiosError, number>;
}

function CenterLayout({ faqResponse, mutate }: CenterLayoutProps) {
  const [isFaqClicked, setIsFaqClicked] = useState(false);

  const deleteFAQHandler = (id: number) => {
    mutate(id);
  };

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

          {faqResponse?.map((item: FAQResponse) => (
            <G.Tbody key={item.qnaId}>
              <G.Tr onDoubleClick={() => setIsFaqClicked(true)}>
                <G.Td>{item.qnaId}</G.Td>
                <G.Td>{item.title}</G.Td>
                <G.Td>{item.contents}</G.Td>
                <G.Td>
                  <StateButton state="red" onClick={() => deleteFAQHandler(item.qnaId)}>
                    삭제
                  </StateButton>
                </G.Td>
              </G.Tr>

              {isFaqClicked && (
                <Modal title="FAQ" description={item.title} category={item.qnaCategory} text={item.contents} />
              )}
            </G.Tbody>
          ))}
        </G.Table>
      </G.TableContainer>
    </div>
  );
}

export default CenterLayout;
