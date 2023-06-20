import React, { useRef, useState } from 'react';
import { FormInputProps } from '@/types/components/form';
import { EditButtonWrapper, FormTittleWrapper } from '@/styles/pages/form/form.styled';
import Edit from '@/components/form/components/svg/edit';
import CheckGreen from '@/components/form/components/svg/CheckGreen';
import Check from '@/components/form/components/svg/Check';
import { useMutation } from '@tanstack/react-query';
import { putForm } from '@/api/form';
import { AdminForm } from '@/types/api/form';

function Title({ formData, refetch }: FormInputProps) {
  const [isTitleEdit, setIsTitleEdit] = useState(false);
  const [title, setTitle] = useState(formData.questionTitle);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { mutate } = useMutation(putForm, {
    onSuccess: () => {
      refetch();
      setIsTitleEdit(false);
    },
  });

  const onEditMode = () => {
    setIsTitleEdit((prev) => !prev);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);

    if (isTitleEdit) {
      const copiedData: AdminForm = { ...formData };
      copiedData.questionTitle = title;

      mutate({ data: copiedData });
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <FormTittleWrapper>
      {isTitleEdit ? <input type="text" value={title} onChange={onChange} ref={inputRef} /> : <h1>{title}</h1>}
      <EditButtonWrapper layout onClick={onEditMode}>
        {isTitleEdit ? <Check /> : <Edit />}
      </EditButtonWrapper>
    </FormTittleWrapper>
  );
}

export default Title;
