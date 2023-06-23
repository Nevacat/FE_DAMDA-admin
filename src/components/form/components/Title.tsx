import React, { useRef, useState } from 'react';
import { FormInputProps } from '@/types/components/form';
import { FormTittleWrapper } from '@/styles/pages/form/form.styled';
import { useMutation } from '@tanstack/react-query';
import { putForm } from '@/api/form';
import { AdminForm } from '@/types/api/form';
import TitleEdit from '@/components/form/components/TitleEdit';

function Title({ formData, refetch, children }: FormInputProps) {
  const [isTitleEdit, setIsTitleEdit] = useState(false);
  const [title, setTitle] = useState(.questionTitle);
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
      <TitleEdit isTitleEdit={isTitleEdit} onEditMode={onEditMode} />
    </FormTittleWrapper>
  );
}

export default Title;
