import React from 'react';

import ManagerItem from './ManagerItem';

import * as G from '@/styles/common/table.style';
import * as S from './style';

function ManagerTable({ waiting, pending, inactive, category }: any) {
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

  return (
    <G.TableContainer className="content">
      <G.Table>
        {content}

        <tbody>
          {/* ----------- WAITING ----------- */}
          {waiting && category === 'all' && '매니저 신청 관리' && (
            <tr>
              <S.Title colSpan={11}>매니저 신청 관리</S.Title>
            </tr>
          )}
          {waiting &&
            category === 'all' &&
            waiting?.map((manager: any, index: number) => <ManagerItem key={index} data={manager} />)}
          {waiting &&
            category === 'waiting' &&
            waiting?.map((manager: any, index: number) => <ManagerItem key={index} data={manager} />)}

          {/* ----------- PENDING ----------- */}
          {pending && category === 'all' && '보류 매니저' && (
            <tr>
              <S.Title colSpan={11}>보류 매니저</S.Title>
            </tr>
          )}
          {pending &&
            category === 'all' &&
            pending?.map((manager: any, index: number) => <ManagerItem key={index} data={manager} />)}
          {/* 기존 매니저 중 보류 매니저.map() */}
          {pending && category === 'pending' && (
            <tr>
              <S.Title colSpan={11}>기존 매니저</S.Title>
            </tr>
          )}
          {pending &&
            category === 'pending' &&
            prevActivePending?.map((manager: any, index: number) => <ManagerItem key={index} data={manager} />)}

          {/* 예비 매니저 중 보류 매니저.map() */}
          {pending && category === 'pending' && (
            <tr>
              <S.Title colSpan={11}>예비 매니저</S.Title>
            </tr>
          )}
          {pending &&
            category === 'pending' &&
            prevWaitingPending?.map((manager: any, index: number) => <ManagerItem key={index} data={manager} />)}

          {/* ----------- INACTIVE ----------- */}
          {inactive && category === 'all' && '활동 불가 매니저' && (
            <tr>
              <S.Title colSpan={11}>활동 불가 매니저</S.Title>
            </tr>
          )}
          {inactive &&
            category === 'all' &&
            inactive?.map((manager: any, index: number) => <ManagerItem key={index} data={manager} />)}
          {/* 기존 매니저 중 활동 불가 매니저.map() */}
          {inactive && category === 'inactive' && (
            <tr>
              <S.Title colSpan={11}>기존 매니저</S.Title>
            </tr>
          )}
          {inactive &&
            category === 'inactive' &&
            prevActiveInActive?.map((manager: any, index: number) => <ManagerItem key={index} data={manager} />)}

          {/* 예비 매니저 중 활동 불가 매니저.map() */}
          {inactive && category === 'inactive' && (
            <tr>
              <S.Title colSpan={11}>예비 매니저</S.Title>
            </tr>
          )}
          {inactive &&
            category === 'inactive' &&
            prevWaitingInActive?.map((manager: any, index: number) => <ManagerItem key={index} data={manager} />)}
        </tbody>
      </G.Table>
    </G.TableContainer>
  );
}

export default ManagerTable;
