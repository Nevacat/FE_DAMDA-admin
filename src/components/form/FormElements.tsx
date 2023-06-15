import React from 'react';
import { FormElementsProps } from '@/types/components/form';
import Title from '@/components/form/components/Title';
import AddressInput from '@/components/form/components/AddressInput';

function FormElements({ formData }: FormElementsProps) {
  switch (formData.questionType) {
    case 'TITLE':
      return <Title formData={formData} />;
    case 'STRING':
      return <div>문자열</div>;
    case 'ADDRESS':
      return <AddressInput formData={formData} />;
  }
}

export default FormElements;
