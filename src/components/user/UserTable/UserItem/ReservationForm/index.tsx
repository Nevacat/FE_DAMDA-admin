import React from 'react';
import ModalContainer from '@/components/common/ModalContainer';
import * as S from './style';
import Image from 'next/image';
import TopBarGray from '@/components/common/TopBarGray';

interface ReservationFormProp {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ReservationForm({ setIsOpen }: ReservationFormProp) {
  return (
    <ModalContainer setIsOpen={setIsOpen}>
      <>
        <TopBarGray title="고객예약 폼" setIsOpen={setIsOpen} />
        <S.ReservationForm>
          <S.UserInfo>
            <S.InfoTitle>고객 정보</S.InfoTitle>
            <S.Row>
              <div>이름</div>
              <div>김아무개</div>
            </S.Row>
            <S.Row>
              <div>연락처</div>
              <div>010-0000-0000</div>
            </S.Row>
            <S.Row>
              <div>주소</div>
              <div>서울 동대문구 상세주소 푸르지오 12동 12호</div>
            </S.Row>
          </S.UserInfo>
          <S.ServiceInfo>
            <S.InfoTitle>서비스 신청 정보</S.InfoTitle>
            <S.Row>
              <div>옷 분량</div>
              <div>5인</div>
            </S.Row>
            <S.Row>
              <div>소요시간</div>
              <div>5시간</div>
            </S.Row>
          </S.ServiceInfo>
          <S.ReservationInfo>
            <S.InfoTitle>예약 정보</S.InfoTitle>
            <S.Row>
              <div>서비스 날짜</div>
              <div>2023-12-12</div>
            </S.Row>
            <S.Row>
              <div>서비스 시간</div>
              <div>13:00</div>
            </S.Row>
          </S.ReservationInfo>
          <S.DetailInfo>
            <S.InfoTitle>세부 정보</S.InfoTitle>
            <S.Row>
              <div>주차여부</div>
              <div>최대 50자</div>
            </S.Row>
            <S.Row>
              <div>출입정보</div>
              <div>현관 종+1234</div>
            </S.Row>
            <S.Row>
              <div>매니저가 알아야 할 정보</div>
              <div>집에 아이가 있어요 어쩌구 저쩌구</div>
            </S.Row>
            <S.Row>
              <div>요청사항</div>
              <div>최대 150자 어쩌구저쩌구 14px line-height 1.6까지 줄줄줄</div>
            </S.Row>
          </S.DetailInfo>
          <S.MoreInfo>
            <S.InfoTitle>기타 정보</S.InfoTitle>
            <S.Row>
              <div>추천인 코드</div>
              <div>DE23FE</div>
            </S.Row>
            <S.Row>
              <div>열다 인지 경로</div>
              <div>지인을 통해서 </div>
            </S.Row>
          </S.MoreInfo>
        </S.ReservationForm>
      </>
    </ModalContainer>
  );
}

export default ReservationForm;
