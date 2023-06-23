import React, { useEffect, useState } from 'react';
import * as S from '@/styles/pages/form/form.styled';
import { useQuery } from '@tanstack/react-query';
import { getAdminFormList } from '@/api/form';
import { AdminForm } from '@/types/api/form';
import FormElements from '@/components/form/FormElements';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

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
        <DragDropContext onDragEnd={(result) => console.log(result)}>
          <Droppable droppableId={'1'}>
            {(provided) => (
              <S.FormListWrapper ref={provided.innerRef} {...provided.droppableProps}>
                {firstPageData.map((form, index) => (
                  <FormElements index={index} key={index} formData={form} refetch={refetch} />
                ))}
                {provided.placeholder}
              </S.FormListWrapper>
            )}
          </Droppable>

          <S.Divider>
            <span>2페이지</span>
            <div />
          </S.Divider>

          <Droppable droppableId={'2'}>
            {(provided) => (
              <S.FormListWrapper ref={provided.innerRef} {...provided.droppableProps}>
                {secPageData.map((form, index) => (
                  <FormElements index={index} key={index} formData={form} refetch={refetch} />
                ))}
                {provided.placeholder}
              </S.FormListWrapper>
            )}
          </Droppable>
        </DragDropContext>
      </S.FormContent>
    </S.FormLayoutWrapper>
  );
}

export default FormLayout;
