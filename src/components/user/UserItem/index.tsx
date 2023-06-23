import React, { useContext } from 'react';
import * as T from '@/styles/common/table.style';
import * as S from './style';
import { StateButton } from '@/styles/common/StateButton';
import { UserContext } from '@/pages/user';
import { ServiceState } from '@/types/serviceState';
import { UserData } from '@/types/api/user';

interface UserItemProp {
  user: UserData;
}

function UserItem({ user }: UserItemProp) {
  const context = useContext(UserContext);
  if (!context) return;
  const { OpenHistory } = context;

  const state = ServiceState[user.reservationStatus];

  return (
    <>
      <T.Tr>
        <T.Td>{user.name}</T.Td>
        <T.Td>{user.phoneNumber}</T.Td>
        <T.Td>{user.address}</T.Td>
        <T.Td>
          <StateButton state={user.reservationStatus}>{state}</StateButton>
        </T.Td>
        <T.Td>{user.createdAt.slice(0, 10)}</T.Td>
        <S.Memo>{user.memo}</S.Memo>
        <T.Td>{user.code}</T.Td>
        <T.Td>
          <StateButton state={'blue'} onClick={() => OpenHistory(user.id, user.name)}>
            예약내역
          </StateButton>
        </T.Td>
      </T.Tr>
    </>
  );
}

export default UserItem;
