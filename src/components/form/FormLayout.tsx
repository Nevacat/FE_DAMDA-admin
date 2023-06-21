import React, { useEffect, useState } from 'react';
import * as S from '@/styles/pages/form/form.styled';
import { useQuery } from '@tanstack/react-query';
import { getAdminFormList } from '@/api/form';
import { AdminForm } from '@/types/api/form';
import FormElements from '@/components/form/FormElements';
import { instance } from '@/api/instance';

function FormLayout() {
  const { data, refetch } = useQuery(['form'], getAdminFormList);
  const [firstPageData, setFirstPageData] = useState<AdminForm[]>([]);
  const [secPageData, setSecPageData] = useState<AdminForm[]>([]);

  useEffect(() => {
    if (data) {
      const firstPageData = data.filter((form) => form.page === 1).sort((a, b) => a.questionOrder - b.questionOrder);
      const secPageData = data.filter((form) => form.page === 2).sort((a, b) => a.questionOrder - b.questionOrder);
      setFirstPageData(firstPageData);
      setSecPageData(secPageData);
    }
  }, [data]);

  return (
    <S.FormLayoutWrapper>
      <S.FormTitle>
        <h1>고객관리</h1>
        <h2>모든 항목은 클릭시 수정 가능합니다.</h2>
      </S.FormTitle>
      <S.FormContent>
        <S.FormListWrapper>
          {firstPageData.map((form, index) => (
            <FormElements key={index} formData={form} refetch={refetch} />
          ))}
        </S.FormListWrapper>

        <S.Divider>
          <span>2페이지</span>
          <div />
        </S.Divider>

        <S.FormListWrapper>
          {secPageData.map((form, index) => (
            <FormElements key={index} formData={form} refetch={refetch} />
          ))}
        </S.FormListWrapper>
      </S.FormContent>
    </S.FormLayoutWrapper>
  );
}

export default FormLayout;
