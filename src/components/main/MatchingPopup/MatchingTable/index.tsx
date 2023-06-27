import React, { useState } from 'react';
import * as T from '@/styles/common/table.style';
import TableItem from '../TableItem';
import { getMatchingData } from '@/api/main';
import { useQuery } from '@tanstack/react-query';
import { MatchingData } from '@/types/api/main';

interface MatchingTableProps {
  reservationId: number;
  setSelectedItems: React.Dispatch<React.SetStateAction<number[]>>;
  selectedItems: number[];
}

function MatchingTable({ reservationId, setSelectedItems, selectedItems }: MatchingTableProps) {
  const { data: resData } = useQuery<MatchingData>(['MatchingData'], () =>
    getMatchingData(reservationId).then((res) => res.data),
  );

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, matchId: number) => {
    if (event.target.checked) {
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, matchId]);
    } else {
      setSelectedItems((prevSelectedItems) => prevSelectedItems.filter((id) => id !== matchId));
    }
  };

  return (
    <div>
      <T.Table>
        <colgroup>
          <col width="2%" />
          <col width="7%" />
          <col width="7%" />
          <col width="7%" />
          <col width="12%" />
          <col width="7%" />
          <col width="4%" />
          <col width="3%" />
          <col width="3%" />
          <col width="10%" />
        </colgroup>
        <T.Thead>
          <T.Tr>
            <T.Th></T.Th>
            <T.Th>응답 여부</T.Th>
            <T.Th>응답 일자</T.Th>
            <T.Th>매니저 이름</T.Th>
            <T.Th>매니저 연락처</T.Th>
            <T.Th>활동지역</T.Th>
            <T.Th>레벨</T.Th>
            <T.Th>자격증</T.Th>
            <T.Th>운전여부</T.Th>
            <T.Th>Action</T.Th>
          </T.Tr>
        </T.Thead>
        <T.Tbody>
          {resData &&
            resData.map((item: MatchingData) => {
              const { matchingResponse, matching } = item;
              const isCheckboxDisabled = matchingResponse === 'WAITING' || matching;
              const isChecked = selectedItems.includes(item.matchId) && matchingResponse !== 'NO';
              return (
                <TableItem
                  key={item.matchId}
                  data={item}
                  isChecked={isChecked}
                  isCheckboxDisabled={isCheckboxDisabled}
                  onCheckboxChange={handleCheckboxChange}
                />
              );
            })}
        </T.Tbody>
      </T.Table>
    </div>
  );
}

export default MatchingTable;
