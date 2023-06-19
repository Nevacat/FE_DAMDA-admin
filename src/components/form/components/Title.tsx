import React from 'react';
import { FormInputProps } from '@/types/components/form';
import { FormTittleWrapper } from '@/styles/pages/form/form.styled';

function Title({ formData }: FormInputProps) {
  return (
    <FormTittleWrapper>
      <h1>{formData.questionTitle}</h1>
    </FormTittleWrapper>
  );
}

export default Title;
