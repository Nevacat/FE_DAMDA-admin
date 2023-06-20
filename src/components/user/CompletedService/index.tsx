import ModalContainer from '@/components/common/ModalContainer';
import TopBarGray from '@/components/common/TopBarGray';
import React from 'react';

interface CompletedServiceProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function CompletedService({ setIsOpen }: CompletedServiceProps) {
  return (
    <ModalContainer setIsOpen={setIsOpen}>
      <>
        <TopBarGray title="매니저 서비스 완료 폼" setIsOpen={setIsOpen} />
        <div></div>
      </>
    </ModalContainer>
  );
}

export default CompletedService;
