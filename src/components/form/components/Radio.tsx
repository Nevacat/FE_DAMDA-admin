import React from 'react';
import { FormRadioProps } from '@/types/components/form';
import { FormRadioWrapper } from '@/styles/pages/form/form.styled';

function Radio({ formData }: FormRadioProps) {
  return (
    <FormRadioWrapper>
      <h1>{formData.questionTitle}</h1>
      <div className="radio-wrapper">
        {formData.categoryList.map((category, index) => (
          <span className="radio-item" key={index}>
            {category.category}
          </span>
        ))}
      </div>
      {formData.questionIdentify === 'SERVICEDURATION' && <div>{formData.placeHolder}</div>}
    </FormRadioWrapper>
  );
}

export default Radio;
