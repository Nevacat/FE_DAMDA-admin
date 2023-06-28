import React from 'react';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { getManagerForm } from '@/api/manager';

import * as S from './style';

interface ManagerSupportFormProps {
  id: number;
  setIsFormOpen: (isOpen: boolean) => void;
}

function ManagerSupportForm({ id, setIsFormOpen }: ManagerSupportFormProps) {
  const { data } = useQuery({
    queryKey: ['manager', id],
    queryFn: () => getManagerForm(id),
  });
  console.log(data);

  const formattedPhoneNumber = data?.managerPhoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');

  const renderDaysOfWeek = () => {
    return data?.activityDay.map((day: boolean, index: number) => {
      switch (index) {
        case 0:
          return day && <span className="day">월</span>;
        case 1:
          return day && <span className="day">화</span>;
        case 2:
          return day && <span className="day">수</span>;
        case 3:
          return day && <span className="day">목</span>;
        case 4:
          return day && <span className="day">금</span>;
        case 5:
          return day && <span className="day">토</span>;
        case 6:
          return day && <span className="day">일</span>;
        default:
          return null;
      }
    });
  };

  const seoul = data?.region.서울특별시.map((seoul: string, index: number) => (
    <span key={index} className="location">
      서울 {seoul}
    </span>
  ));
  const gyeonggi = data?.region.경기도.map((gyeonggi: string, index: number) => (
    <span key={index} className="location">
      경기도 {gyeonggi}
    </span>
  ));

  const renderCertificate = () => {
    if (data?.certificateStatus !== 'ETC') {
      switch (data?.certificateStatus) {
        case 'FIRST_RATE_OFF':
          return '1급 (off)';

        case 'SECOND_RATE_OFF':
          return '2급 (off)';

        case 'FIRST_RATE_ON':
          return '1급 (on)';

        case 'SECOND_RATE_ON':
          return '2급 (on)';

        case 'NONE':
          return '없음';

        default:
          break;
      }
    } else if (data?.certificateStatus === 'ETC') {
      return data?.certificateStatusEtc;
    }
  };

  return (
    <S.ManagerSupportForm>
      <header>
        <h2>매니저 지원 폼</h2>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsFormOpen(false);
          }}
        >
          <Image src="/icons/close-icon.svg" alt="close icon" width={24} height={24} />
        </button>
      </header>

      <div>
        <S.FormInfo>
          <h3>매니저 정보</h3>

          <dl>
            <div>
              <dt>이름</dt>
              <dd>{data?.managerName}</dd>
            </div>

            <div>
              <dt>연락처</dt>
              <dd>{formattedPhoneNumber}</dd>
            </div>

            <div>
              <dt>활동 가능 요일</dt>
              <dd>{renderDaysOfWeek()}</dd>
            </div>

            <div>
              <dt>활동 가능 지역</dt>
              <dd className="location-group">
                {seoul}
                {gyeonggi}
              </dd>
            </div>
          </dl>
        </S.FormInfo>

        <S.FormInfo>
          <h3>경력 정보</h3>

          <dl>
            <div>
              <dt>자격증</dt>
              <dd>{renderCertificate()}</dd>
            </div>

            <div>
              <dt>현장 경험</dt>
              <dd className="field-experience">{data?.fieldExperience}</dd>
            </div>

            <div>
              <dt>본업 유무</dt>
              <dd>{data?.mainJobStatusEtc}</dd>
            </div>
          </dl>
        </S.FormInfo>

        <S.FormInfo>
          <h3>추가 정보</h3>

          <dl>
            <div>
              <dt>자차 운전 여부</dt>
              <dd>{data?.vehicle ? '있음' : '없음'}</dd>
            </div>
          </dl>
        </S.FormInfo>
      </div>
    </S.ManagerSupportForm>
  );
}

export default ManagerSupportForm;
