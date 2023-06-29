import React, { useEffect, useState } from 'react';
import Header from './Header';
import * as S from './style';
import TotalCard from './TotalCard';
import { useQuery } from '@tanstack/react-query';
import { getSubmitData } from '@/api/main';
import { MainData, Statistical } from '@/types/api/main';
import MainTable from './MainTable';
import Pagination from 'react-js-pagination';
import { PaginationContainer } from '../common/PaginationContainer/style';
import { formatDate } from './DateFormat';
import MatchingPopup from './MatchingPopup';

const cardData = [
  { name: '예약/매니저 매칭중', label: 'waiting' },
  { name: '매니저 매칭 수락 대기', label: 'matching' },
  { name: '서비스 예약 확정', label: 'confirmation' },
  { name: '서비스 완료', label: 'completed' },
  { name: '예약 취소', label: 'cancellation' },
];

const cardStatus = {
  WAITING_FOR_MANAGER_REQUEST: '예약/매니저 매칭중',
  WAITING_FOR_ACCEPT_MATCHING: '매니저 매칭 수락 대기',
  MANAGER_MATCHING_COMPLETED: '서비스 예약 확정',
  SERVICE_COMPLETED: '서비스 완료',
  RESERVATION_CANCELLATION: '예약 취소',
};

function MainLayout() {
  const [page, setPage] = useState(1);
  const [date, setDate] = useState<{ startDate: Date | null; endDate: Date | null }>({
    startDate: null,
    endDate: null,
  });

  const { data: resData, refetch } = useQuery<MainData>(['MainData', date, page], () =>
    getSubmitData(page - 1, formatDate(date.startDate), formatDate(date.endDate)).then((res) => res.data),
  );

  const { statistical, content, total } = resData || {};

  useEffect(() => {
    refetch(); // 페이지번호가 변경될 때 데이터 다시 불러오기
  }, [page, refetch]);

  useEffect(() => {
    setPage(1); // 날짜 필터가 변경되면 페이지를 1로 리셋
  }, [date, refetch]);

  const [selectedStatus, setSelectedStatus] = useState<string>('');

  const handlePageChange = (pageNumber: number) => {
    if (selectedStatus) {
      // 필터링된 상태에서 페이지 변경 시
      const filteredItems = content?.filter(
        (item) => cardStatus[item.reservationStatus] === selectedStatus
      );
      const totalPages = Math.ceil(filteredItems?.length || 0 / 10); // 전체 페이지 수 계산
      if (pageNumber > totalPages) {
        // 현재 페이지가 전체 페이지 수를 초과하면 1페이지로 이동
        setPage(1);
        return;
      }
    }
    setPage(pageNumber);
  };

  const reservationContent =
    selectedStatus.length !== 0
      ? content?.filter((item) => cardStatus[item.reservationStatus] === selectedStatus)
      : content;

  return (
    <S.MainSection>
      <Header date={date} setDate={setDate} />
      <S.TotalCardContainer>
        {statistical &&
          cardData.map((card) => (
            <TotalCard
              key={card.name}
              Total={statistical?.[card.label as keyof Statistical] || 0}
              CardName={card.name}
              selectedStatus={selectedStatus}
              setSelectedStatus={setSelectedStatus}
            />
          ))}
      </S.TotalCardContainer>
      <MainTable Content={reservationContent} page={page}/>
      <PaginationContainer>
        <Pagination
          hideFirstLastPages={true}
          linkClassPrev="prev"
          linkClassNext="next"
          activePage={resData ? page : 1}
          itemsCountPerPage={10}
          totalItemsCount={total || 1}
          pageRangeDisplayed={total ? Math.ceil(total / 10) : 1}
          onChange={handlePageChange}
        />
      </PaginationContainer>
    </S.MainSection>
  );
}

export default MainLayout;
