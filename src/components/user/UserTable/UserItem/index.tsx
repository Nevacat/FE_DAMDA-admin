import React, { useState } from 'react';
import * as T from '@/styles/common/table.style';
import * as S from './style';
import { StateButton } from '@/styles/common/StateButton';
import History from './History';

interface UserItemProp {
  user: {
    id: number;
    name: string;
    phoneNumber: string;
    address: string;
    serviceState: string;
    createdAt: string;
    memo: string;
    code: string;
  };
}

function UserItem({ user }: UserItemProp) {
  const [historyOpen, setHistoryOpen] = useState(false);

  return (
    <>
      <T.Tr>
        <T.Td>{user.name}</T.Td>
        <T.Td>{user.phoneNumber}</T.Td>
        <T.Td>{user.address}</T.Td>
        <T.Td>
          {/* <StateButton state={ServiceState[state]}>
          {ServiceState[state]}
        </StateButton> */}
          <StateButton state={'blue'}>서비스예약확정</StateButton>
        </T.Td>
        <T.Td>{user.createdAt}</T.Td>
        <S.Memo>{user.memo}</S.Memo>
        <T.Td>{user.code}</T.Td>
        <T.Td>
          <StateButton state={'blue'} onClick={() => setHistoryOpen(!historyOpen)}>
            예약내역
          </StateButton>
        </T.Td>
      </T.Tr>
      {historyOpen && (
        <>
          <History />
        </>
      )}
    </>
  );
}

export default UserItem;
