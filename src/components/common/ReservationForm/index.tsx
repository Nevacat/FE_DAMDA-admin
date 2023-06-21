import React, { useEffect, useState } from 'react';
import ModalContainer from '@/components/common/ModalContainer';
import * as S from './style';
import TopBarGray from '@/components/common/TopBarGray';
import { useQuery } from '@tanstack/react-query';
import { getReservationFormDetail } from '@/api/user';
import { ReservationFormDetailData } from '@/types/api/user';

interface ReservationFormProp {
  reservationId: number;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ReservationForm({ reservationId, setIsOpen }: ReservationFormProp) {
  const [formData, setFormData] = useState<ReservationFormDetailData | null>(null);
  const { data, isLoading } = useQuery(['reservationForm', 'detail'], () => getReservationFormDetail(reservationId));

  useEffect(() => {
    if (!data) return;
    setFormData(data.data);
  }, [data]);

  return (
    <ModalContainer setIsOpen={setIsOpen}>
      <>
        <TopBarGray title="고객예약 폼" setIsOpen={setIsOpen} />
        {isLoading && <div className="message">데이터를 불러오고 있습니다.</div>}
        {formData && (
          <S.ReservationForm>
            <S.UserInfo>
              <S.InfoTitle>고객 정보</S.InfoTitle>
              <S.Row>
                <div>이름</div>
                <div>{formData.applicantName}</div>
              </S.Row>
              <S.Row>
                <div>연락처</div>
                <div>{formData.applicantContactInfo}</div>
              </S.Row>
              <S.Row>
                <div>주소</div>
                <div>{formData.address}</div>
              </S.Row>
            </S.UserInfo>
            <S.ServiceInfo>
              <S.InfoTitle>서비스 신청 정보</S.InfoTitle>
              <S.Row>
                <div>옷 분량</div>
                <div>{formData.afewServings}</div>
              </S.Row>
              <S.Row>
                <div>소요시간</div>
                <div>{formData.serviceDuration}</div>
              </S.Row>
            </S.ServiceInfo>
            <S.ReservationInfo>
              <S.InfoTitle>예약 정보</S.InfoTitle>
              <S.Row>
                <div>서비스 날짜</div>
                <div>{formData.serviceDate.replace(/(?<=\s).+/gi, '')}</div>
              </S.Row>
              <S.Row>
                <div>서비스 시간</div>
                <div>{formData.serviceDate.replace(/.+(?=\s)/gi, '')}</div>
              </S.Row>
            </S.ReservationInfo>
            <S.DetailInfo>
              <S.InfoTitle>세부 정보</S.InfoTitle>
              <S.Row>
                <div>주차여부</div>
                <div>{formData.parkingAvailable}</div>
              </S.Row>
              <S.Row>
                <div>출입정보</div>
                <div>{formData.reservationEnter}</div>
              </S.Row>
              <S.Row>
                <div>매니저가 알아야 할 정보</div>
                <div>{formData.reservationNote}</div>
              </S.Row>
              <S.Row>
                <div>요청사항</div>
                <div>{formData.reservationRequest}</div>
              </S.Row>
            </S.DetailInfo>
            <S.MoreInfo>
              <S.InfoTitle>기타 정보</S.InfoTitle>
              <S.Row>
                <div>추천인 코드</div>
                <div>{formData.discountCode}</div>
              </S.Row>
              <S.Row>
                <div>열다 인지 경로</div>
                <div>{formData.learnedRoute}</div>
              </S.Row>
            </S.MoreInfo>
          </S.ReservationForm>
        )}
      </>
    </ModalContainer>
  );
}

export default ReservationForm;
