import React, { useEffect, useRef, useState } from 'react';
import { FormRadioProps } from '@/types/components/form';
import { FormRadioWrapper } from '@/styles/pages/form/form.styled';
import ChangeButton from '@/components/form/components/ChangeButton';
import Plus from '@/components/form/components/svg/plus';
import CheckGreen from '@/components/form/components/svg/CheckGreen';
import { useMutation } from '@tanstack/react-query';
import { putCategoryList, putForm } from '@/api/form';
import TitleEdit from '@/components/form/components/TitleEdit';
import { AdminForm } from '@/types/api/form';

function Radio({ formData, children, refetch, dragChild }: FormRadioProps) {
  const [isAddClicked, setIsAddClicked] = useState(false);
  const [input, setInput] = useState('');
  const [isTitleEdit, setIsTitleEdit] = useState(false);
  const [title, setTitle] = useState(formData.questionTitle);
  const { mutate: onTitleEdit } = useMutation(putForm, {
    onSuccess: () => {
      refetch();
      setIsTitleEdit(false);
    },
  });
  const inputRef = useRef<HTMLInputElement | null>(null);
  const addInput = useRef<HTMLInputElement | null>(null);

  const { mutate } = useMutation(putCategoryList, {
    onSuccess: () => {
      refetch();
      setIsAddClicked(false);
      setInput('');
    },
  });

  const addButtonOnClick = () => {
    setIsAddClicked((prev) => !prev);

    setTimeout(() => {
      if (addInput.current) {
        addInput.current.focus();
      }
    }, 100);

    if (isAddClicked) {
      mutate({
        data: [input],
        questionNumber: formData.questionNumber,
      });
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onEditMode = () => {
    setIsTitleEdit((prev) => !prev);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);

    if (isTitleEdit) {
      const copiedData: AdminForm = { ...formData };
      copiedData.questionTitle = title;

      onTitleEdit({ data: copiedData });
    }
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <FormRadioWrapper>
      {dragChild}
      <div className="header">
        {isTitleEdit ? <input type="text" value={title} onChange={onInputChange} ref={inputRef} /> : <h1>{title}</h1>}
        <TitleEdit isTitleEdit={isTitleEdit} onEditMode={onEditMode} />
      </div>
      <div className="radio-wrapper">
        <div className="item-container">
          {formData.categoryList?.map((category, index) => (
            <span className="radio-item" key={index}>
              {category.category}
            </span>
          ))}
          {isAddClicked && <input ref={addInput} type="text" placeholder="입력중" onChange={onChange} />}
        </div>
        <div className="button-wrapper">
          <div onClick={addButtonOnClick}>{isAddClicked ? <CheckGreen /> : <Plus />}</div>
          <ChangeButton formData={formData} refetch={refetch} />
        </div>
      </div>
      {children}
    </FormRadioWrapper>
  );
}

export default Radio;
