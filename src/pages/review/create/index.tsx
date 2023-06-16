import CompletedUserList from '@/components/reviewCreate/CompletedUserList';
import ReviewCreateLayout from '@/components/reviewCreate/ReviewCreateLayout';
import useCompletedService from '@/hook/useCompletedService';
import useCompletedServices from '@/hook/useCompletedServices';
import { CompletedServiceData, CompletedServiceRes, ServiceData, ServiceRes } from '@/types/api/service';
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
  const [users, setUsers] = useState<ServiceData[]>([]);
  const [user, setUser] = useState<CompletedServiceData>({
    reservationId: 0,
    name: '',
    address: '',
    reservationDate: '',
    // before: {},
    // after: {},
    before: [],
    after: [],
  });
  const [modalOpen, setModalOpen] = useState(false);

  const getUserList = useCompletedServices((data: ServiceRes) => {
    console.log(data.data);
    // setUsers(data.data.content);
    setUsers([
      {
        reservationId: 1,
        name: 'admin',
        phoneNumber: '010-1234-1234',
        address: '경기도 하남시 망월동',
        totalPrice: 20000,
        reservationDate: '2023-05-31',
        managerNames: ['김길동', '김길동'],
      },
    ]);
  });

  const getUserData = useCompletedService((data: CompletedServiceRes) => {
    console.log(data.data);
    // setUser(data.data);
    setUser({
      reservationId: 1,
      name: '김디버깅',
      address: '경기도 하남시 망월동',
      reservationDate: '2023-05-31',
      // before: {
      //   '5': 'https://s3.ap-northeast-2.amazonaws.com/yerimbucket/BEFORE/7cb236f8-2483-4d35-939a-65f45a59e6db_ff (1).png',
      //   '6': 'https://s3.ap-northeast-2.amazonaws.com/yerimbucket/BEFORE/d8847601-4607-4a80-b772-972e417b1cbb_image (3).png',
      // },
      // after: {
      //   '7': 'https://s3.ap-northeast-2.amazonaws.com/yerimbucket/AFTER/ffbba6a8-96ae-4b29-b799-3ad3d70fbbbe_시스템.drawio (4).png',
      // },
      before: [
        {
          id: 5,
          image:
            'https://s3.ap-northeast-2.amazonaws.com/yerimbucket/BEFORE/7cb236f8-2483-4d35-939a-65f45a59e6db_ff (1).png',
        },
        {
          id: 6,
          image:
            'https://s3.ap-northeast-2.amazonaws.com/yerimbucket/BEFORE/d8847601-4607-4a80-b772-972e417b1cbb_image (3).png',
        },
      ],
      after: [
        {
          id: 7,
          image:
            'https://s3.ap-northeast-2.amazonaws.com/yerimbucket/AFTER/ffbba6a8-96ae-4b29-b799-3ad3d70fbbbe_시스템.drawio (4).png',
        },
      ],
    });
  });

  const onSelectUser = (reservationId: number) => {
    getUserData(reservationId);
    setModalOpen(false);
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLFormElement>) => {
    const name = e.target.id;
    if (name === 'before' || name == 'after') return;

    if (name === 'title' || name === 'content') {
      setFormData({ ...formData, [name]: e.target.value });
      return;
    }
    /* 
    if ('직접입력모드') {
      setAutoFill({
        ...autoFill,
        [name]: e.target.value,
      });
    } */
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    const reservationId = user.reservationId;
    const data = {
      ...formData,
      ...images,
    };
  };

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
      <ReviewCreateLayout
        user={user}
        images={images}
        setModalOpen={setModalOpen}
        onChangeInput={onChangeInput}
        onSubmit={onSubmit}
        selectImage={selectImage}
      />
      {modalOpen && (
        <CompletedUserList
          users={users}
          getUserList={getUserList}
          setModalOpen={setModalOpen}
          onSelectUser={onSelectUser}
        />
      )}
    </>
  );
}

export default ReviewCreate;
