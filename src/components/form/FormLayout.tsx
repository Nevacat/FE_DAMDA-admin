import React, { useEffect, useState } from 'react';
import * as S from '@/styles/pages/form/form.styled';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getAdminFormList, updateQuestionOrder } from '@/api/form';
import { AdminForm, QuestionOrder } from '@/types/api/form';
import FormElements from '@/components/form/FormElements';
import { DragDropContext, DraggableLocation, Droppable, DropResult } from 'react-beautiful-dnd';

function FormLayout() {
  const { data, refetch } = useQuery(['form'], getAdminFormList);
  const { mutate } = useMutation(updateQuestionOrder, {
    onSuccess: async () => {
      await refetch();
      setIsDragEnd(false);
    },
  });
  const [isDragEnd, setIsDragEnd] = useState(false);
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

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    if (destination.index === source.index && destination.droppableId === source.droppableId) return;

    if (destination.droppableId === source.droppableId) {
      handleSomeBoardMove(source, destination);
      setIsDragEnd(true);
    } else {
      handleDifferentBoardMove(source, destination);
      setIsDragEnd(true);
    }
  };

  const handleSomeBoardMove = (source: DraggableLocation, destination: DraggableLocation) => {
    if (source.droppableId === '1') {
      const newBoard = Array.from(firstPageData);
      const [removed] = newBoard.splice(source.index, 1);
      newBoard.splice(destination.index, 0, removed);
      setFirstPageData(newBoard);
    } else {
      const newBoard = Array.from(secPageData);
      const [removed] = newBoard.splice(source.index, 1);
      newBoard.splice(destination.index, 0, removed);
      setSecPageData(newBoard);
    }
  };

  const handleDifferentBoardMove = (source: DraggableLocation, destination: DraggableLocation) => {
    if (source.droppableId === '1') {
      const newBoard = Array.from(firstPageData);
      const [removed] = newBoard.splice(source.index, 1);
      removed.page = 2;
      setFirstPageData(newBoard);
      setSecPageData((prev) => {
        const newBoard = Array.from(prev);
        newBoard.splice(destination.index, 0, removed);
        return newBoard;
      });
    } else {
      const newBoard = Array.from(secPageData);
      const [removed] = newBoard.splice(source.index, 1);
      removed.page = 1;
      setSecPageData(newBoard);
      setFirstPageData((prev) => {
        const newBoard = Array.from(prev);
        newBoard.splice(destination.index, 0, removed);
        return newBoard;
      });
    }
  };

  const updateOrder = () => {
    const updatedFirstPageData = firstPageData.map((form, index) => ({
      questionNumber: form.questionNumber,
      order: index + 1,
      page: form.page,
    }));
    const updatedSecPageData = secPageData.map((form, index) => ({
      questionNumber: form.questionNumber,
      order: index + 1,
      page: form.page,
    }));
    const updatedData = [...updatedFirstPageData, ...updatedSecPageData];

    console.log(updatedData);

    mutate({ data: updatedData as QuestionOrder[] });
  };

  useEffect(() => {
    if (isDragEnd) {
      updateOrder();
    }
  }, [isDragEnd, firstPageData, secPageData]);

  return (
    <S.FormLayoutWrapper>
      <S.FormTitle>
        <h1>고객관리</h1>
        <h2>모든 항목은 클릭시 수정 가능합니다.</h2>
      </S.FormTitle>
      <S.FormContent>
        <DragDropContext onDragEnd={onDragEnd}>
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
