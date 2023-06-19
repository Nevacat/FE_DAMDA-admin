import React from 'react';
import { FormElementsProps } from '@/types/components/form';
import Title from '@/components/form/components/Title';
import AddressInput from '@/components/form/components/AddressInput';
import Select from '@/components/form/components/Select';
import Radio from '@/components/form/components/Radio';
import DateInput from '@/components/form/components/DateInput';
import String from '@/components/form/components/String';

function FormElements({ formData }: FormElementsProps) {
  if (formData.questionIdentify === 'ADDRESS') return <AddressInput formData={formData} />;

  const isDuration =
    formData.questionIdentify === 'SERVICEDURATION' ? <div className="duration">{formData.placeHolder}</div> : null;

  switch (formData.questionType) {
    case 'TITLE':
      return <Title formData={formData} />;
    case 'STRING':
      return <String formData={formData} />;
    case 'ADDRESS':
      return <AddressInput formData={formData} />;
    case 'SELECT':
      return <Select formData={formData} />;
    case 'RADIO':
      return <Radio formData={formData}>{isDuration}</Radio>;
    case 'DATE':
      return <DateInput formData={formData} />;
  }
}

export default FormElements;
