import React from 'react';
import * as S from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Scrollbar } from 'swiper';

import 'swiper/css';
import 'swiper/css/scrollbar';
import Image from 'next/image';

function ImageUploader() {
  return (
    <S.UploaderContainer>
      <S.SelectImage>
        <S.Name>서비스 전</S.Name>
        <Swiper modules={[Scrollbar, A11y]} spaceBetween={8} slidesPerView={5} scrollbar={{ draggable: true }}>
          <SwiperSlide>
            <S.EmptyBox htmlFor="image_before" />
          </SwiperSlide>
        </Swiper>
        <S.Label htmlFor="image_before">사진 업로드</S.Label>
        <input id="image_before" type="file" accept="image/*" />
      </S.SelectImage>
      <S.SelectImage>
        <S.Name>서비스 후</S.Name>
        <Swiper modules={[Scrollbar, A11y]} spaceBetween={8} slidesPerView={5} scrollbar={{ draggable: true }}>
          {/* <SwiperSlide>
            <S.ImageBox>
              <Image className="delete" src={'/icons/delete-gray.svg'} alt="이미지 삭제" width={24} height={24} />
            </S.ImageBox>
          </SwiperSlide> */}
          <SwiperSlide>
            <S.EmptyBox htmlFor="image_after" />
          </SwiperSlide>
        </Swiper>
        <S.Label htmlFor="image_after">사진 업로드</S.Label>
        <input id="image_after" type="file" accept="image/*" />
      </S.SelectImage>
    </S.UploaderContainer>
  );
}

export default ImageUploader;
