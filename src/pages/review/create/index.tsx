import { deleteReviewImage, postReview } from '@/api/review';
import CompletedUserList from '@/components/reviewCreate/CompletedUserList';
import ReviewCreateLayout from '@/components/reviewCreate/ReviewCreateLayout';
import useCompletedService from '@/hook/useCompletedService';
import useCompletedServices from '@/hook/useCompletedServices';
import { CompletedServiceData, CompletedServiceRes, ServiceData, ServiceRes } from '@/types/api/service';
import React, { createContext, useState } from 'react';

export interface ImagesType {
  before: string[];
  after: string[];
}

export interface FormDataType {
  title: string;
  content: string;
}

interface UploaderProps {
  selectImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  deleteAddedImage: (type: 'before' | 'after', idx: number) => void;
  deleteRegisteredImages: (type: 'before' | 'after', imageId: number) => void;
}

export const ImageUploaderContext = createContext<UploaderProps | null>(null);

function ReviewCreate() {
  const [formData, setFormData] = useState<FormDataType>({ title: '', content: '' });
  const [images, setImages] = useState<ImagesType>({ before: [], after: [] });
  const [users, setUsers] = useState<ServiceData[]>([]);
  const [user, setUser] = useState<CompletedServiceData>({
    reservationId: 0,
    name: '',
    address: '',
    reservationDate: '',
    before: [],
    after: [],
  });
  const [page, setPage] = useState({
    page: 1,
    totalCount: 4,
  });
  const [modalOpen, setModalOpen] = useState(false);

  const getUserList = useCompletedServices((data: ServiceRes) => {
    const currentData = data.data;
    // setUsers(currentData.content);
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

    // setPage({ ...page, totalCount: currentData.totalElements });
    setPage({ ...page, totalCount: 8 });
  });

  const getUserData = useCompletedService((data: CompletedServiceRes) => {
    console.log(data.data);
    // setUser(data.data);
    setUser({
      reservationId: 1,
      name: '김디버깅',
      address: '경기도 하남시 망월동',
      reservationDate: '2023-05-31',
      before: [
        {
          id: 5,
          imgUrl:
            'https://s3.ap-northeast-2.amazonaws.com/yerimbucket/BEFORE/7cb236f8-2483-4d35-939a-65f45a59e6db_ff (1).png',
        },
        {
          id: 6,
          imgUrl:
            'https://s3.ap-northeast-2.amazonaws.com/yerimbucket/BEFORE/d8847601-4607-4a80-b772-972e417b1cbb_image (3).png',
        },
      ],
      after: [
        {
          id: 7,
          imgUrl:
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

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    const reservationId = user.reservationId;
    const data = {
      ...formData,
      ...images,
    };

    // postReview(reservationId, data)
  };

  const onPaging = (selectedPage: number) => {
    setPage({ ...page, page: selectedPage });
    getUserList(selectedPage - 1);
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

  const deleteAddedImage = (type: 'before' | 'after', idx: number) => {
    if (type === 'before') {
      setImages({ ...images, before: images.before.filter((image, nowIdx) => nowIdx !== idx) });
    }
    if (type === 'after') {
      setImages({ ...images, after: images.after.filter((image, nowIdx) => nowIdx !== idx) });
    }
  };

  const deleteRegisteredImages = (type: 'before' | 'after', imageId: number) => {
    if (type === 'before') {
      if (user.before.length <= 1) {
        return alert('등록 된 사진을 모두 지울 수 없습니다');
      }
    }
    if (type === 'after') {
      if (user.after.length <= 1) {
        return alert('등록 된 사진을 모두 지울 수 없습니다');
      }
    }

    if (confirm('해당 이미지가 DB에서 영구삭제됩니다. 삭제하시겠습니까?')) {
      deleteReviewImage(imageId);
    }
  };

  return (
    <>
      <ImageUploaderContext.Provider value={{ selectImage, deleteAddedImage, deleteRegisteredImages }}>
        <ReviewCreateLayout
          formData={formData}
          user={user}
          images={images}
          setModalOpen={setModalOpen}
          onChangeInput={onChangeInput}
          onSubmit={onSubmit}
        />
      </ImageUploaderContext.Provider>
      {modalOpen && (
        <CompletedUserList
          users={users}
          page={page}
          getUserList={getUserList}
          setModalOpen={setModalOpen}
          onSelectUser={onSelectUser}
          onPaging={onPaging}
        />
      )}
    </>
  );
}

export default ReviewCreate;
