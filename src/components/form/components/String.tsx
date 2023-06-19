import React from 'react';
import { FormInputProps } from '@/types/components/form';
import { FormInputWrapper } from '@/styles/pages/form/form.styled';

function String({ formData }: FormInputProps) {
  return (
    <FormInputWrapper>
      <h1>{formData.questionTitle}</h1>
    </FormInputWrapper>
  );
}

export default String;
