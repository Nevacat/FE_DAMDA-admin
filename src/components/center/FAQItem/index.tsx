import React, { useState } from 'react';
import { StateButton } from '@/styles/common/StateButton';
import Modal from '../Modal';
import * as G from '@/styles/common/table.style';
import { UseMutateFunction } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';

interface FAQItemProps {
  qnaId: number;
  title: string;
  qnaCategory: string;
  index: number;
  mutate: UseMutateFunction<boolean, AxiosError, number>;
}

function FAQItem({ qnaId, title, qnaCategory, mutate, index }: FAQItemProps) {
  const [isFaqClicked, setIsFaqClicked] = useState(false);
  const router = useRouter();

  const deleteFAQHandler = (id: number) => {
    mutate(id);
  };

  let transformedCategory;
  switch (qnaCategory) {
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
    <>
      <G.Tr onDoubleClick={() => setIsFaqClicked(true)}>
        <G.Td>{index + 1}</G.Td>
        <G.Td>{title}</G.Td>
        <G.Td>{transformedCategory}</G.Td>
        <G.Td>
          <StateButton state="red" onClick={() => deleteFAQHandler(qnaId)}>
            삭제
          </StateButton>
        </G.Td>
      </G.Tr>
      {isFaqClicked && <Modal faq="faq" qnaId={qnaId} setIsFaqClicked={setIsFaqClicked} />}
    </>
  );
}

export default FAQItem;
