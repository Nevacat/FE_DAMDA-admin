import React from 'react';
import { FormRadioProps } from '@/types/components/form';
import { FormRadioWrapper } from '@/styles/pages/form/form.styled';
import ChangeButton from '@/components/form/components/ChangeButton';

function Radio({ formData, children }: FormRadioProps) {
  return (
    <FormRadioWrapper>
      <h1>{formData.questionTitle}</h1>
      <div className="radio-wrapper">
        {formData.categoryList?.map((category, index) => (
          <span className="radio-item" key={index}>
            {category.category}
          </span>
        ))}
        <ChangeButton />
      </div>
      {children}
    </FormRadioWrapper>
  );
}

export default Radio;
