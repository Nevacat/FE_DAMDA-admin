import React, { useEffect, useState } from 'react';
import * as S from './style';
import MatchingTable from './MatchingTable';
import { postMatching } from '@/api/main';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';

interface MatchingPopupProps {
  reservationId: number;
  togglePopup: () => void; // Add togglePopup prop
}

function MatchingPopup({ reservationId, togglePopup }: MatchingPopupProps) {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    setIsButtonEnabled(selectedItems.length > 0);
  }, [selectedItems]);

  const matchingMutation = useMutation(
    (reservationData: { reservationId: number; selectedItemsString: string }) =>
      postMatching(reservationData.reservationId, reservationData.selectedItemsString),
    {
      onSuccess: () => {
        toast.success('매칭 신청이 완료되었습니다.');
        togglePopup();
      },
      onError: () => {
        toast.error('매칭 신청에 실패했습니다.');
      },
    },
  );

  const handleDataRequest = () => {
    if (selectedItems.length === 0) {
      return;
    }
    const selectedItemsString = selectedItems.join(',');
    matchingMutation.mutate({ reservationId, selectedItemsString });
    setSelectedItems([]);
  };

  return (
    <S.MatchingContainer>
      <S.MatchingPopupWrapper>
        <S.MatchingPopupHeader>
          <S.MatchingPopupTitle>매칭 신청 매니저 목록</S.MatchingPopupTitle>
          <S.CloseButton onClick={togglePopup} />
        </S.MatchingPopupHeader>
        <S.MatchingPopupContent>
          <MatchingTable
            reservationId={reservationId}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        </S.MatchingPopupContent>
        <S.ReqButton enabled={isButtonEnabled} onClick={handleDataRequest}>
          매칭 승인
        </S.ReqButton>
      </S.MatchingPopupWrapper>
    </S.MatchingContainer>
  );
}

export default MatchingPopup;
