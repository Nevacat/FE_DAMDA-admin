import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ModalContainer from '@/components/common/ModalContainer';
import TopBarGray from '@/components/common/TopBarGray';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Scrollbar } from 'swiper';
import * as S from './style';

import 'swiper/css';
import 'swiper/css/scrollbar';
import { useQuery } from '@tanstack/react-query';
import { getCompletedServiceImages } from '@/api/service';
import Loading from '../Loading';

interface CompletedServiceProps {
  reservationId: number;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function CompletedService({ reservationId, setIsOpen }: CompletedServiceProps) {
  const [formData, setFormData] = useState<{ before: string[]; after: string[] } | null>(null);
  const { data, isLoading, isError } = useQuery(['complated_service_images'], () =>
    getCompletedServiceImages(reservationId),
  );

  useEffect(() => {
    if (!data) return;
    setFormData(data.data);
  }, [data]);

  return (
    <ModalContainer setIsOpen={setIsOpen}>
      <>
        <TopBarGray title="매니저 서비스 완료 폼" setIsOpen={setIsOpen} />
        <S.CompletedFormContainer>
          {isLoading && (
            <div className="message">
              <Loading />
            </div>
          )}
          {isError && <div className="message">제출 된 서비스 완료 폼이 없습니다</div>}
          {formData && (
            <>
              <S.StateTitle>정리 전</S.StateTitle>
              <Swiper modules={[Scrollbar, A11y]} spaceBetween={8} slidesPerView={2.7} scrollbar={{ draggable: true }}>
                <SwiperSlide>
                  {formData.before.map((before, idx) => (
                    <S.Box key={idx}>
                      <Image src={before} alt="service-before" fill />
                    </S.Box>
                  ))}
                </SwiperSlide>
              </Swiper>
              <S.StateTitle>정리 후</S.StateTitle>
              <Swiper modules={[Scrollbar, A11y]} spaceBetween={8} slidesPerView={2.7} scrollbar={{ draggable: true }}>
                <SwiperSlide>
                  {formData.before.map((before, idx) => (
                    <S.Box key={idx}>
                      <Image src={before} alt="service-before" fill />
                    </S.Box>
                  ))}
                </SwiperSlide>
              </Swiper>
            </>
          )}
        </S.CompletedFormContainer>
      </>
    </ModalContainer>
  );
}

export default CompletedService;
