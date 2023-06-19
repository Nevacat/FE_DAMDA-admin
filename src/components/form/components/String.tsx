import React from 'react';
import { FormInputProps } from '@/types/components/form';
import { FormInputWrapper } from '@/styles/pages/form/form.styled';
import { convertIdentifierToKorean } from '@/utils';
import ChangeButton from '@/components/form/components/ChangeButton';

function String({ formData }: FormInputProps) {
  return (
    <FormInputWrapper>
      <h1>{formData.questionTitle}</h1>
      <div className="input-wrapper">
        <span>{convertIdentifierToKorean(formData.questionIdentify)}</span>
        <input type="text" placeholder={formData.placeHolder} />
      </div>
    </FormInputWrapper>
  );
}

export default String;
