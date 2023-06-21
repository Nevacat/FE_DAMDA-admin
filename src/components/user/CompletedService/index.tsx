import React from 'react';
import Image from 'next/image';
import ModalContainer from '@/components/common/ModalContainer';
import TopBarGray from '@/components/common/TopBarGray';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Scrollbar } from 'swiper';
import * as S from './style';

import 'swiper/css';
import 'swiper/css/scrollbar';

interface CompletedServiceProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function CompletedService({ setIsOpen }: CompletedServiceProps) {
  return (
    <ModalContainer setIsOpen={setIsOpen}>
      <>
        <TopBarGray title="매니저 서비스 완료 폼" setIsOpen={setIsOpen} />
        <S.CompletedFormContainer>
          <S.StateTitle>정리 전</S.StateTitle>
          <Swiper modules={[Scrollbar, A11y]} spaceBetween={8} slidesPerView={2.7} scrollbar={{ draggable: true }}>
            <SwiperSlide>
              <S.Box></S.Box>
            </SwiperSlide>
          </Swiper>
          <S.StateTitle>정리 후</S.StateTitle>
          <Swiper modules={[Scrollbar, A11y]} spaceBetween={8} slidesPerView={2.7} scrollbar={{ draggable: true }}>
            <SwiperSlide>
              <S.Box></S.Box>
            </SwiperSlide>
          </Swiper>
        </S.CompletedFormContainer>
      </>
    </ModalContainer>
  );
}

export default CompletedService;
