import React, { useState } from 'react';
import { FormChangeBtn, FormChangeModal } from '@/styles/pages/form/form.styled';
import Change from '@/components/form/components/svg/change';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { FormChangeButtonProps } from '@/types/components/form';
import { useMutation } from '@tanstack/react-query';
import { putForm } from '@/api/form';
import { AdminForm, QuestionType } from '@/types/api/form';

const variants: Variants = {
  initial: { opacity: 0, y: 50 },
  open: { opacity: 1, y: -50 },
  close: { opacity: 0, y: 50 },

  hover: { scale: 1.2, color: '#0061FF' },
  selected: { scale: 1.2, color: '#0061FF' },
};

function ChangeButton({ formData, refetch }: FormChangeButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { mutate } = useMutation(putForm, {
    onSuccess: () => {
      refetch();
    },
  });

  const onClick = () => {
    setIsOpen((prev) => !prev);
  };

  const onChange = (questionType: QuestionType) => {
    const putData: AdminForm = { ...formData, questionType };

    mutate({ data: putData });
    setIsOpen(false);
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
            <FormChangeModal id="modal" initial="initial" animate="open" exit="close" variants={variants}>
              <div className="header">
                <h2>변경</h2>
                <div onClick={onClick}>
                  <Change />
                </div>
              </div>
              <div className="content">
                {questionTypes.map((questionType, index) => (
                  <motion.div
                    className="item"
                    key={index}
                    whileHover="hover"
                    animate={formData.questionType === questionType ? 'selected' : ''}
                    onClick={() => onChange(questionType as QuestionType)}
                    variants={variants}
                  >
                    {questionType}
                  </motion.div>
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
