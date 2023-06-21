import React, { useEffect, useState } from 'react';
import { UserHistoryData } from '@/types/api/user';
import useUserHistory from '@/hook/useUserHistory';
import ReservationForm from '../ReservationForm';
import CompletedService from '../CompletedService';
import HistoryLayout from './HistoryLayout';

interface HistoryProps {
  type: 'MANAGER' | 'MEMBER'; // 매니저의 히스토리와 멤버의 히스토리를 불러오는 api가 달라 type을 받아 분기처리합니다
  username: string; // 모달 상단에 포함 될 고객명
  memberId: number; // 예약내역을 조회 할 멤버아이디
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>; // 히스토리 모달의 open상태를 관리하는 setState
}

function History({ type, username, memberId, setIsOpen }: HistoryProps) {
  const [clickedReservationId, setClickedReservationId] = useState(0);
  const [userHistory, setUserHistory] = useState<UserHistoryData[]>([]);
  const [isReservationFormOpen, setIsReservationFormOpen] = useState(false);
  const [isCompletedServiceFormOpen, setIsCompletedServiceFormOpen] = useState(false);
  const [historyPage, setHistoryPage] = useState({ page: 1, totalCount: 5 });

  const { mutate: userHistoryMutate, isLoading } = useUserHistory((data) => {
    const currentData = data.data;
    setUserHistory(currentData.content);
    setHistoryPage((prev) => ({ ...prev, totalCount: currentData.total }));
  });

  const onHistoryPaging = (page: number) => {
    setHistoryPage((prev) => ({ ...prev, page }));
    if (type === 'MANAGER') null;
    if (type === 'MEMBER') userHistoryMutate({ memberId, page: page - 1 });
  };

  const OpenReservationForm = (reservationId: number) => {
    setClickedReservationId(reservationId);
    setIsReservationFormOpen(true);
  };

  const OpenCompletedServiceForm = (reservationId: number) => {
    setClickedReservationId(reservationId);
    setIsCompletedServiceFormOpen(true);
  };

  useEffect(() => {
    // 매니저의 히스토리와 멤버의 히스토리를 불러오는 api가 분리되어있어 다음과 같이 나누었습니다
    if (type === 'MANAGER') null; // 매니저 예약히스토리 불러오기
    if (type === 'MEMBER') userHistoryMutate({ memberId, page: 0 });
  }, []);

  return (
    <>
      <HistoryLayout
        setIsOpen={setIsOpen}
        username={username}
        isLoading={isLoading}
        userHistory={userHistory}
        historyPage={historyPage}
        OpenReservationForm={OpenReservationForm}
        OpenCompletedServiceForm={OpenCompletedServiceForm}
        onHistoryPaging={onHistoryPaging}
      />
      {isReservationFormOpen && <ReservationForm setIsOpen={setIsReservationFormOpen} />}
      {isCompletedServiceFormOpen && <CompletedService setIsOpen={setIsCompletedServiceFormOpen} />}
    </>
  );
}

export default History;
