import React, { useEffect, useState } from 'react';
import { FormChangeBtn, FormChangeModal } from '@/styles/pages/form/form.styled';
import Change from '@/components/form/components/svg/change';
import { AnimatePresence } from 'framer-motion';

function ChangeButton() {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen((prev) => !prev);
  };

  const questionTypes = ['STRING', 'RADIO', 'SELECT'];

  return (
    <>
      <FormChangeBtn>
        <div onClick={onClick}>
          <Change />
        </div>
        <AnimatePresence>
          {isOpen && (
            <FormChangeModal
              id="modal"
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: -50,
              }}
              exit={{
                opacity: 0,
                y: 50,
              }}
            >
              <div className="header">
                <h2>변경</h2>
                <div onClick={onClick}>
                  <Change />
                </div>
              </div>
              <div className="content">
                {questionTypes.map((questionType, index) => (
                  <div className="item" key={index}>
                    {questionType}
                  </div>
                ))}
              </div>
            </FormChangeModal>
          )}
        </AnimatePresence>
      </FormChangeBtn>
    </>
  );
}

export default ChangeButton;
