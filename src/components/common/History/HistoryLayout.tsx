import React from 'react';
import ModalContainer from '@/components/common/ModalContainer';
import TopBarGray from '@/components/common/TopBarGray';
import * as S from './style';
import { StateButton } from '@/styles/common/StateButton';
import { PaginationContainer } from '../PaginationContainer/style';
import Pagination from 'react-js-pagination';
import { UserHistoryData } from '@/types/api/user';
import Loading from '../Loading';

interface HistoryProp {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  username: string;
  isLoading: boolean;
  userHistory: UserHistoryData[];
  historyPage: { page: number; totalCount: number };
  OpenReservationForm: (reservationId: number) => void;
  OpenCompletedServiceForm: (reservationId: number) => void;
  onHistoryPaging: (page: number) => void;
}

function HistoryLayout({
  setIsOpen,
  username,
  isLoading,
  userHistory,
  historyPage,
  OpenReservationForm,
  OpenCompletedServiceForm,
  onHistoryPaging,
}: HistoryProp) {
  return (
    <ModalContainer setIsOpen={setIsOpen}>
      <>
        <TopBarGray title={`${username}님의 예약내역`} setIsOpen={setIsOpen} />
        <S.Histories>
          {isLoading && (
            <div className="message">
              <Loading />
            </div>
          )}
          {!isLoading && userHistory.length === 0 ? (
            <div className="message">예약내역이 없습니다</div>
          ) : (
            userHistory.map((history) => (
              <S.HistoryItem key={history.id}>
                <S.Date>
                  <span>서비스 일시</span>
                  <span>{history.createdAt.slice(0, 10)}</span>
                </S.Date>
                <S.Buttons>
                  <StateButton state={'blue'} onClick={() => OpenReservationForm(history.id)}>
                    고객예약 폼
                  </StateButton>
                  <StateButton state={'blue'} onClick={() => OpenCompletedServiceForm(history.id)}>
                    매니저 서비스 완료 폼
                  </StateButton>
                </S.Buttons>
              </S.HistoryItem>
            ))
          )}
        </S.Histories>
        <PaginationContainer>
          <Pagination
            activePage={historyPage.page}
            itemsCountPerPage={5}
            totalItemsCount={historyPage.totalCount}
            hideFirstLastPages={true}
            linkClassPrev="prev"
            linkClassNext="next"
            onChange={onHistoryPaging}
          />
        </PaginationContainer>
      </>
    </ModalContainer>
  );
}

export default HistoryLayout;
