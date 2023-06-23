import React, { useEffect, useState } from 'react';
import { UserHistoryData } from '@/types/api/user';
import useUserHistory from '@/hook/useUserHistory';
import ReservationForm from '../ReservationForm';
import CompletedService from '../CompletedService';
import HistoryLayout from './HistoryLayout';
import useManagerHistory from '@/hook/useManagerHistory';

interface HistoryProps {
  type: 'MANAGER' | 'MEMBER'; // 매니저의 히스토리와 멤버의 히스토리를 불러오는 api가 달라 type을 받아 분기처리합니다
  username: string; // 모달 상단에 포함 될 고객명
  userId: number; // 예약내역을 조회 할 멤버아이디
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>; // 히스토리 모달의 open상태를 관리하는 setState
}

function History({ type, username, userId, setIsOpen }: HistoryProps) {
  const [clickedReservationId, setClickedReservationId] = useState(0);
  const [userHistory, setUserHistory] = useState<UserHistoryData[]>([]);
  const [isReservationFormOpen, setIsReservationFormOpen] = useState(false);
  const [isCompletedServiceFormOpen, setIsCompletedServiceFormOpen] = useState(false);
  const [historyPage, setHistoryPage] = useState({ page: 1, totalCount: 5 });

  const { mutate: userHistoryMutate, isLoading: isUserLoading } = useUserHistory((data) => {
    const currentData = data.data;
    setUserHistory(currentData.content);
    setHistoryPage((prev) => ({ ...prev, totalCount: currentData.total }));
  });

  const { mutate: managerHistoryMutate, isLoading: isManagerLoading } = useManagerHistory((data) => {
    const currentData = data.data;
    setUserHistory(currentData.content);
    setHistoryPage((prev) => ({ ...prev, totalCount: currentData.total }));
  });

  const onHistoryPaging = (page: number) => {
    setHistoryPage((prev) => ({ ...prev, page }));
    if (type === 'MANAGER') managerHistoryMutate({ managerId: userId, page: page - 1 });
    if (type === 'MEMBER') userHistoryMutate({ memberId: userId, page: page - 1 });
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
    if (type === 'MANAGER') return managerHistoryMutate({ managerId: userId, page: 0 });
    if (type === 'MEMBER') return userHistoryMutate({ memberId: userId, page: 0 });
  }, []);

  return (
    <>
      <HistoryLayout
        setIsOpen={setIsOpen}
        username={username}
        isLoading={isUserLoading || isManagerLoading}
        userHistory={userHistory}
        historyPage={historyPage}
        OpenReservationForm={OpenReservationForm}
        OpenCompletedServiceForm={OpenCompletedServiceForm}
        onHistoryPaging={onHistoryPaging}
      />
      {isReservationFormOpen && (
        <ReservationForm reservationId={clickedReservationId} setIsOpen={setIsReservationFormOpen} />
      )}
      {isCompletedServiceFormOpen && (
        <CompletedService reservationId={clickedReservationId} setIsOpen={setIsCompletedServiceFormOpen} />
      )}
    </>
  );
}

export default History;
