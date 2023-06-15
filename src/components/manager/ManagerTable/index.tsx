import React from 'react';

import ManagerItem from './ManagerItem';

import * as G from '@/styles/common/table.style';
import * as S from './style';

function ManagerTable({ data, category }: any) {
  let content;
  if (
    (data === 'waiting' && category === 'all') ||
    (data === 'waiting' && category === 'waiting') ||
    (data === 'pending' && category === 'pending') ||
    (data === 'inactive' && category === 'inactive')
  ) {
    content = (
      <G.Thead>
        <tr>
          <S.ManagerTh scope="col">이름</S.ManagerTh>
          <S.ManagerTh scope="col">연락처</S.ManagerTh>
          <S.ManagerTh scope="col">거주지</S.ManagerTh>
          <S.ManagerTh scope="col">활동지역</S.ManagerTh>
          <S.ManagerTh scope="col">레벨</S.ManagerTh>
          <S.ManagerTh scope="col">자격증</S.ManagerTh>
          <S.ManagerTh scope="col">운전여부</S.ManagerTh>
          <S.ManagerTh scope="col">지원 폼</S.ManagerTh>
          <S.ManagerTh scope="col">예약 내역</S.ManagerTh>
          <S.ManagerTh scope="col">상태</S.ManagerTh>
          <S.ManagerTh scope="col">메모</S.ManagerTh>
        </tr>
      </G.Thead>
    );
  }

  return (
    <G.TableContainer className="content">
      <G.Table>
        {content}

        <tbody>
          {/* ----------- WAITING ----------- */}
          {data === 'waiting' && category === 'all' && '매니저 신청 관리' && (
            <tr>
              <S.Title colSpan={11}>매니저 신청 관리</S.Title>
            </tr>
          )}
          {data === 'waiting' && category === 'all' && <ManagerItem />}
          {data === 'waiting' && category === 'waiting' && <ManagerItem />}

          {/* ----------- PENDING ----------- */}
          {data === 'pending' && category === 'all' && '보류 매니저' && (
            <tr>
              <S.Title colSpan={11}>보류 매니저</S.Title>
            </tr>
          )}
          {data === 'pending' && category === 'all' && <ManagerItem />}
          {/* 기존 매니저 중 보류 매니저.map() */}
          {data === 'pending' && category === 'pending' && <S.Title colSpan={11}>기존 매니저</S.Title>}
          {data === 'pending' && category === 'pending' && <ManagerItem />}

          {/* 예비 매니저 중 보류 매니저.map() */}
          {data === 'pending' && category === 'pending' && <S.Title colSpan={11}>예비 매니저</S.Title>}
          {data === 'pending' && category === 'pending' && <ManagerItem />}

          {/* ----------- INACTIVE ----------- */}
          {data === 'inactive' && category === 'all' && '활동 불가 매니저' && (
            <tr>
              <S.Title colSpan={11}>활동 불가 매니저</S.Title>
            </tr>
          )}
          {data === 'inactive' && category === 'all' && <ManagerItem />}
          {/* 기존 매니저 중 활동 불가 매니저.map() */}
          {data === 'inactive' && category === 'inactive' && <S.Title colSpan={11}>기존 매니저</S.Title>}
          {data === 'inactive' && category === 'inactive' && <ManagerItem />}

          {/* 예비 매니저 중 활동 불가 매니저.map() */}
          {data === 'inactive' && category === 'inactive' && <S.Title colSpan={11}>예비 매니저</S.Title>}
          {data === 'inactive' && category === 'inactive' && <ManagerItem />}
        </tbody>
      </G.Table>
    </G.TableContainer>
  );
}

export default ManagerTable;
