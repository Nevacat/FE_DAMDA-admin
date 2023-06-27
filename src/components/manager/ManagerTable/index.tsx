import React, { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';

import ManagerItem from './ManagerItem';
import { PaginationContainer } from '@/components/common/PaginationContainer/style';

import * as G from '@/styles/common/table.style';
import * as S from './style';
import useManagerPageStore from '@/store/manager';

function ManagerTable({
  waiting,
  pending,
  inactive,
  category,
  waitingTotal,
  waitingRefetch,
  pendingRefetch,
  pendingTotal,
  inactiveRefetch,
  inactiveTotal,
}: any) {
  const { waitingPage, pendingPage, inactivePage, setWaitingPage, setPendingPage, setInactivePage } =
    useManagerPageStore((state) => state);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const prevActivePending = pending?.filter((item: any) => item.prevManagerStatus === 'ACTIVE');
  const prevWaitingPending = pending?.filter((item: any) => item.prevManagerStatus === 'WAITING');

  const prevActiveInActive = inactive?.filter((item: any) => item.prevManagerStatus === 'ACTIVE');
  const prevWaitingInActive = inactive?.filter((item: any) => item.prevManagerStatus === 'WAITING');

  let content;
  if (
    (waiting && category === 'all') ||
    (waiting && category === 'waiting') ||
    (pending && category === 'pending') ||
    (inactive && category === 'inactive')
  ) {
    content = (
      <>
        <colgroup>
          <col width="5%" />
          <col width="11%" />
          <col width="14%" />
          <col width="1%" />
        </colgroup>

        <G.Thead>
          <tr>
            <S.ManagerTh scope="col" style={{ textAlign: 'left' }}>
              이름
            </S.ManagerTh>
            <S.ManagerTh scope="col" style={{ textAlign: 'left' }}>
              연락처
            </S.ManagerTh>
            <S.ManagerTh scope="col" style={{ textAlign: 'left' }}>
              활동지역
            </S.ManagerTh>
            <S.ManagerTh scope="col" style={{ textAlign: 'left' }}>
              레벨
            </S.ManagerTh>
            <S.ManagerTh scope="col" style={{ textAlign: 'left' }}>
              자격증
            </S.ManagerTh>
            <S.ManagerTh scope="col" style={{ textAlign: 'left' }}>
              운전여부
            </S.ManagerTh>
            <S.ManagerTh scope="col" style={{ textAlign: 'left' }}>
              지원 폼
            </S.ManagerTh>
            <S.ManagerTh scope="col" style={{ textAlign: 'left' }}>
              예약 내역
            </S.ManagerTh>
            <S.ManagerTh scope="col" style={{ textAlign: 'left' }}>
              상태
            </S.ManagerTh>
            <S.ManagerTh scope="col" style={{ textAlign: 'left' }}>
              메모
            </S.ManagerTh>
          </tr>
        </G.Thead>
      </>
    );
  }

  const waitingPageHandler = (pageNumber: number) => {
    setWaitingPage(pageNumber);
    waitingRefetch();
  };

  const pendingPageHandler = (pageNumber: number) => {
    setPendingPage(pageNumber);
    pendingRefetch();
  };

  const inactivePageHandler = (pageNumber: number) => {
    setInactivePage(pageNumber);
    inactiveRefetch();
  };

  const allPageHandler = (pageNumber: number) => {
    setWaitingPage(pageNumber);
    setPendingPage(pageNumber);
    setInactivePage(pageNumber);

    waitingRefetch();
    pendingRefetch();
    inactiveRefetch();
  };

  return (
    <>
      {mounted && (
        <G.TableContainer className="content">
          <G.Table>
            {content}

            <tbody>
              {/* ---------------------- 전체 ----------------------*/}
              {waiting && category === 'all' && '매니저 신청 관리' && (
                <tr>
                  <S.Title colSpan={11}>매니저 신청 관리</S.Title>
                </tr>
              )}
              {waiting &&
                category === 'all' &&
                waiting?.map((manager: any, index: number) => <ManagerItem key={index} data={manager} />)}

              {pending && category === 'all' && '보류 매니저' && (
                <tr>
                  <S.Title colSpan={11}>보류 매니저</S.Title>
                </tr>
              )}
              {pending &&
                category === 'all' &&
                pending?.map((manager: any, index: number) => <ManagerItem key={index} data={manager} />)}

              {inactive && category === 'all' && '활동 불가 매니저' && (
                <tr>
                  <S.Title colSpan={11}>활동 불가 매니저</S.Title>
                </tr>
              )}
              {inactive &&
                category === 'all' &&
                inactive?.map((manager: any, index: number) => <ManagerItem key={index} data={manager} />)}

              {category === 'all' && (
                <PaginationContainer>
                  <Pagination
                    hideFirstLastPages={true}
                    linkClassPrev="prev"
                    linkClassNext="next"
                    activePage={waitingPage}
                    itemsCountPerPage={30}
                    totalItemsCount={waitingTotal + pendingTotal + inactiveTotal}
                    pageRangeDisplayed={Math.ceil(waitingTotal + pendingTotal + inactiveTotal / 10)}
                    onChange={allPageHandler}
                  />
                </PaginationContainer>
              )}

              {/* ---------------------- 매니저 신청 관리 ----------------------*/}
              {waiting &&
                category === 'waiting' &&
                waiting?.map((manager: any, index: number) => <ManagerItem key={index} data={manager} />)}

              {waiting && category === 'waiting' && (
                <PaginationContainer>
                  <Pagination
                    hideFirstLastPages={true}
                    linkClassPrev="prev"
                    linkClassNext="next"
                    activePage={waitingPage}
                    itemsCountPerPage={10}
                    totalItemsCount={waitingTotal}
                    pageRangeDisplayed={Math.ceil(waitingTotal / 10)}
                    onChange={waitingPageHandler}
                  />
                </PaginationContainer>
              )}

              {/* ---------------------- 보류 매니저 ----------------------*/}
              {/* 기존 매니저 */}
              {pending && category === 'pending' && (
                <tr>
                  <S.Title colSpan={11}>기존 매니저</S.Title>
                </tr>
              )}
              {pending &&
                category === 'pending' &&
                prevActivePending?.map((manager: any, index: number) => <ManagerItem key={index} data={manager} />)}

              {/* 예비 매니저 */}
              {pending && category === 'pending' && (
                <tr>
                  <S.Title colSpan={11}>예비 매니저</S.Title>
                </tr>
              )}
              {pending &&
                category === 'pending' &&
                prevWaitingPending?.map((manager: any, index: number) => <ManagerItem key={index} data={manager} />)}

              {pending && category === 'pending' && (
                <PaginationContainer>
                  <Pagination
                    hideFirstLastPages={true}
                    linkClassPrev="prev"
                    linkClassNext="next"
                    activePage={pendingPage}
                    itemsCountPerPage={10}
                    totalItemsCount={pendingTotal}
                    pageRangeDisplayed={Math.ceil(pendingTotal / 10)}
                    onChange={pendingPageHandler}
                  />
                </PaginationContainer>
              )}

              {/* ---------------------- 활동 불가 ----------------------*/}
              {/* 기존 매니저 */}
              {inactive && category === 'inactive' && (
                <tr>
                  <S.Title colSpan={11}>기존 매니저</S.Title>
                </tr>
              )}
              {inactive &&
                category === 'inactive' &&
                prevActiveInActive?.map((manager: any, index: number) => <ManagerItem key={index} data={manager} />)}

              {/* 예비 매니저 */}
              {inactive && category === 'inactive' && (
                <tr>
                  <S.Title colSpan={11}>예비 매니저</S.Title>
                </tr>
              )}
              {inactive &&
                category === 'inactive' &&
                prevWaitingInActive?.map((manager: any, index: number) => <ManagerItem key={index} data={manager} />)}

              {inactive && category === 'inactive' && (
                <PaginationContainer>
                  <Pagination
                    hideFirstLastPages={true}
                    linkClassPrev="prev"
                    linkClassNext="next"
                    activePage={inactivePage}
                    itemsCountPerPage={10}
                    totalItemsCount={inactiveTotal}
                    pageRangeDisplayed={Math.ceil(inactiveTotal / 10)}
                    onChange={inactivePageHandler}
                  />
                </PaginationContainer>
              )}
            </tbody>
          </G.Table>
        </G.TableContainer>
      )}
    </>
  );
}

export default ManagerTable;
