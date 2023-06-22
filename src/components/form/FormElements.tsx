import React from 'react';
import { FormElementsProps } from '@/types/components/form';
import Title from '@/components/form/components/Title';
import AddressInput from '@/components/form/components/AddressInput';
import Select from '@/components/form/components/Select';
import Radio from '@/components/form/components/Radio';
import DateInput from '@/components/form/components/DateInput';
import String from '@/components/form/components/String';

function FormElements({ formData, refetch }: FormElementsProps) {
  const dragComponent = <p>drag</p>;

  if (formData.questionIdentify === 'ADDRESS')
    return (
      <AddressInput formData={formData} refetch={refetch}>
        {dragComponent}
      </AddressInput>
    );

  const isDuration =
    formData.questionIdentify === 'SERVICEDURATION' ? <div className="duration">{formData.placeHolder}</div> : null;

  switch (formData.questionType) {
    case 'TITLE':
      return (
        <Title formData={formData} refetch={refetch}>
          {dragComponent}
        </Title>
      );
    case 'STRING':
      return (
        <String formData={formData} refetch={refetch}>
          {dragComponent}
        </String>
      );
    case 'ADDRESS':
      return (
        <AddressInput formData={formData} refetch={refetch}>
          {dragComponent}
        </AddressInput>
      );
    case 'SELECT':
      return (
        <Select formData={formData} refetch={refetch}>
          {dragComponent}
        </Select>
      );
    case 'RADIO':
      return (
        <Radio formData={formData} refetch={refetch} dragChild={dragComponent}>
          {isDuration}
        </Radio>
      );
    case 'DATE':
      return (
        <DateInput formData={formData} refetch={refetch}>
          {dragComponent}
        </DateInput>
      );
  }
}

export default FormElements;
