import React, { useEffect, useRef, useState } from 'react';
import { FormDateInputProps } from '@/types/components/form';
import { FormDateInputWrapper } from '@/styles/pages/form/form.styled';
import { AiOutlineDown } from 'react-icons/ai';
import { instance } from '@/api/instance';
import TitleEdit from '@/components/form/components/TitleEdit';
import { useMutation } from '@tanstack/react-query';
import { putForm } from '@/api/form';
import { AdminForm } from '@/types/api/form';

function DateInput({ formData, refetch }: FormDateInputProps) {
  const [isTitleEdit, setIsTitleEdit] = useState(false);
  const [title, setTitle] = useState(formData.questionTitle);
  const { mutate } = useMutation(putForm, {
    onSuccess: () => {
      refetch();
      setIsTitleEdit(false);
    },
  });
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

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

  return (
    <FormDateInputWrapper>
      <div className="header">
        {isTitleEdit ? <input type="text" value={title} onChange={onChange} ref={inputRef} /> : <h1>{title}</h1>}
        <TitleEdit isTitleEdit={isTitleEdit} onEditMode={onEditMode} />
      </div>
      <div className="select-wrapper">
        <div className="input-wrapper">
          <span>서비스 날짜</span>
          <AiOutlineDown />
        </div>
        <div className="radio-wrapper">
          <h4>{formData.placeHolder}</h4>
          <div className="radio-item-wrapper am">
            <span>오전 9시</span>
          </div>
          <div className="radio-item-wrapper pm">
            <span>오후 1시</span>
          </div>
        </div>
      </div>
    </FormDateInputWrapper>
  );
}

export default DateInput;
