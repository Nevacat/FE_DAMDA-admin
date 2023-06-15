import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getServiceAvailableLocation } from '@/api/form';
import { FormAddressWrapper } from '@/styles/pages/form/form.styled';
import { FormAddressProps } from '@/types/components/form';
import { AiOutlineDown } from 'react-icons/ai';

function AddressInput({ formData }: FormAddressProps) {
  const { data, isLoading } = useQuery(['address'], getServiceAvailableLocation);

  return (
    <FormAddressWrapper>
      <h1>{formData.questionTitle}</h1>

      <div className="address-list">
        {data && (
          <>
            <div className="address-item">
              <div className="address-wrapper">
                지역 선택 <AiOutlineDown />{' '}
              </div>
              <div className="address-list-item">
                {Object.keys(data).map((key) => (
                  <span key={key}>{key}</span>
                ))}
              </div>
            </div>
            <div className="address-item">
              <div className="address-wrapper">
                지역 선택 <AiOutlineDown />{' '}
              </div>
              <div className="address-list-item">
                {data['서울특별시'].map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </div>
          </>
        )}
        <div className="input">
          <span>상세 주소</span>
          <input type="text" placeholder="동, 호수까지 입력해주세요." />
        </div>
      </div>
    </FormAddressWrapper>
  );
}

export default AddressInput;
