import React from 'react';
import * as S from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Scrollbar } from 'swiper';

import 'swiper/css';
import 'swiper/css/scrollbar';
import Image from 'next/image';

interface UploaderProps {
  type: 'before' | 'after';
  // registeredImages: {
  //   [name: string]: string;
  // };
  registeredImages: {
    id: number;
    image: string;
  }[];
  moreImages: string[];
  selectImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function ImageUploader({ type, registeredImages, moreImages, selectImage }: UploaderProps) {
  const totalLength = registeredImages.length + moreImages.length;
  return (
    <>
      <Swiper modules={[Scrollbar, A11y]} spaceBetween={8} slidesPerView={5} scrollbar={{ draggable: true }}>
        {moreImages.length > 0 &&
          moreImages.map((image, idx) => (
            <SwiperSlide key={idx}>
              <S.ImageBox>
                <Image className="image" src={image} alt={'서비스 사진'} width={220} height={220} />
                <Image className="delete" src={'/icons/delete-gray.svg'} alt="이미지 삭제" width={24} height={24} />
              </S.ImageBox>
            </SwiperSlide>
          ))}
        {registeredImages.length > 0 &&
          registeredImages.map((image) => (
            <SwiperSlide key={image.id}>
              <S.ImageBox>
                <Image className="image" src={image.image} alt={'서비스 사진'} width={220} height={220} />
                <Image className="delete" src={'/icons/delete-gray.svg'} alt="이미지 삭제" width={24} height={24} />
              </S.ImageBox>
            </SwiperSlide>
          ))}
        {totalLength <= 10 && (
          <SwiperSlide>
            <S.EmptyBox htmlFor={type} />
          </SwiperSlide>
        )}
      </Swiper>
      <S.Upload>
        <S.Label htmlFor={type}>사진 업로드</S.Label>
        {totalLength <= 10 ? (
          <input id={type} type="file" accept="image/*" onChange={selectImage} />
        ) : (
          <span className="message">사진은 10장 까지 업로드 가능합니다</span>
        )}
      </S.Upload>
    </>
  );
}

export default ImageUploader;
