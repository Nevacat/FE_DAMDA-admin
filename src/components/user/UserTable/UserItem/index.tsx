import React from 'react';
import * as T from '@/styles/common/table.style';
import { ServiceState } from '@/types/serviceState';
import { StateButton } from '@/styles/common/StateButton';

function UserItem() {
  return (
    <T.Tr>
      <T.Td>홍길동</T.Td>
      <T.Td>010-0000-0000</T.Td>
      <T.Td>서울 동대문구</T.Td>
      <T.Td>
        <StateButton state={ServiceState.WAITING_FOR_ACCEPT_MATCHING}>
          {ServiceState.WAITING_FOR_ACCEPT_MATCHING}
        </StateButton>
      </T.Td>
      <T.Td>2023-05-21 14:23</T.Td>
      <T.Td>최대여덟글자메모</T.Td>
      <T.Td>ASDE9B</T.Td>
      <T.Td>
        <StateButton state={'blue'}>예약내역</StateButton>
      </T.Td>
    </T.Tr>
  );
}

export default UserItem;
