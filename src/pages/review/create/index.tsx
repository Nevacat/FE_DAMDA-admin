import ReviewCreateLayout from '@/components/reviewCreate/ReviewCreateLayout';
import React, { useState } from 'react';

export interface ImagesType {
  before: string[];
  after: string[];
}

export interface FormDataType {
  title: string;
  content: string;
}

function ReviewCreate() {
  const [formData, setFormData] = useState<FormDataType>({ title: '', content: '' });
  const [images, setImages] = useState<ImagesType>({ before: [], after: [] });

  const selectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const type = e.target.id;
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (evt) => {
      const url = evt.target?.result as string;
      if (url) {
        setImages((prevImages) => {
          if (type === 'before') {
            return { ...prevImages, before: [url, ...prevImages.before] };
          } else if (type === 'after') {
            return { ...prevImages, after: [url, ...prevImages.after] };
          }
          return prevImages;
        });
      }
    };
  };

  return <ReviewCreateLayout images={images} setImages={setImages} selectImage={selectImage} />;
}

export default ReviewCreate;
