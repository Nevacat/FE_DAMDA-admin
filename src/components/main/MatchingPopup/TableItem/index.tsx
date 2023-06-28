import React, { ChangeEvent } from 'react';
import * as T from '@/styles/common/table.style';
import { CertificateEnum, MatchingData, MatchingStatusEnum } from '@/types/api/main';
import * as S from './style';
import { formatDate } from '../../DateFormat';
import History from '@/components/common/History';

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

  const [isOpen, setIsOpen] = React.useState(false);

  const handleHistoryClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  console.log(data.updateAt);
  return (
    <>
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
          <S.HistoryButton onClick={handleHistoryClick}>예약 히스토리</S.HistoryButton>
        </T.Td>
      </T.Tr>
      {isOpen && <History type="MANAGER" userId={data.managerId} username={data.name} setIsOpen={setIsOpen} />}
    </>
  );
}

export default TableItem;
