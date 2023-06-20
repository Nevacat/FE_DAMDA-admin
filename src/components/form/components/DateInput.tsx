import React, { useEffect, useState } from 'react';
import { FormDateInputProps } from '@/types/components/form';
import { FormDateInputWrapper } from '@/styles/pages/form/form.styled';
import { AiOutlineDown } from 'react-icons/ai';
import { instance } from '@/api/instance';

function DateInput({ formData }: FormDateInputProps) {
  return (
    <FormDateInputWrapper>
      <h1>{formData.questionTitle}</h1>
      <div className="select-wrapper">
        <div className="input-wrapper">
          <span>서비스 날짜</span>
          <AiOutlineDown />
        </div>
        <div className="radio-wrapper">
          <h4>{formData.placeHolder}</h4>
          <div className="radio-item-wrapper am">
            <span>오전 9시</span>
          </div>
          <div className="radio-item-wrapper pm">
            <span>오후 1시</span>
          </div>
        </div>
      </div>
    </FormDateInputWrapper>
  );
}

export default DateInput;
