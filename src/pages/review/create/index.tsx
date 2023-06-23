import { deleteReviewImage, postReview } from '@/api/review';
import CompletedUserList from '@/components/reviewCreate/CompletedUserList';
import ReviewCreateLayout from '@/components/reviewCreate/ReviewCreateLayout';
import useCompletedService from '@/hook/useCompletedService';
import useCompletedServices from '@/hook/useCompletedServices';
import { CompletedServiceData, CompletedServiceRes, ServiceData, ServiceRes } from '@/types/api/service';
import { BeforeAfter, FormDataType, ImageFormsType, ImagesType, UploaderProps } from '@/types/components/createReview';
import { useRouter } from 'next/router';
import React, { createContext, useState } from 'react';

export const ImageUploaderContext = createContext<UploaderProps | null>(null);

function ReviewCreate() {
  const router = useRouter();
  // const beforeImageForm = new FormData();
  // const afterImageForm = new FormData();
  const [formData, setFormData] = useState<FormDataType>({ title: '', content: '' }); // 사용자가 추가한 리뷰 제목과 본문
  const [images, setImages] = useState<ImagesType>({ before: [], after: [] }); // 사용자가 추가한 이미지 (렌더링용)
  const [imageForms, setImageForms] = useState<ImageFormsType>({ before: [], after: [] }); // api로 전송 할 이미지 formData
  const [users, setUsers] = useState<ServiceData[]>([]); // 서비스 완료 유저 목록
  const [user, setUser] = useState<CompletedServiceData | null>(null); // 선택 된 서비스 완료 유저
  const [page, setPage] = useState({
    // 서비스 완료 유저 목록 페이징
    page: 1,
    totalCount: 4,
  });
  const [modalOpen, setModalOpen] = useState(false); // 서비스 완료 유저 목록 모달 open 상태

  /**
   * 서비스 완료 유저 목록 요청(mutate)후 유저 리스트 set
   */
  const getUserList = useCompletedServices((data: ServiceRes) => {
    const currentData = data.data;
    console.log(currentData);
    setUsers(currentData.content);

    setPage({ ...page, totalCount: currentData.totalElements });
  });

  /**
   * 선택 된 서비스 완료 유저 데이터 요청(mutate)후 유저 데이터 set
   */
  const getUserData = useCompletedService((data: CompletedServiceRes) => {
    setUser(data.data);
  });

  /**
   * 서비스 완료 유저 목록에서 리뷰에 사용 될 유저 선택
   * => 선택 된 유저의 아이디를 받아 해당 유저데이터를 호출하고 페이지 초기화
   */
  const onSelectUser = (reservationId: number) => {
    getUserData(reservationId);
    setPage({ ...page, page: 1 });
    setModalOpen(false);
  };

  /**
   * 서비스 완료 유저목록 페이징
   */
  const onPaging = (selectedPage: number) => {
    setPage({ ...page, page: selectedPage });
    getUserList(selectedPage - 1);
  };

  /**
   * 직접입력모드가 아닌 경우
   * input 내용 기재 시 title과 content만 input값 입력 가능하도록 함
   */
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

  /**
   * input에 이미지 추가 시, 선택 된 이미지를 formData타입으로 배열에 담아두도록 함
   */
  const selectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const type = e.target.id as BeforeAfter;
    const file = e.target.files?.[0];
    if (!file) return;

    // const formData = new FormData();
    setImageForms((prevImages) => {
      if (type === 'before') {
        return { ...prevImages, before: [file, ...prevImages.before] };
      } else if (type === 'after') {
        return { ...prevImages, after: [file, ...prevImages.after] };
      }
      return prevImages;
    });

    const reader = new FileReader();

    reader.onload = (evt) => loadImage(evt, type);

    reader.readAsDataURL(file);
  };

  /**
   * input으로 추가한 이미지를 화면에 바로 렌더링
   */
  const loadImage = (evt: ProgressEvent<FileReader>, type: BeforeAfter) => {
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

  /**
   * 임의로 추가한 이미지 삭제
   */
  const deleteAddedImage = (type: 'before' | 'after', idx: number) => {
    if (type === 'before') {
      setImages({ ...images, before: images.before.filter((image, nowIdx) => nowIdx !== idx) });
      setImageForms((prevImages) => ({
        ...prevImages,
        before: imageForms.before.filter((image, nowIdx) => nowIdx !== idx),
      }));
    }
    if (type === 'after') {
      setImages({ ...images, after: images.after.filter((image, nowIdx) => nowIdx !== idx) });
      setImageForms((prevImages) => ({
        ...prevImages,
        after: imageForms.after.filter((image, nowIdx) => nowIdx !== idx),
      }));
    }
  };

  /**
   * 사용자의 서비스 완료 데이터에 담겨있던 기존 이미지 삭제.
   * 삭제 시 해당 이미지는 DB에서 영구적으로 지워지게 되며, 최소 한장의 사진은 남아있도록 함
   */
  const deleteRegisteredImages = (type: 'before' | 'after', imageId: number) => {
    if (!user) return alert('고객을 선택해주세요');

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
      getUserData(user.reservationId);
    }
  };

  /**
   * 리뷰등록~~!
   */
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.content === '') return alert('내용을 입력해주세요');
    if (formData.title === '') return alert('제목을 입력해주세요');
    if (!user) return alert('고객을 선택해주세요');

    const reservationId = user.reservationId;
    const data = {
      ...formData,
      ...imageForms,
    };

    console.log(data);

    try {
      await postReview(reservationId, data);
      router.push('/review');
    } catch (err) {
      console.log(err);
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
