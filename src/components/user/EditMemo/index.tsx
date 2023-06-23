import React, { useRef, useState } from 'react';
import * as S from './style';
import ModalContainer from '@/components/common/ModalContainer';
import { StateButton } from '@/styles/common/StateButton';
import TopBarGray from '@/components/common/TopBarGray';
import { modifyMemo } from '@/api/user';

interface ConfirmProps {
  userId: number;
  memo: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onConfirmEditMemo: (id: number, memo: string) => void;
}

function EditMemo({ userId, memo, setIsOpen, onConfirmEditMemo }: ConfirmProps) {
  const [editedMemo, setEditedMemo] = useState(memo);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value.replace('\n', '');
    setEditedMemo(text);
  };

  return (
    <ModalContainer setIsOpen={setIsOpen}>
      <S.Container>
        <TopBarGray title="고객 메모" setIsOpen={setIsOpen} />
        <S.Memo>
          <textarea onChange={onChange} maxLength={100} value={editedMemo}></textarea>
        </S.Memo>
        <S.Buttons>
          <StateButton onClick={() => setIsOpen(false)}>취소</StateButton>
          <StateButton state={'blue'} onClick={() => onConfirmEditMemo(userId, editedMemo)}>
            저장
          </StateButton>
        </S.Buttons>
      </S.Container>
    </ModalContainer>
  );
}

export default EditMemo;
