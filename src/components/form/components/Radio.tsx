import React, { useEffect, useRef, useState } from 'react';
import { FormRadioProps } from '@/types/components/form';
import { FormRadioWrapper } from '@/styles/pages/form/form.styled';
import ChangeButton from '@/components/form/components/ChangeButton';
import Plus from '@/components/form/components/svg/plus';
import Check from '@/components/form/components/svg/Check';
import { useMutation } from '@tanstack/react-query';
import { putCategoryList } from '@/api/form';

function Radio({ formData, children }: FormRadioProps) {
  const [isAddClicked, setIsAddClicked] = useState(false);
  const [input, setInput] = useState('');
  const addInput = useRef<HTMLInputElement | null>(null);

  const { mutate } = useMutation(putCategoryList);

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

  return (
    <FormRadioWrapper>
      <h1>{formData.questionTitle}</h1>
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
          <div onClick={addButtonOnClick}>{isAddClicked ? <Check /> : <Plus />}</div>
          <ChangeButton formData={formData} />
        </div>
      </div>
      {children}
    </FormRadioWrapper>
  );
}

export default Radio;
