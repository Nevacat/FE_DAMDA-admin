import React from 'react';
import * as T from '@/styles/common/table.style';
import { ServiceState } from '@/types/serviceState';
import { StateButton } from '@/styles/common/ServiceState';

function UserItem() {
  return (
    <T.Tr>
      <T.Td>홍길동</T.Td>
      <T.Td>010-0000-0000</T.Td>
      <T.Td>서울 동대문구</T.Td>
      <T.Td>
        <StateButton state={ServiceState.completed}>{ServiceState.completed}</StateButton>
      </T.Td>
      <T.Td>2023-05-21 14:23</T.Td>
      <T.Td>최대여덟글자메모</T.Td>
      <T.Td>ASDE9B</T.Td>
      <T.Td>
        <StateButton state={ServiceState.confirmation}>예약내역</StateButton>
      </T.Td>
    </T.Tr>
  );
}

export default UserItem;
