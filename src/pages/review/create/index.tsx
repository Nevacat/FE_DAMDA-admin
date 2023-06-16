import { getCompletedServices } from '@/api/service';
import CompletedUserList from '@/components/reviewCreate/CompletedUserList';
import ReviewCreateLayout from '@/components/reviewCreate/ReviewCreateLayout';
import { ServiceData, ServiceRes } from '@/types/api/service';
import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

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
  const [users, setUsers] = useState<ServiceData[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  const { mutate: getUserList } = useMutation((page?: number, size?: number) => getCompletedServices(page, size), {
    onSuccess: (data: ServiceRes) => {
      // setUsers(data.data.content);
      setUsers([
        {
          reservationId: 1,
          name: 'admin',
          phoneNumber: '010-1234-1234',
          address: '경기도 하남시 망월동',
          totalPrice: 20000,
          reservationDate: '2023-05-31 12:00',
          managerNames: ['김길동', '김길동'],
        },
      ]);
    },
  });

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

  return (
    <>
      <ReviewCreateLayout images={images} setImages={setImages} setModalOpen={setModalOpen} selectImage={selectImage} />
      {modalOpen && <CompletedUserList users={users} getUserList={getUserList} setModalOpen={setModalOpen} />}
    </>
  );
}

export default ReviewCreate;
