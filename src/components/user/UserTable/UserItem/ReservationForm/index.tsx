import React from 'react';
import ModalContainer from '@/components/common/ModalContainer';
import * as S from './style';
import Image from 'next/image';
import TopBarGray from '@/components/common/TopBarGray';

interface ReservationFormProp {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ReservationForm({ setIsOpen }: ReservationFormProp) {
  return (
    <ModalContainer setIsOpen={setIsOpen}>
      <TopBarGray title="고객예약 폼" setIsOpen={setIsOpen} />
    </ModalContainer>
  );
}

export default ReservationForm;
