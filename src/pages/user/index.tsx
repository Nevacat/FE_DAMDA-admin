import CompletedService from '@/components/user/CompletedService';
import History from '@/components/user/History';
import ReservationForm from '@/components/user/ReservationForm';
import UserLayout from '@/components/user/UserLayout';
import React, { createContext, useState } from 'react';

interface UserContextProp {
  OpenReservationForm: (reservationId: number) => void;
  OpenCompletedServiceForm: (reservationId: number) => void;
  OpenHistory: (userId: number) => void;
}

export const UserContext = createContext<UserContextProp | null>(null);

function UserPage() {
  const [reservationFormData, setReservationFormData] = useState({}); // 고객예약폼에 들어 갈 데이터
  const [completedServiceData, setCompletedServiceData] = useState({}); // 매니저 서비스 완료 폼에 들어 갈 데이터
  const [userHistory, setUserHistory] = useState([]);
  const [isReservationFormOpen, setIsReservationFormOpen] = useState(false);
  const [isCompletedServiceFormOpen, setIsCompletedServiceFormOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  const OpenReservationForm = (reservationId: number) => {
    setReservationFormData({});
    setIsReservationFormOpen(true);
  };

  const OpenCompletedServiceForm = (reservationId: number) => {
    setCompletedServiceData({});
    setIsCompletedServiceFormOpen(true);
  };

  const OpenHistory = (userId: number) => {
    setUserHistory([]);
    setIsHistoryOpen(true);
  };

  return (
    <UserContext.Provider
      value={{
        OpenReservationForm,
        OpenCompletedServiceForm,
        OpenHistory,
      }}
    >
      <UserLayout />
      {isHistoryOpen && <History setIsOpen={setIsHistoryOpen} />}
      {isReservationFormOpen && <ReservationForm setIsOpen={setIsReservationFormOpen} />}
      {isCompletedServiceFormOpen && <CompletedService setIsOpen={setIsCompletedServiceFormOpen} />}
    </UserContext.Provider>
  );
}

export default UserPage;
