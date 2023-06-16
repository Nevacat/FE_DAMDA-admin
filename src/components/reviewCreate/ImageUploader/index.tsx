import React from 'react';
import * as S from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Scrollbar } from 'swiper';

import 'swiper/css';
import 'swiper/css/scrollbar';
import Image from 'next/image';

interface UploaderProps {
  type: 'before' | 'after';
  images: (string | ArrayBuffer)[];
}

function ImageUploader({ type, images }: UploaderProps) {
  return (
    <Swiper modules={[Scrollbar, A11y]} spaceBetween={8} slidesPerView={5} scrollbar={{ draggable: true }}>
      {images.length > 0 &&
        images.map((image, idx) => (
          <SwiperSlide key={idx}>
            <S.ImageBox>
              <Image className="image" src={String(image)} alt={'서비스 사진'} width={220} height={220} />
              <Image className="delete" src={'/icons/delete-gray.svg'} alt="이미지 삭제" width={24} height={24} />
            </S.ImageBox>
          </SwiperSlide>
        ))}
      <SwiperSlide>
        <S.EmptyBox htmlFor={type} />
      </SwiperSlide>
    </Swiper>
  );
}

export default ImageUploader;
