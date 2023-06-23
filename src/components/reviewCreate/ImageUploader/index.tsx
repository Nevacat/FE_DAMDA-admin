import React, { useContext } from 'react';
import * as S from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Scrollbar } from 'swiper';

import 'swiper/css';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import { ImageUploaderContext } from '@/pages/review/create';

interface UploaderProps {
  type: 'before' | 'after';
  registeredImages:
    | {
        id: number;
        imgUrl: string;
      }[]
    | undefined;
  moreImages: string[];
}

function ImageUploader({ type, registeredImages, moreImages }: UploaderProps) {
  const context = useContext(ImageUploaderContext);
  if (!context) return;
  const { selectImage, deleteAddedImage, deleteRegisteredImages } = context;

  const totalLength = registeredImages ? registeredImages.length + moreImages.length : 0;
  return (
    <>
      <Swiper modules={[Scrollbar, A11y]} spaceBetween={8} slidesPerView={5} scrollbar={{ draggable: true }}>
        {totalLength <= 10 && (
          <SwiperSlide>
            <S.EmptyBox htmlFor={type} />
          </SwiperSlide>
        )}
        {moreImages.length > 0 &&
          moreImages.map((image, idx) => (
            <SwiperSlide key={idx}>
              <S.ImageBox>
                <Image className="image" src={image} alt={'서비스 사진'} width={220} height={220} />
                <Image
                  className="delete"
                  onClick={() => deleteAddedImage(type, idx)}
                  src={'/icons/delete-gray.svg'}
                  alt="이미지 삭제"
                  width={24}
                  height={24}
                />
              </S.ImageBox>
            </SwiperSlide>
          ))}
        {registeredImages &&
          registeredImages.map((image) => (
            <SwiperSlide key={image.id}>
              <S.ImageBox>
                <Image className="image" src={image.imgUrl} alt={'서비스 사진'} width={220} height={220} />
                <Image
                  className="delete"
                  onClick={() => deleteRegisteredImages(type, image.id)}
                  src={'/icons/delete-gray.svg'}
                  alt="이미지 삭제"
                  width={24}
                  height={24}
                />
              </S.ImageBox>
            </SwiperSlide>
          ))}
      </Swiper>
      <S.Upload>
        <S.Label htmlFor={type}>사진 업로드</S.Label>
        {totalLength <= 10 ? (
          <input id={type} type="file" accept="image/jpg,image/png,image/jpeg" onChange={selectImage} />
        ) : (
          <span className="message">사진은 10장 까지 업로드 가능합니다</span>
        )}
      </S.Upload>
    </>
  );
}

export default ImageUploader;
