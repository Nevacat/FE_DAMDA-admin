import React, { ChangeEvent } from 'react';
import * as T from '@/styles/common/table.style';
import { CertificateEnum, MatchingData, MatchingStatusEnum } from '@/types/api/main';
import * as S from './style';
import { formatDate } from '../../DateFormat';

interface TableItemProps {
  data: MatchingData;
  isChecked: boolean;
  isCheckboxDisabled: boolean;
  onCheckboxChange: (event: ChangeEvent<HTMLInputElement>, matchId: number) => void;
}

function TableItem({ data, isChecked, isCheckboxDisabled, onCheckboxChange }: TableItemProps) {
  const resState = MatchingStatusEnum[data.matchingResponse];
  const certificate = CertificateEnum[data.certificate];
  const shouldHideCheckbox = data.matchingResponse === 'NO';

  console.log(data.updateAt);
  return (
    <T.Tr>
      <T.Td>
        <input
          type="checkbox"
          checked={isChecked}
          disabled={isCheckboxDisabled}
          onChange={(event) => onCheckboxChange(event, data.matchId)}
          style={{ display: shouldHideCheckbox ? 'none' : 'initial' }}
        />
      </T.Td>
      <T.Td>
        <S.ResState state={data.matchingResponse}>{resState}</S.ResState>
      </T.Td>
      <T.Td>{data.updateAt}</T.Td>
      <T.Td>{data.name}</T.Td>
      <T.Td>{data.phone}</T.Td>
      <T.Td>{data.activityArea}</T.Td>
      <T.Td>{data.level}</T.Td>
      <T.Td>{certificate}</T.Td>
      <T.Td>
        <S.ResState state={data.driving}>{data.driving ? 'O' : 'X'}</S.ResState>
      </T.Td>
      <T.Td>
        <S.HistoryButton>예약 히스토리</S.HistoryButton>
      </T.Td>
    </T.Tr>
  );
}

export default TableItem;
