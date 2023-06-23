import React from 'react';
import DeleteRed from '@/components/form/components/svg/DeleteRed';
import { CategoryList } from '@/types/api/form';
import { useMutation } from '@tanstack/react-query';
import { deleteCategory } from '@/api/form';
import { FormRadioDelete } from '@/styles/pages/form/form.styled';

function RadioDelete({ refetch, category }: { refetch: () => void; category: CategoryList }) {
  const { mutate: deleteCategoryHandle } = useMutation(deleteCategory, {
    onSuccess: () => {
      refetch();
    },
  });

  const onDeleteClick = (category: CategoryList) => {
    const value = confirm('ㄹ?ㅇ?');

    if (value) {
      const categoryNumber = category.id;
      deleteCategoryHandle({ categoryNumber });
    }
  };

  return (
    <FormRadioDelete onClick={() => onDeleteClick(category)}>
      <DeleteRed />
    </FormRadioDelete>
  );
}

export default RadioDelete;
